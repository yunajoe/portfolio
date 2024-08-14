import dotenv from "dotenv";
import { NextFunction, Request, Response, Router } from "express";

import { UUID } from "mongodb";
import {
  deleteAllPortPolioContents,
  deletePortPolioByUsersTableId,
} from "../db/portpolio";
import {
  deleteAccessAndRefreshTokenQuery,
  deleteUserQuery,
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
        return res.status(200).send({
          status: 200,
          message: "로그아웃이 성공적으로 되었습니다",
        });
      }
      return res.status(400).send({
        status: 400,
        message: "로그아웃에 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("Server Error");
    }
  }
);

authRouter.delete(
  "/auth/delete",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _id = req.body._id;
      const result1 = await deleteUserQuery(_id);
      const result2 = await deletePortPolioByUsersTableId(_id);
      const result3 = await deleteAllPortPolioContents(_id);
      if (result1 && result2 && result3) {
        return res.status(200).send({
          status: 200,
          message: "탈퇴에 성공하였습니다",
        });
      }
      return res.status(400).send({
        status: 400,
        message: "탈퇴를 성공적으로 못하였습니다",
      });
    } catch (error) {
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = authRouter;
