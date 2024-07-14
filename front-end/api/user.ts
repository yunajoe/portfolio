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
