import { ObjectId } from "mongodb";
import { db } from ".";

type CreateInitPortPolioQuery = {
  user_table_id: string;
  username: string;
  email: string;
  type: string;
};

export const createInitPortPolioQuery = async (
  data: CreateInitPortPolioQuery
) => {
  const { user_table_id, username, email, type } = data;

  const initPortPolioData = {
    users_table_id: user_table_id,
    username: username,
    email: email,
    portpolio_ids: [],
    type: type,
  };
  try {
    await db.collection("portpolio").insertOne(initPortPolioData);
    return true;
  } catch (err) {
    return false;
  }
};

export const getPortPolioList = async (users_table_id: string) => {
  try {
    const result = await db
      .collection("portpolio")
      .find({ users_table_id: new ObjectId(users_table_id) })
      .toArray();
    return result;
  } catch (err) {
    return false;
  }
};

export const getPortPolioContentsList = async (users_table_id: string) => {
  try {
    const result = await db
      .collection("portpolio_contents")
      .find({ users_table_id: new ObjectId(users_table_id) })
      .toArray();
    return result;
  } catch (err) {
    return false;
  }
};

// 포폴 아이디의가 portpolio_contents
export const getPortPolioContentsQuery = async (portpolio_id: string) => {
  try {
    const result = await db
      .collection("portpolio_contents")
      .findOne({ portpolioId: portpolio_id });
    return result;
  } catch (err) {
    return false;
  }
};

// 해당 포폴에 데이터 넣기
type InsertPortPolioContentsQuery = {
  portpolioId: string;
  introText: string;
  careerList: any[];
  educationList: any[];
};
export const insertPortPolioContentsQuery = async (
  data: InsertPortPolioContentsQuery
) => {
  const { portpolioId, introText, careerList, educationList } = data;

  const result = await getPortPolioContentsQuery(portpolioId);
  if (result === null) {
    await db.collection("portpolio_contents").insertOne(data);
  } else {
    await db.collection("portpolio_contents").updateOne(
      { portpolioId: portpolioId }, // 필터: portpolioId가 주어진 id와 일치하는 문서
      {
        $set: {
          introText: introText,
          careerList: careerList,
          educationList: educationList,
          updatedAt: new Date(),
        },
      }
    );
    return true;
  }
};

export const updatedToDefaultResumeQuery = async (
  users_table_id: string,
  portpolioId: string
) => {
  try {
    await db.collection("portpolio_contents").updateOne(
      {
        users_table_id: new ObjectId(users_table_id),
        portpolioId: portpolioId,
      },
      { $set: { defaultResume: true, updatedAt: new Date() } }
    );
    await db.collection("portpolio_contents").updateMany(
      {
        users_table_id: new ObjectId(users_table_id),
        portpolioId: { $ne: portpolioId },
      },
      { $set: { defaultResume: false } }
    );

    return true;
  } catch (err) {
    return false;
  }
};

export const updatedPortPolioNameQuery = async (
  users_table_id: string,
  portpolio_id: string,
  portpolio_name: string
) => {
  try {
    await db.collection("portpolio_contents").updateOne(
      {
        users_table_id: new ObjectId(users_table_id),
        portpolioId: portpolio_id,
      },
      {
        $set: { portpolio_name: portpolio_name, updatedAt: new Date() },
      }
    );

    return true;
  } catch (err) {
    return false;
  }
};
// delete PortPolio using user_table_id
export const deletePortPolioByUsersTableId = async (users_table_id: string) => {
  try {
    await db.collection("portpolio").deleteOne({
      users_table_id: new ObjectId(users_table_id),
    });
    return true;
  } catch (err) {
    return false;
  }
};

// delete PortPolio using user_table_id
export const deleteAllPortPolioContents = async (users_table_id: string) => {
  try {
    await db.collection("portpolio_contents").deleteMany({
      users_table_id: new ObjectId(users_table_id),
    });
    return true;
  } catch (err) {
    return false;
  }
};

// delete PortPolioContent
export const deletePortPolioContentsQuery = async (
  users_table_id: string,
  portpolioId: string
) => {
  try {
    await db.collection("portpolio_contents").deleteOne({
      users_table_id: new ObjectId(users_table_id),
      portpolioId: portpolioId,
    });
    return true;
  } catch (err) {
    return false;
  }
};

// delete portpolio
export const deletePortPolioQuery = async (
  users_table_id: string,
  portpolio_id: string
) => {
  try {
    const result = await db.collection("portpolio").findOne({
      users_table_id: new ObjectId(users_table_id),
    });
    const filteredPorPolioIds = result.portpolio_ids.filter(
      (item: string) => item !== portpolio_id
    );

    await db.collection("portpolio_contents").updateOne(
      { users_table_id: new ObjectId(users_table_id) },
      {
        $set: {
          portpolio_ids: filteredPorPolioIds,
        },
      }
    );
    return true;
  } catch (err) {
    return false;
  }
};

// defaultResume:true인것만 가져오기
export const getDefaultPortPolioQuery = async () => {
  try {
    const result = await db
      .collection("portpolio_contents")
      .find({
        defaultResume: true,
      })
      .toArray();
    return result;
  } catch (err) {
    return false;
  }
};

// users테이블의 _id로 portpolioconetns_의 users_table_idf에서
// 그 중 defaultResusme한 데이터 (object를)가져온당

export const getCurrentUserDefaultPortPolio = async (_id: string) => {
  try {
    const result = await db.collection("portpolio_contents").findOne({
      users_table_id: new ObjectId(_id),
      defaultResume: true,
    });
    return result;
  } catch (err) {
    return false;
  }
};
