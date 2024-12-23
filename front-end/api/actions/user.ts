import privateAPI from "@/api/private";
import axios from "axios";

export const getUserInfoByUserObjectId = async (_id: string) => {
  const response = await privateAPI.get("user/findUserByObjectID", {
    params: {
      _id: _id,
    },
  });
  return response;
};

export const getUserInfoByUserTableId = async (users_table_id: string) => {
  try {
    const response = await privateAPI.get("user/findUserByUserTableID", {
      params: {
        users_table_id: users_table_id,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getUserInfoByRefreshToken = async (refreshToken: string) => {
  const response = await privateAPI.get("user/findByRefreshToken", {
    params: {
      refreshToken: refreshToken,
    },
  });
  return response;
};

export const uploadUserProfileImage = async (formData: FormData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/uploadProfileImage",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

type UpdateUserName = {
  type: string;
  _id: string;
  username: string;
};
export const updateUserName = async (data: UpdateUserName) => {
  const { _id, username } = data;

  try {
    const response = await privateAPI.post("/user/updateUserName", {
      data: {
        _id,
        username,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

type UpdateUserPassword = {
  type: string;
  _id: string;
  current_password: string;
  new_password: string;
};
export const updateUserPassword = async (data: UpdateUserPassword) => {
  const { _id, current_password, new_password } = data;

  try {
    const response = await privateAPI.post("/user/updateUserPassword", {
      data: {
        _id,
        current_password,
        new_password,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
