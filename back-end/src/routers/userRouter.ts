import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import { findUserByRefreshToken, findUserByUsersTableId } from "../db/users";
import { fileStorage, multer } from "../utils/multer";

dotenv.config();

const userRouter = Router();

userRouter.get(
  "/user/findByUserTableID",
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

// req는 요청에 대한 정보
// file은 업로드한 파일에 대한 정보
// cb는 함수다
// cb는 2개의 인자를 받는다
// 첫 번째 인수에는 에러가 있다면 에러를 넣고, 두 번째 인수에는 실제 경로나 파일 이름을 넣어주면 된다.

const upload = multer({ storage: fileStorage });

userRouter.post(
  "/user/uploadProfileImage",
  upload.single("image"),
  async (req: Request, res: Response) => {
    console.log(req.file, req.body);
  }
);

module.exports = userRouter;
