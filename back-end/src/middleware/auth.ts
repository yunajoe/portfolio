import { NextFunction, Request, Response } from "express";
import { UUID } from "mongodb";
import qs from "qs";
import { instance } from "../api";
import { getAccessTokenOptions } from "../api/auth";
import { createInitPortPolioQuery } from "../db/portpolio";
import {
  findUserByEmailQuery,
  findUserByTokenKeyValueQuery,
  findUserByTypeAndEmailQuery,
  insertUserQuery,
  updateAccessAndRefreshTokenQuery,
  updateTokenKeyValueQuery,
} from "../db/users";
import { removeIdAndPassword } from "../utils/preprocessing";
import { makeAccessToken, makeRefreshToken } from "../utils/token";

// registerKaKao
export const loginKaKao = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

    res.locals.response = response;
  } catch (err) {
    console.error(err);
    next(err);
  }

  next();
};

export const registerLocal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.body;
  const { username, email, password } = data;
  const result = await findUserByEmailQuery(email);

  if (result) {
    return res.send({
      status: 400,
      message: "해당 이메일로 이미 가입이 되었습니다",
    });
  } else {
    const newUserData = {
      id: 1,
      username: username,
      email: email,
      password: password,
      type: "Local",
      tokenKeyValue: String(new UUID()),
      accessToken: "",
      refreshToken: "",
    };

    await insertUserQuery(newUserData);

    res.locals.user_data = newUserData;

    next();
  }
};

export const createInitPortPolio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_data = res.locals.user_data;

  try {
    const targetUser = await findUserByTypeAndEmailQuery(
      user_data.type,
      user_data.email
    );

    const filteredTargetUser = removeIdAndPassword(targetUser);

    res.locals.user_data = filteredTargetUser;

    await createInitPortPolioQuery({
      user_table_id: targetUser._id,
      username: targetUser.username,
      email: targetUser.email,
      type: targetUser.type,
    });
  } catch (err) {
    throw err;
  }
  next();
};

export const makeOwnAccessAndRefreshToken = async (
  req: Request,
  res: Response
) => {
  const user_data = res.locals.user_data;

  const accessToken = makeAccessToken({ key: user_data.tokenKeyValue });
  const refreshToken = makeRefreshToken({ key: user_data.tokenKeyValue });

  await updateAccessAndRefreshTokenQuery(
    user_data._id,
    accessToken,
    refreshToken
  );
  return res.status(200).send({
    status: 200,
    message: "success",
    access_token: accessToken,
    refresh_token: refreshToken,
    user_data: user_data,
  });
};

// loginLocal
export const loginLocal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.body;
  const { email, password } = data;

  // email이 있는지 확인
  const targetUser = await findUserByEmailQuery(email);

  if (!targetUser) {
    return res.send({
      status: 400,
      message: "해당 이메일로 가입된 적이 없습니다",
    });
  }

  if (targetUser.password !== password) {
    return res.send({
      status: 401,
      message: "패스워드가 잘못 되었습니다",
    });
  }

  res.locals.user_data = targetUser;
  next();
};

export const updateTokenKeyValue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_data = res.locals.user_data;

  const result = await updateTokenKeyValueQuery(user_data._id);

  if (result) {
    const targetUser = await findUserByTokenKeyValueQuery(user_data._id);
    const filteredTargetUser = removeIdAndPassword(targetUser);
    res.locals.user_data = filteredTargetUser;
  }
  next();
};
