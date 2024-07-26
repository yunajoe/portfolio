import { AuthError } from "./error";
import invariant from "./invariant";

// createToken
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;
export const makeAccessToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "2s" });
  return token;
};

export const makeRefreshToken = (data: any) => {
  const token = jwt.sign(data, SECRET_KEY, { expiresIn: "3hr" });
  return token;
};

// accessToken 검증
export const validationAccessToken = (accessToken: string) => {
  if (!accessToken) {
    return 420;
  }
  try {
    jwt.verify(accessToken, SECRET_KEY);
    return 200;
  } catch (err) {
    return 421;
  }
};
// refreshToken 검증
export const validationRefreshToken = (refreshToken: string) => {
  if (!refreshToken) {
    return 410;
  }

  try {
    jwt.verify(refreshToken, SECRET_KEY);
    return 200;
  } catch (err) {
    return 411;
  }
};

export const decodeToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};

//  onlyAccess
export const accessTokenValidationError = (accessToken: string) => {
  const validationStatus = validationAccessToken(accessToken);
  const authErrorResponse = new AuthError("accessToken");

  // 420 (즉, accessToken이 없을떄)
  invariant(
    validationStatus === 200 || validationStatus === 421,
    JSON.stringify(authErrorResponse.print420Error())
  );

  //  421 (accessToken이 유효하지 않을떄)
  invariant(
    validationStatus === 200,
    JSON.stringify(authErrorResponse.print421Error())
  );

  return validationStatus;
};

export const refreshTokenValidationError = (refreshToken: string) => {
  const validationStatus = validationRefreshToken(refreshToken);
  const authErrorResponse = new AuthError("refreshToken");

  // 410 (즉, refreshToken이 없을떄)
  invariant(
    validationStatus === 200 || validationStatus === 411,
    JSON.stringify(authErrorResponse.print410Error())
  );

  //  411 (refreshToken이 유효하지 않을떄)
  invariant(
    validationStatus === 200,
    JSON.stringify(authErrorResponse.print411Error())
  );

  return validationStatus;
};
