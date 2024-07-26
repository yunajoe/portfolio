import { CareerList, EducationList } from "@/types/portpolio";
import instance from ".";
// export const createPortPolio = async (accessToken: string) => {
//   console.log(" createPortPolio", accessToken);
//   try {
//     const response = await instance.get("createPortPolio", {
//       headers: {
//         Authorization: accessToken,
//       },
//     });

//     console.log("resonse", response);

//     return response;
//   } catch (err) {
//     console.log("err", err);
//     return err;
//   }
// };

// CREATE 포폴
export const createPortPolio = async () => {
  try {
    const response = await instance.get("createPortPolio");
    console.log("resonse", response);
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

// SAVE 포폴
export type SavePortPolio = {
  type: string;
  portpolioId: string;
  introText: string;
  careerList: CareerList[];
  educationList: EducationList[];
};
export const savePortPolio = async (data: SavePortPolio) => {
  const { portpolioId, introText, careerList, educationList } = data;
  const response = await instance.post("portpolio/save", {
    data: {
      portpolioId,
      introText,
      careerList,
      educationList,
    },
  });
  return response;
};

// LIST 포폴

type GetPortPolioList = {
  type: string;
  accessToken: string;
  users_table_id: string;
};

export const getPortPolioList = async (data: GetPortPolioList) => {
  const { accessToken, users_table_id } = data;
  const response = await instance.post("portpolio/list", {
    data: {
      accessToken,
      users_table_id,
    },
  });
  return response;
};

// Detail List 포폴
export const getListPortPolioDetail = async (users_table_id: string) => {
  const response = await instance.get("portpolio/detail/list", {
    params: {
      users_table_id: users_table_id,
    },
  });
  return response;
};

// Detail 포폴
export const getDetailPortPolio = async (portpolio_id: string) => {
  const response = await instance.get("portpolio/detail", {
    params: {
      portpolio_id: portpolio_id,
    },
  });
  return response;
};

type DeletePortPolio = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

// 포폴삭제하기
export const deletePortPolio = async (data: DeletePortPolio) => {
  const { users_table_id, portpolio_id } = data;
  const response = await instance.delete("portpolio/delete", {
    data: {
      users_table_id,
      portpolio_id,
    },
  });
  return response;
};

type UpdateDefaultPortPolio = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

// default 포폴로 업데이트
export const updateDefaultPortPolio = async (data: UpdateDefaultPortPolio) => {
  const { users_table_id, portpolio_id } = data;
  const response = await instance.post("portpolio/changeToDefaultResume", {
    data: {
      users_table_id,
      portpolio_id,
    },
  });
  return response;
};

type UpdatePortPolioName = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
  portpolio_name: string;
};
// 포폴 이름 업데이트
export const updatePortPolioName = async (data: UpdatePortPolioName) => {
  const { users_table_id, portpolio_id, portpolio_name } = data;

  const response = await instance.post("portpolio/editPortPolioName", {
    data: {
      users_table_id,
      portpolio_id,
      portpolio_name,
    },
  });
  return response;
};

// default 포폴 list로  가져오기

export const getDefaultPortPolio = async () => {
  const response = await instance.get("portpolio/default/list");
  return response;
};

// 해당 user의 default 가져오기

export const getUserDefaultPortPolio = async (_id: string) => {
  const response = await instance.get("portpolio/default", {
    params: {
      _id: _id,
    },
  });
  return response;
};
