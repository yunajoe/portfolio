import { CareerList, EducationList } from "@/types/portpolio";

export type GetPortPolioDetailListSaga = {
  type: string;
  users_table_id: string;
};

export type GetPortPolioDefaultSaga = {
  type: string;
  _id: string;
};

export type DeletePortPolioSaga = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

export type UpdateDefaultPortPolioSaga = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
};

export type UpdatePortPolioNameSaga = {
  type: string;
  users_table_id: string;
  portpolio_id: string;
  portpolio_name: string;
};

export type SavePortPolioSaga = {
  type: string;
  portpolioId: string;
  introText: string;
  careerList: CareerList[];
  educationList: EducationList[];
};
