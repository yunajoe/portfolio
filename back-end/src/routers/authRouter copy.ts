import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import { UUID } from "mongodb";
import qs from "qs";
import { instance } from "../api";
import { getAccessTokenOptions, getUserInfoOptions } from "../api/auth";
import { db } from "../db";
import { insertUserQuery } from "../db/users";
import {
  createInitPortPolio,
  loginLocal,
  makeOwnAccessAndRefreshToken,
  registerLocal,
  updateTokenKeyValue,
} from "../middleware/auth";
import {
  makeAccessToken,
  makeRefreshToken,
  validationRefreshToken,
} from "../utils/token";
dotenv.config();
const authRouter = Router();

authRouter.get("/auth", (req: Request, res: Response) => {
  res.send("Auth페이지입니다");
});

authRouter.post(
  "/auth/login/kakao",
  async (req: Request, res: Response, next) => {
    const { code } = req.body;

    const data = {
      grant_type: "authorization_code",
      client_id: process.env.KAKAO_CLIENT_ID,
      redirect_uri: process.env.KAKAO_REDIRECT_URL,
      code: code,
    };

    try {
      const response = await instance({
        ...getAccessTokenOptions,
        data: qs.stringify(data),
      });
      res.locals.result = response;
    } catch (err) {
      console.error(err);
      next(err);
    }

    next();
  },

  async (req, res, next) => {
    const { status, data } = res.locals.result;
    const { access_token, refresh_token } = data;
    if (status === 200) {
      try {
        const response = await instance({
          ...getUserInfoOptions,
          headers: {
            ...getUserInfoOptions.headers,
            Authorization: `Bearer ${access_token}`,
          },
        });
        const { id, kakao_account } = response.data;

        const newUserData = {
          id: id,
          username: kakao_account.profile.nickname,
          email: kakao_account.email,
          password: "",
          type: "KaKao",
          tokenKeyValue: String(new UUID()),
          accessToken: "",
          refreshToken: "",
        };
        // 다음 middleward에 넘겨줄려구
        res.locals.kakaoId = id;
        res.locals.tokenKeyValue = newUserData.tokenKeyValue;

        // 해당 id가 db에 있으면은 pass, 없으면은 insert 문
        const userData = await db
          .collection("users")
          .find({ id: id })
          .toArray();
        if (userData.length === 0) {
          await insertUserQuery(newUserData);
        }
      } catch (err) {
        console.error(err);
        next(err);
      }
    }

    next();
  },

  // 우리반의 토큰을 생성하여서 보내기
  (req, res) => {
    const { status } = res.locals.result;
    const payload = res.locals.tokenKeyValue;
    const accessToken = makeAccessToken({ key: payload });
    const refreshToken = makeRefreshToken({ key: payload });

    console.log("accessToken와 refreshTOken");

    if (status === 200) {
      return res.status(200).send({
        status: 200,
        message: "success",
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } else {
      return res.status(400).send({
        status: 400,
        message: "fail",
      });
    }
  }
);

// refreshToken으로 accessToken만들기
authRouter.get(
  "/auth/tokens/refreshToken",
  async (req: Request, res: Response) => {
    const refreshToken = req.query.refreshToken as string;

    try {
      const result = await validationRefreshToken(refreshToken);

      if (result === 200) {
        const newAccessToken = makeAccessToken({ key: new UUID() });
        return res.send({
          status: 200,
          message: "새로운 access 토큰이 발급되었습니다",
          accessToken: newAccessToken,
        });
      } else if (result === 401) {
        return res.status(401).send("refresh 토큰이 없습니다");
      } else if (result === 402) {
        // res.send({ status: , message:}) => 이렇게 하면은 프론트의 인터셉터에서 안 받아와진다? ㅎ
        return res.status(402).send("refresh 토큰이 유효하지 않습니다");
      }
    } catch (err) {
      return res.status(500).send("Server Error");
    }
  }
);

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

module.exports = authRouter;
