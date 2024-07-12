import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import { findUserByRefreshToken, findUserByUsersTableId } from "../db/users";

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

module.exports = userRouter;
