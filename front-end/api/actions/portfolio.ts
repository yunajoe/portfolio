import privateAPI from "@/api/private";
import publicAPI from "@/api/public";
import { CompanyListItem, SchoolListItem } from "@/schemas/portfolio";

// SAVE 포폴
export type SavePortPolio = {
  type: string;
  portpolioId: string;
  introText: string;
  careerList: CompanyListItem[];
  educationList: SchoolListItem[];
};

type GetPortPolioDetailList = {
  type: string;
  users_table_id: string;
  isDragging: null | string;
};

type UpdateDefaultPortPolio = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

type UpdatePortPolioName = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
  portpolio_name: string;
};

type UpdatePortPolioIds = {
  type: string;
  users_table_id: string;
  portpolio_ids: string[];
};

type DeletePortPolio = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

// CREATE 포폴
export const createPortPolio = async () => {
  const response = await privateAPI.get("createPortPolio");
  return response;
};

export const savePortPolio = async (data: SavePortPolio) => {
  const { portpolioId, introText, careerList, educationList } = data;
  const response = await privateAPI.post("portpolio/save", {
    data: {
      portpolioId,
      introText,
      careerList,
      educationList,
    },
  });
  return response;
};

// Detail List 포폴
export const getPortPolioDetailList = async (data: GetPortPolioDetailList) => {
  const { users_table_id } = data;
  const response = await privateAPI.get("portpolio/detail/list", {
    params: {
      users_table_id: users_table_id,
    },
  });
  return response;
};

// Detail 포폴
export const getDetailPortPolio = async (portpolio_id: string) => {
  const response = await publicAPI.get("portpolio/detail", {
    params: {
      portpolio_id: portpolio_id,
    },
  });
  return response;
};

// 포폴삭제하기
export const deletePortPolio = async (data: DeletePortPolio) => {
  const { users_table_id, portpolio_id } = data;
  const response = await privateAPI.delete("portpolio/delete", {
    data: {
      users_table_id,
      portpolio_id,
    },
  });
  return response;
};

// default 포폴로 업데이트
export const updateDefaultPortPolio = async (data: UpdateDefaultPortPolio) => {
  const { users_table_id, portpolio_id } = data;
  const response = await privateAPI.post("portpolio/changeToDefaultResume", {
    data: {
      users_table_id,
      portpolio_id,
    },
  });
  return response;
};

// 포폴 이름 업데이트
export const updatePortPolioName = async (data: UpdatePortPolioName) => {
  const { users_table_id, portpolio_id, portpolio_name } = data;

  const response = await privateAPI.post("portpolio/editPortPolioName", {
    data: {
      users_table_id,
      portpolio_id,
      portpolio_name,
    },
  });
  return response;
};

// porpotlioId업데이뜌!
export const updatePortPolioIds = async (data: UpdatePortPolioIds) => {
  const { users_table_id, portpolio_ids } = data;
  const response = await privateAPI.post("portpolio/update/portpolioIds", {
    data: {
      users_table_id,
      portpolio_ids,
    },
  });
  return response;
};

// default 포폴 list로  가져오기
export const getDefaultPortPolioList = async () => {
  const response = await publicAPI.get("portpolio/default/list");
  return response;
};

// 해당 user의 default 가져오기
export const getUserDefaultPortPolio = async (_id: string) => {
  const response = await privateAPI.get("portpolio/default", {
    params: {
      _id: _id,
    },
  });
  return response;
};
