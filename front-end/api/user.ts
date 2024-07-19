import axios from "axios";
import instance from ".";

export const getUserInfoByUserObjectId = async (_id: string) => {
  const response = await instance.get("user/findUserByObjectID", {
    params: {
      _id: _id,
    },
  });
  return response;
};

export const getUserInfoByUserTableId = async (users_table_id: string) => {
  const response = await instance.get("user/findUserByUserTableID", {
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
export const uploadUserProfileImage = async (formData: FormData) => {
  const response = await axios.post(
    "http://localhost:8080/user/uploadProfileImage",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response;
};

type UpdateUserName = {
  type: string;
  _id: string;
  username: string;
};
// user/editUserName
export const updateUserName = async (data: UpdateUserName) => {
  const { _id, username } = data;

  const response = await instance.post("/user/editUserName", {
    data: {
      _id,
      username,
    },
  });
  return response;
};
