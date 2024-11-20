import { CompanyListItem, SchoolListItem } from "@/schemas/portfolio";

export type GetPortPolioDetailListSaga = {
  type: string;
  users_table_id: string;
  isDragging: null | string;
};

export type GetPortPolioDetailSaga = {
  type: string;
  portpolioId: string;
};

export type GetPortPolioDefaultSaga = {
  type: string;
  _id: string;
};

export type CreatePortPolioSaga = {
  type: string;
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

export type UpdatePortPolioIdsSaga = {
  type: string;
  users_table_id: string;
  portpolio_ids: string[];
};
export type UpdatePortFolioBookMark = {
  type: string;
  portfolio_id: string;
};
export type SavePortPolioSaga = {
  type: string;
  portpolioId: string;
  introText: string;
  careerList: CompanyListItem[];
  educationList: SchoolListItem[];
};
