import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import {
  findUserByObjectIdQuery,
  findUserByRefreshToken,
  findUserByUsersTableId,
  updatedNickNameQuery,
  updatedPassWordQuery,
  updatedProfileImageQuery,
} from "../db/users";
import { UserError } from "../utils/error";
import invariant from "../utils/invariant";
import { fileFilter, fileStorage, multer } from "../utils/multer";

dotenv.config();

const userRouter = Router();

userRouter.get(
  "/user/findUserByObjectID",
  async (req: Request, res: Response) => {
    const _id = req.query._id as string;
    try {
      const userErrorResponse = new UserError("findUserByOjectID");
      const result = await findUserByObjectIdQuery(_id);
      invariant(
        result === true,
        JSON.stringify(userErrorResponse.print400Error())
      );
      return res.send({
        status: 200,
        message: "해당 user정보를 찾았습니다",
        userInfo: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        const jsonParse = JSON.parse(error.message);
        return res.status(jsonParse.status).send(jsonParse);
      }
    }
  }
);

userRouter.get(
  "/user/findUserByUserTableID",
  async (req: Request, res: Response) => {
    const users_table_id = req.query.users_table_id as string;
    try {
      const userErrorResponse = new UserError("findUserByUserTableID");
      const result = await findUserByUsersTableId(users_table_id);
      invariant(
        result === true,
        JSON.stringify(userErrorResponse.print400Error())
      );
      return res.send({
        status: 200,
        message: "해당 user정보를 찾았습니다",
        userInfo: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        const jsonParse = JSON.parse(error.message);
        return res.status(jsonParse.status).send(jsonParse);
      }
    }
  }
);

userRouter.get(
  "/user/findByRefreshToken",
  async (req: Request, res: Response) => {
    const refreshToken = req.query.refreshToken as string;
    const result = await findUserByRefreshToken(refreshToken);
    return res.send({
      status: 200,
      message: "success",
      access_token: result.accessToken,
      refresh_token: result.refreshToken,
      user_data: result,
    });
  }
);

export const multerUpload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});

userRouter.post(
  "/user/uploadProfileImage",
  multerUpload.single("file"),
  async (req: Request, res: Response) => {
    const userErrorResponse = new UserError("profileImage");

    if (!req.file) {
      return JSON.stringify(userErrorResponse.print401Error());
    }
    try {
      const file = req.file;
      const result = await updatedProfileImageQuery(
        req.body._id,
        file.filename
      );
      invariant(
        result === true,
        JSON.stringify(userErrorResponse.print400Error())
      );
      return res.send({
        status: 200,
        message: "프로필이미지가 변경 되었습니다",
        file,
      });
    } catch (error) {
      if (error instanceof Error) {
        const jsonParse = JSON.parse(error.message);
        return res.status(jsonParse.status).send(jsonParse);
      }
    }
  }
);

userRouter.post("/user/updateUserName", async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const result = await updatedNickNameQuery(data._id, data.username);
    const userErrorResponse = new UserError("username");
    invariant(
      result === true,
      JSON.stringify(userErrorResponse.print400Error())
    );
    return res.send({
      status: 200,
      message: "닉네임이 변경 되었습니다",
    });
  } catch (error) {
    if (error instanceof Error) {
      const jsonParse = JSON.parse(error.message);
      return res.status(jsonParse.status).send(jsonParse);
    }
  }
});

// user password 변경하기
userRouter.post(
  "/user/updateUserPassword",
  async (req: Request, res: Response) => {
    const { data } = req.body;

    try {
      const userData = await findUserByObjectIdQuery(data._id);
      const correctCurrentPassword = userData.password;
      const userErrorResponse = new UserError("password");
      invariant(
        correctCurrentPassword === data.current_password,
        JSON.stringify(userErrorResponse.print400Error())
      );
      invariant(
        correctCurrentPassword !== data.new_password,
        JSON.stringify(userErrorResponse.print401Error())
      );
      await updatedPassWordQuery(data._id, data.new_password);
      return res.send({
        status: 200,
        message: "비밀번호가 업데이트 되었습니다",
      });
    } catch (error) {
      if (error instanceof Error) {
        const jsonParse = JSON.parse(error.message);
        return res.status(jsonParse.status).send(jsonParse);
      }
    }
  }
);

module.exports = userRouter;
