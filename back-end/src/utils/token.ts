// createToken
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;
export const makeAccessToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "1hr" });
  return token;
};

export const makeRefreshToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "3hr" });
  return token;
};

// 토큰 검증
export const validationAccessToken = (accessToken: string) => {
  if (!accessToken) {
    return 401;
  }
  try {
    jwt.verify(accessToken, SECRET_KEY);
    return 200;
  } catch (err) {
    return 402;
  }
};
// accessToken이 유효하지 않을때
export const validationRefreshToken = (refreshToken: string) => {
  if (!refreshToken) {
    return 401;
  }

  try {
    jwt.verify(refreshToken, SECRET_KEY);
    return 200;
  } catch (err) {
    return 402;
  }
};

export const decodeToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
