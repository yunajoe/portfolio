import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import {
  deletePortPolioContentsQuery,
  deletePortPolioQuery,
  getDefaultPortPolioQuery,
  getPortPolioContentsList,
  getPortPolioContentsQuery,
  getPortPolioList,
  insertPortPolioContentsQuery,
  updatedPortPolioNameQuery,
  updatedToDefaultResumeQuery,
} from "../db/portpolio";
import { findUserByIdQuery, updatePortPolioQuery } from "../db/users";
import { Item } from "../types/portpolio";
import { decodeToken, validationAccessToken } from "../utils/token";
const crypto = require("crypto");

dotenv.config();

const portpolioRouter = Router();

portpolioRouter.get("/", (req: Request, res: Response) => {
  res.send("나는야홈");
});

portpolioRouter.get("/createPortPolio", async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization!;
  try {
    const result = validationAccessToken(accessToken);
    console.log("result", result);
    if (result === 200) {
      const decodedTokenValue = decodeToken(accessToken);
      const key = decodedTokenValue.key;

      //  findUserByTokenKeyValueQuery222=
      const targetUser = await findUserByIdQuery(key);

      const uniquePortPolioId = crypto.randomBytes(16).toString("hex");

      await updatePortPolioQuery({
        users_table_id: targetUser._id,
        portpolio_id: uniquePortPolioId,
      });

      const initialData = {
        users_table_id: targetUser._id,
        portpolioId: uniquePortPolioId,
        portpolio_name: targetUser.username,
        introText: "",
        careerList: [],
        educationList: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        defaultResume: false,
      };
      const result = await getPortPolioList(targetUser._id);
      const obj = result[result.length - 1];
      if (obj.portpolio_ids.length === 1) {
        initialData.defaultResume = true;
      }
      await insertPortPolioContentsQuery(initialData);
      return res.send({
        key: uniquePortPolioId,
        status: 200,
      });
    } else if (result === 401) {
      return res.status(401).send("토큰이 없습니다");
    } else if (result === 402) {
      // res.send({ status: , message:}) => 이렇게 하면은 프론트의 인터셉터에서 안 받아와진다? ㅎ
      return res.status(402).send("토큰이 유효하지 않습니다");
    }
  } catch (err) {
    return res.status(500).send("server error");
  }
});

//  저장된 포트폴리오 리스트로 가져오기
portpolioRouter.post("/portpolio/list", async (req: Request, res: Response) => {
  const { data } = req.body;
  const validationStatus = validationAccessToken(data.accessToken);
  if (validationStatus === 200) {
    const result = await getPortPolioList(data.users_table_id);
    return res.send({
      status: 200,
      result,
    });
  } else if (validationStatus === 401) {
    return res.send({
      status: 401,
      message: "accessToken이 없습니다",
    });
  } else if (validationStatus === 402) {
    return res.send({
      status: 402,
      message: "accessToken이 유효하지 않습니다",
    });
  }
});

portpolioRouter.get(
  "/portpolio/detail/list",
  async (req: Request, res: Response) => {
    const users_table_id = req.query.users_table_id as string;
    try {
      const result = await getPortPolioContentsList(users_table_id);
      if (result.length > 0) {
        result.sort((a: Item, b: Item) => {
          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        });
        return res.send(result);
      }
    } catch (err) {
      throw err;
    }
  }
);

//  포트폴리오 상세 내용 가져오기
portpolioRouter.get(
  "/portpolio/detail",
  async (req: Request, res: Response) => {
    const portpolioId = req.query.portpolio_id as string;
    try {
      const result = await getPortPolioContentsQuery(portpolioId);
      return res.send(result);
    } catch (err) {
      throw err;
    }
  }
);

// 포트폴리오 저장하기
portpolioRouter.post("/portpolio/save", async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const result = await insertPortPolioContentsQuery(data);
    if (result) {
      return res.send({
        status: 200,
        message: "포트폴리오 저장에 성공하였습니다",
      });
    } else {
      return res.send({
        status: 400,
        message: "포트폴리오 저장에 실패하였습니다",
      });
    }
  } catch (err) {
    return res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

// 포트폴리오의 기본 이력서 변경하기
portpolioRouter.post(
  "/portpolio/changeToDefaultResume",
  async (req: Request, res: Response) => {
    const { data } = req.body;
    try {
      const result = await updatedToDefaultResumeQuery(data);
      if (result) {
        return res.send({
          status: 200,
          message: "기본 이력서가 변경되었습니다",
        });
      } else {
        return res.send({
          status: 400,
          message: "기본 이력서에 변경에 실패하였습니다",
        });
      }
    } catch (err) {
      throw err;
    }
  }
);

// portpolio이름 변경하기

portpolioRouter.post(
  "/portpolio/editPortPolioName",
  async (req: Request, res: Response) => {
    try {
      const { users_table_id, portpolio_id, portpolio_name } = req.body.data;
      const result = await updatedPortPolioNameQuery(
        users_table_id,
        portpolio_id,
        portpolio_name
      );
      if (result) {
        return res.send({
          status: 200,
          message: "포트폴리오 이름이 변경되었습니다",
        });
      }
      return res.send({
        status: 400,
        message: "포트폴리오 이름 변경에 실패하였습니다",
      });
    } catch (err) {
      throw err;
    }
  }
);

// portpolio삭제하기
portpolioRouter.delete(
  "/portpolio/delete",
  async (req: Request, res: Response) => {
    try {
      const { users_table_id, portpolio_id } = req.body;

      const result1 = await deletePortPolioQuery(users_table_id, portpolio_id);
      const result2 = await deletePortPolioContentsQuery(
        users_table_id,
        portpolio_id
      );

      if (result1 && result2) {
        return res.send({
          status: 200,
          message: "포트폴리오가 삭제 되었습니다",
        });
      }
      return res.send({
        status: 400,
        message: "포트폴리오 삭제에 실패하였습니다",
      });
    } catch (err) {
      throw err;
    }
  }
);

// default portpolios 가져오기
portpolioRouter.get(
  "/portpolio/default/list",
  async (req: Request, res: Response) => {
    try {
      const result = await getDefaultPortPolioQuery();
      return res.send({
        status: 200,
        result,
      });
    } catch (err) {
      return res.send({
        status: 500,
      });
    }
  }
);
module.exports = portpolioRouter;
