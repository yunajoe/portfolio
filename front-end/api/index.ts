import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const AuthAPI = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "content-type": "application/json" },
});

const FormDataAPI = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "content-Type": "multipart/form-data" },
});

AuthAPI.interceptors.response.use(
  // accessToken이 유효할때
  (response) => {
    return response;
  },

  async (error) => {
    // console.log(error.response.status);
    // config안에 headers.. 가 있땨
    const originalConfig = error.config;
    console.log("original", originalConfig);
    console.log(error.response);
    console.log("originConfig", originalConfig);
    if (error.response.status === 401) {
      window.location.href = "/";
    } else if (error.response.status === 402) {
      try {
        // refresh유dbgyfkEO
        const refreshToken = await getCookie("refreshToken");
        const result = await axios.get(
          "http://localhost:8080/auth/tokens/refreshToken",
          {
            params: {
              refreshToken,
            },
          }
        );

        setCookie("accessToken", result.data.accessToken);
        originalConfig.headers["Authorization"] = result.data.accessToken;
        return AuthAPI(originalConfig);
      } catch (error) {
        if (error.response.status === 412) {
          console.log("refresh토큰이유효하지 않습니다");
          // 자동로그아웃기능?
        }
      }
    }

    return Promise.reject(error);
  }
);

export default AuthAPI;
