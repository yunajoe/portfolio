import axios from "axios";
import instance from ".";

export const getUserInfoByUserTableId = async (users_table_id: string) => {
  const response = await instance.get("user/findByUserTableID", {
    params: {
      users_table_id: users_table_id,
    },
  });
  return response;
};

export const getUserInfoByRefreshToken = async (refreshToken: string) => {
  const response = await instance.get("user/findByRefreshToken", {
    params: {
      refreshToken: refreshToken,
    },
  });
  return response;
};

// 이미지 업로드 API
export const uploadUserProfileImageQuery = async (formData: FormData) => {
  const response = await axios.post(
    "http://localhost:8080/user/uploadProfileImage",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response;
};
