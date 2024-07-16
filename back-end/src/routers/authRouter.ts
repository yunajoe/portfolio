import dotenv from "dotenv";
import { NextFunction, Request, Response, Router } from "express";
import { ObjectId, UUID } from "mongodb";

import { deleteAccessAndRefreshToken, updateAccessToken } from "../db/users";
import {
  createInitPortPolio,
  loginKaKao,
  loginLocal,
  makeOwnAccessAndRefreshToken,
  registerLocal,
  updateTokenKeyValue,
} from "../middleware/auth";
import { makeAccessToken, validationRefreshToken } from "../utils/token";
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
      const result = await validationRefreshToken(refreshToken);

      if (result === 200) {
        const tokenKeyValue = String(new UUID());
        const newAccessToken = makeAccessToken({ key: tokenKeyValue });
        // keyvalue랑 accessTOken저장하기
        await updateAccessToken(tokenKeyValue, newAccessToken, refreshToken);

        return res.send({
          status: 200,
          message: "새로운 access 토큰이 발급되었습니다",
          accessToken: newAccessToken,
        });
      } else if (result === 411) {
        return res.status(411).send("refresh 토큰이 없습니다");
      } else if (result === 412) {
        // res.send({ status: , message:}) => 이렇게 하면은 프론트의 인터셉터에서 안 받아와진다? ㅎ
        return res.status(412).send("refresh 토큰이 유효하지 않습니다");
      }
    } catch (err) {
      return res.status(500).send("Server Error");
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
      const objectId = new ObjectId(data._id);
      const result = await deleteAccessAndRefreshToken(objectId);
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
