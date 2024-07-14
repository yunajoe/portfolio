//AuthCode 받기

import axios from "axios";

export const KaKaoInstance = axios.create();

export const kakaoAuth = "https://kauth.kakao.com/oauth/";
export const getAuthCode =
  kakaoAuth +
  `authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;

export const getUserInfoOptions = {
  method: "GET",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  url: "https://kapi.kakao.com/v2/user/me",
};
