// db에 관련하는 펑션들

import { ObjectId, UUID } from "mongodb";
import { db } from ".";

type NewUserData = {
  id: number;
  username: string;
  userprofile: string;
  email: string;
  password: string;
  type: string;
  tokenKeyValue: string;
  accessToken: string;
  refreshToken: string;
};

type NewPortPolioData = {
  users_table_id: Object;
  portpolio_ids: string[];
};

type ExistPortPolioData = {
  users_table_id: Object;
  portpolio_id: string;
};

// 해당정보 넣기
export const insertUserQuery = async (newUserData: NewUserData) => {
  try {
    await db.collection("users").insertOne(newUserData);
  } catch (err) {
    throw err;
  }
};

// tokenKeyValue로 사람 찾기
export const findUserByTokenKeyValueQuery = async (tokenKeyValue: number) => {
  try {
    const user = await db.collection("users").findOne({
      tokenKeyValue: tokenKeyValue,
    });
    return user;
  } catch (err) {
    throw err;
  }
};

// Email로 user찾기
export const findUserByEmailQuery = async (email: string) => {
  try {
    const user = await db.collection("users").findOne({ email: email });
    return user;
  } catch (err) {
    throw err;
  }
};

// id로 user찾기
export const findUserByIdQuery = async (id: number) => {
  try {
    const user = await db.collection("users").findOne({ id: id });
    return user;
  } catch (err) {
    throw false;
  }
};

// _id로 user찾기
export const findUserByObjectIdQuery = async (_id: string) => {
  try {
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(_id) });
    return user;
  } catch (err) {
    throw false;
  }
};

// id로 tokenKeyValue 없데이뚜 하기

export const kakaoUpdateTokenKeyValueQuery = async (id: number) => {
  try {
    const tokenKeyValue = String(new UUID()); // Generate new UUID
    await db
      .collection("users")
      .updateOne({ id: id }, { $set: { tokenKeyValue: tokenKeyValue } });
    return true;
  } catch (err) {
    throw false;
  }
};

//  _id 로 tokenKeyValue 업데이뚜 하기

export const updateTokenKeyValueQuery = async (_id: ObjectId) => {
  try {
    const tokenKeyValue = String(new UUID()); // Generate new UUID
    await db
      .collection("users")
      .updateOne({ _id: _id }, { $set: { tokenKeyValue: tokenKeyValue } });
    return true;
  } catch (err) {
    throw false;
  }
};

//

export const updateAccessToken = async (
  tokenKeyValue: string,
  accessToken: string,
  refreshToken: string
) => {
  try {
    await db
      .collection("users")
      .updateOne(
        { refreshToken: refreshToken },
        { $set: { tokenKeyValue: tokenKeyValue, accessToken: accessToken } }
      );
    return true;
  } catch (err) {
    throw false;
  }
};

// _id로 사람을 찾은후에 accessToken과 frefresh를 토큰을 업데이트해주긴
export const updateAccessAndRefreshTokenQuery = async (
  _id: ObjectId,
  accessToken: string,
  refreshToken: string
) => {
  try {
    await db
      .collection("users")
      .updateOne(
        { _id: _id },
        { $set: { accessToken: accessToken, refreshToken: refreshToken } }
      );
    return true;
  } catch (err) {
    throw false;
  }
};

// portpolio테이블에 user정보가 있는지 확인하는 쿼리
export const isUserAlreadyExist = async (uniqueId: Object) => {
  try {
    const result = await db.collection("portpolio").findOne({
      users_table_id: uniqueId,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

// 신규 회원일 경우 portpolio 테이블에 데이터 넣는 쿼리
export const insertPortPolioQuery = async (
  newPortPolioData: NewPortPolioData
) => {
  try {
    await db.collection("portpolio").insertOne(newPortPolioData);
    return;
  } catch (err) {
    console.error("Error inserting user:", err);
    throw err;
  }
};

// 기존 회원일 경우 portpolio 테이블에 업데이트 하는 쿼리
export const updatePortPolioQuery = async (
  existPortPolioData: ExistPortPolioData
) => {
  try {
    await db.collection("portpolio").updateOne(
      {
        users_table_id: existPortPolioData.users_table_id,
      }, // 업데이트 대상 문서의 조건
      { $push: { portpolio_ids: existPortPolioData.portpolio_id } } // $push 연산자를 사용하여 portpolio_ids 배열에 새로운 값을 추가
    );
  } catch (err) {
    throw err;
  }
};

/// users_table_id로 user테이블에서 정보 빼내기

export const findUserByUsersTableId = async (users_table_id: string) => {
  if (users_table_id !== "") {
    const Object_Id = new ObjectId(users_table_id.toString());

    try {
      const result = await db.collection("users").findOne({
        _id: Object_Id,
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
};

// users의 테이블에서 type이랑 email로 _id return학
export const findUserByTypeAndEmailQuery = async (
  type: string,
  email: string
) => {
  try {
    const result = await db.collection("users").findOne({
      type: type,
      email: email,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

//  refresh Token으로 사람 찾기

export const findUserByRefreshToken = async (refreshToken: string) => {
  try {
    const result = await db.collection("users").findOne({
      refreshToken: refreshToken,
    });

    return result;
  } catch (err) {
    throw err;
  }
};

// 로그아웃시 ,accessToken, refreshToken, keyValue다 없애기

export const deleteAccessAndRefreshTokenQuery = async (_id: string) => {
  try {
    await db.collection("users").updateOne(
      {
        _id: new ObjectId(_id),
      },
      {
        $set: {
          tokenKeyValue: "",
          accessToken: "",
          refreshToken: "",
        },
      }
    );
    return true;
  } catch (err) {
    throw err;
  }
};

// user테이블테 이미지  업데이트
export const updatedProfileImageQuery = async (
  _id: string,
  userprofile: string
) => {
  try {
    await db.collection("users").updateOne(
      {
        _id: new ObjectId(_id),
      },
      {
        $set: {
          userprofile: userprofile,
        },
      }
    );
    return true;
  } catch (err) {
    throw false;
  }
};

// user테이블에 닉네임 업데이트
export const updatedNickNameQuery = async (_id: string, username: string) => {
  try {
    await db.collection("users").updateOne(
      {
        _id: new ObjectId(_id),
      },
      {
        $set: {
          username: username,
        },
      }
    );
    return true;
  } catch (err) {
    throw false;
  }
};

// user

export const updatedPassWordQuery = async (
  _id: string,
  new_password: string
) => {
  try {
    await db.collection("users").updateOne(
      {
        _id: new ObjectId(_id),
      },
      {
        $set: {
          password: new_password,
        },
      }
    );
    return true;
  } catch (err) {
    throw false;
  }
};

// _id를 받아서 users테이블 삭제하기
export const deleteUserQuery = async (_id: string) => {
  try {
    await db.collection("users").deleteOne({
      _id: new ObjectId(_id),
    });
    return true;
  } catch (err) {
    throw false;
  }
};
