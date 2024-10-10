import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import {
  deletePortPolioContentsQuery,
  deletePortPolioQuery,
  getCurrentUserDefaultPortPolio,
  getDefaultPortPolioQuery,
  getPortPolioContentsList,
  getPortPolioContentsQuery,
  getPortPolioList,
  insertPortPolioContentsQuery,
  updatedPortPolioNameQuery,
  updatedToDefaultResumeQuery,
} from "../db/portpolio";
import {
  findUserByTokenKeyValueQuery,
  updatePortPolioQuery,
} from "../db/users";
import { Item } from "../types/portpolio";
import { getOnlyAccessToken } from "../utils/preprocessing";
import { accessTokenValidationError, decodeToken } from "../utils/token";
const crypto = require("crypto");

dotenv.config();

const portpolioRouter = Router();

portpolioRouter.get("/", (req: Request, res: Response) => {
  res.send("나는야홈");
});

portpolioRouter.get("/createPortPolio", async (req: Request, res: Response) => {
  if (!req.headers.authorization) return;
  const accessToken = getOnlyAccessToken(req.headers.authorization);
  try {
    const validationStatus = accessTokenValidationError(accessToken);
    if (validationStatus === 200) {
      const decodedTokenValue = decodeToken(accessToken);
      const key = decodedTokenValue.key;
      const targetUser = await findUserByTokenKeyValueQuery(key);
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
        bookmark: false,
      };
      const result = await getPortPolioList(targetUser._id);
      const obj = result[result.length - 1];
      if (obj.portpolio_ids.length === 1) {
        initialData.defaultResume = true;
      }
      await insertPortPolioContentsQuery(initialData);
      return res.status(200).send({
        key: uniquePortPolioId,
        status: 200,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      const jsonParse = JSON.parse(error.message);
      return res.status(jsonParse.status).send(jsonParse);
    }
    return res.status(500).send("internal server error");
  }
});

// 요걸루 뿌린당
portpolioRouter.get(
  "/portpolio/detail/list",
  async (req: Request, res: Response) => {
    const users_table_id = req.query.users_table_id as string;
    try {
      const result = await getPortPolioContentsList(users_table_id);
      if (!result) {
        return res.status(400).send({
          status: 400,
          message: "포트폴리오 리스트를 가지고 오는데 실패하였습니다",
        });
      }
      if (result && result.length > 0) {
        result.sort((a: Item, b: Item) => {
          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        });
      }
      return res.status(200).send({
        status: 200,
        message: "포트폴리오 리스트를 가지고 왔습니다",
        result,
      });
    } catch (err) {
      return res.status(500).send("internal server error");
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
      if (result) {
        return res.status(200).send({
          status: 200,
          message: "상세 포트폴리오를 가지고 왔습니다",
          result,
        });
      }
      return res.status(400).send({
        status: 400,
        message: "상세 포트폴리오를 가지고 오는데 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  }
);

// 드래그해서 변경된 순서의 포폴 저장하기
//
portpolioRouter.post(
  "/portpolio/update/portpolioIds",
  async (req: Request, res: Response) => {
    const { users_table_id, portpolio_ids } = req.body.data;
    try {
      const arr = await getPortPolioContentsList(users_table_id);
      const result = portpolio_ids.map((id: string) => {
        const targetPortPolio = arr.filter(
          (item: Item) => item.portpolioId === id
        );
        return targetPortPolio[0];
      });

      if (result && result.length > 0) {
        return res.status(200).send({
          status: 200,
          message: "포트폴리오 리스트를 가지고 왔습니다",
          result,
        });
      }
      return res.status(400).send({
        status: 400,
        message: "포트폴리오 리스트를 가지고 오는데 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  }
);

// 포트폴리오 저장하기
portpolioRouter.post("/portpolio/save", async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const result = await insertPortPolioContentsQuery(data);
    if (result) {
      return res.status(200).send({
        status: 200,
        message: "포트폴리오 저장에 성공하였습니다",
      });
    }
    return res.status(400).send({
      status: 400,
      message: "포트폴리오 저장에 실패하였습니다",
    });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

// 포트폴리오의 기본 이력서 변경하기
portpolioRouter.post(
  "/portpolio/changeToDefaultResume",
  async (req: Request, res: Response) => {
    const { users_table_id, portpolio_id } = req.body.data;
    try {
      const result = await updatedToDefaultResumeQuery(
        users_table_id,
        portpolio_id
      );
      if (result) {
        return res.status(200).send({
          status: 200,
          message: "기본 이력서가 변경되었습니다",
        });
      }
      return res.status(400).send({
        status: 400,
        message: "기본 이력서에 변경에 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
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
        return res.status(200).send({
          status: 200,
          message: "포트폴리오 이름이 변경되었습니다",
        });
      }
      return res.status(400).send({
        status: 400,
        message: "포트폴리오 이름 변경에 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
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
        return res.status(200).send({
          status: 200,
          message: "포트폴리오가 삭제 되었습니다",
        });
      }
      return res.status(400).send({
        status: 400,
        message: "포트폴리오 삭제에 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  }
);

// default portpolios 가져오기
portpolioRouter.get(
  "/portpolio/default/list",
  async (req: Request, res: Response) => {
    try {
      const result = await getDefaultPortPolioQuery();
      if (result) {
        return res.status(200).send({
          status: 200,
          message: "default portpolio list를 가져오는데 성공하였습닌다",
          result,
        });
      }
      return res.status(400).send({
        status: 400,
        message: "default portpolio list를 가져오는데 실패하였습니다",
      });
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  }
);

portpolioRouter.get(
  "/portpolio/default",
  async (req: Request, res: Response) => {
    const _id = req.query._id as string;
    try {
      const result = await getCurrentUserDefaultPortPolio(_id);
      if (result) {
        return res.send({
          status: 200,
          message: "default 포트폴리오를 가지고 오는데 성공하였습니다",
          result,
        });
      } else {
        return res.send({
          status: 400,
          message: "default 포트폴리오를 가지고 오는데실패",
        });
      }
    } catch (err) {
      return res.status(500).send("internal server error");
    }
  }
);

//  porpotfolioID를 인자로 bookmark하기
// portpolioRouter.post(
//   "/portfolio/changeBookMark",
//   async (req: Request, res: Response) => {
//     const { portfolio_id } = req.body.data;
//     console.log("reqest", portfolio_id);
//   }
// );
module.exports = portpolioRouter;
