//  getAcessTokenOptions

export const getAccessTokenOptions = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  url: "https://kauth.kakao.com/oauth/token",
};

export const getUserInfoOptions = {
  method: "GET",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  url: "https://kapi.kakao.com/v2/user/me",
};
