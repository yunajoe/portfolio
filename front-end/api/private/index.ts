import axios, { AxiosError } from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const privateAPI = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "content-type": "application/json" },
});

// request는
// 클라이언트에 저장되어 있는 액세스 토큰을 가져오는 함수
privateAPI.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const onErrorResponse = (error: AxiosError | Error) => {
  try {
    if (error instanceof AxiosError) {
      const response = error.response;
      const errorData = response?.data;
      return errorData;
    }
  } catch (err) {
    return err;
  }
};

privateAPI.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalConfig = error.config;

    const status = error.response ? error.response.status : null;

    // accessToken이 없을떄
    if (status === 420) {
      window.location.href = "http://localhost:3000/auth/login";
      return;
    }

    // accessToken이 유효하지 않을때
    if (status == 421) {
      const refreshToken = await getCookie("refreshToken");

      try {
        const result = await axios.get(
          "http://localhost:8080/auth/tokens/refreshToken",
          {
            params: {
              refreshToken,
            },
          }
        );
        if (!result.data) return Promise.reject();

        setCookie("accessToken", result.data.accessToken);
        originalConfig.headers.Authorization = `Bearer ${result.data.accessToken}`;
        return axios(originalConfig);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (!error.response) return Promise.reject("unexpected Error");
          if (error.response.status !== 200) {
            deleteCookie("accessToken");
            deleteCookie("refreshToken");
            window.location.href = "http://localhost:3000/auth/login";
          }
        }
      }
    }

    const errResponse = onErrorResponse(error);

    return Promise.reject({ data: errResponse });
  }
);

export default privateAPI;
