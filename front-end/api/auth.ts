// accessToken, refreshToken을 받기

import instance from ".";

export const getKaKaoAccessToken = async (kakaoAuthCode: string) => {
  const response = await instance.post("auth/login/kakao", {
    code: kakaoAuthCode,
  });
  return response;
};

export interface GetAccessToken {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export type registerLocalType = {
  email: string;
  password: string;
};

export const registerLocal = async (data: registerLocalType) => {
  const response = await instance.post("auth/register/local", {
    data,
  });
  return response;
};

export const loginLocal = async (data: registerLocalType) => {
  const response = await instance.post("auth/login/local", {
    data,
  });
  return response;
};
