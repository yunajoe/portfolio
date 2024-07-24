import axios from "axios";
import instance from ".";

type CheckUserCurrentPassword = {
  type: string;
  _id: string;
  currentPassword: string;
};

export const checkUserCurrentPassword = async (
  data: CheckUserCurrentPassword
) => {
  const { _id, currentPassword } = data;
  const response = await instance.post("user/checkCurrentPassword", {
    data: {
      _id,
      currentPassword,
    },
  });
  return response;
};

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

type UpdateUserPassword = {
  type: string;
  _id: string;
  current_password: string;
  new_password: string;
};
export const updateUserPassword = async (data: UpdateUserPassword) => {
  const { _id, current_password, new_password } = data;

  const response = await instance.post("/user/updateUserPassword", {
    data: {
      _id,
      current_password,
      new_password,
    },
  });
  return response;
};
