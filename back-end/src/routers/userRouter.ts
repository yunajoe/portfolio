import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import {
  findUserByObjectIdQuery,
  findUserByRefreshToken,
  findUserByUsersTableId,
  updatedNickNameQuery,
  updatedProfileImageQuery,
} from "../db/users";
import { fileFilter, fileStorage, multer } from "../utils/multer";

dotenv.config();

const userRouter = Router();

userRouter.get(
  "/user/findUserByObjectID",
  async (req: Request, res: Response) => {
    const _id = req.query._id as string;

    try {
      const result = await findUserByObjectIdQuery(_id);
      if (result) {
        return res.send({
          status: 200,
          message: "해당 user정보를 찾았습니다",
          userInfo: result,
        });
      }
      return res.send({
        status: 400,
        message: "프로필 이미지가 변경에 실패하였습니다",
      });
    } catch (err) {
      return res.send({
        status: 500,
        message: "internal server error",
      });
    }
  }
);

userRouter.get(
  "/user/findUserByUserTableID",
  async (req: Request, res: Response) => {
    const users_table_id = req.query.users_table_id as string;
    try {
      const result = await findUserByUsersTableId(users_table_id);
      if (result !== null) {
        return res.send({
          status: 200,
          result,
        });
      }
      return res.send({
        status: 400,
        message: "해당 회원이 없습니다",
      });
    } catch (err) {
      console.log(err);
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
    if (!req.file) {
      return res.send({
        status: 400,
        message: "이미지를 업로드해주세요",
      });
    }

    try {
      const file = req.file;
      const result = await updatedProfileImageQuery(
        req.body._id,
        file.filename
      );
      if (result) {
        return res.send({
          status: 200,
          message: "프로필이미지가 변경 되었습니다",
          file,
        });
      }
      return res.send({
        status: 401,
        message: "프로필 이미지가 변경에 실패하였습니다",
      });
    } catch (err) {
      return res.send({
        status: 500,
        message: "internal server error",
      });
    }
  }
);

// "/portpolio/editPortPolioName

userRouter.post("/user/editUserName", async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const result = await updatedNickNameQuery(data._id, data.username);
    if (result) {
      return res.send({
        status: 200,
        message: "닉네임이 변경 되었습니다",
      });
    }
    return res.send({
      status: 401,
      message: "닉네임 변경에 실패하였습니다",
    });
  } catch (err) {
    return res.send({
      status: 500,
      message: "internal server error",
    });
  }
});
module.exports = userRouter;
