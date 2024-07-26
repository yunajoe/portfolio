import dotenv from "dotenv";
import { NextFunction, Request, Response, Router } from "express";

import { UUID } from "mongodb";
import {
  deleteAccessAndRefreshTokenQuery,
  updateAccessToken,
} from "../db/users";
import {
  createInitPortPolio,
  loginKaKao,
  loginLocal,
  makeOwnAccessAndRefreshToken,
  registerLocal,
  updateTokenKeyValue,
} from "../middleware/auth";
import { makeAccessToken, refreshTokenValidationError } from "../utils/token";
dotenv.config();
const authRouter = Router();

authRouter.get("/auth", (req: Request, res: Response) => {
  res.send("Auth페이지입니다");
});

// refreshToken으로 accessToken만들기
authRouter.get(
  "/auth/tokens/refreshToken",
  async (req: Request, res: Response) => {
    const refreshToken = req.query.refreshToken as string;
    try {
      const validationStatus = refreshTokenValidationError(refreshToken);
      if (validationStatus === 200) {
        const tokenKeyValue = String(new UUID());
        const newAccessToken = makeAccessToken({ key: tokenKeyValue });
        await updateAccessToken(tokenKeyValue, newAccessToken, refreshToken);
        return res.send({
          status: 200,
          message: "새로운 access 토큰이 발급되었습니다",
          accessToken: newAccessToken,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        const jsonParse = JSON.parse(error.message);
        return res.status(jsonParse.status).send(jsonParse);
      }
      return res.status(500).send("internal server error");
    }
  }
);

// authRouter.get(
//   "/auth/tokens/refreshToken",
//   async (req: Request, res: Response) => {
//     const refreshToken = req.query.refreshToken as string;
//     const validationStatus = validationRefreshToken(refreshToken);
//     // const validationStatus = refreshTokenValidationError(refreshToken);
//     if (validationStatus === 200) {
//       const tokenKeyValue = String(new UUID());
//       const newAccessToken = makeAccessToken({ key: tokenKeyValue });
//       await updateAccessToken(tokenKeyValue, newAccessToken, refreshToken);
//       return res.send({
//         status: 200,
//         message: "새로운 access 토큰이 발급되었습니다",
//         accessToken: newAccessToken,
//       });
//     } else if (validationStatus === 411) {
//       return res.status(411).send({
//         status: validationStatus,
//         message: "refresh Token이 유효하지 않습니다",
//       });
//     }
//   }
// );

// kakao 회원가입 && 로그인
authRouter.post("/auth/login/kakao", loginKaKao, makeOwnAccessAndRefreshToken);

// 일반 회원가입

authRouter.post(
  "/auth/register/local",
  registerLocal,
  createInitPortPolio,
  makeOwnAccessAndRefreshToken
);

// 일반 로그인
authRouter.post(
  "/auth/login/local",
  loginLocal,
  updateTokenKeyValue,
  makeOwnAccessAndRefreshToken
);

// 로그아웃
authRouter.post(
  "/auth/logout",
  async (req: Request, res: Response, next: NextFunction) => {
    const { data } = req.body;
    try {
      const result = await deleteAccessAndRefreshTokenQuery(data);
      if (result) {
        return res.send({
          status: 200,
          message: "로그아웃이 성공적으로 되었습니다",
        });
      }
      return res.send({
        status: 400,
        message: "로그아웃에 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = authRouter;
