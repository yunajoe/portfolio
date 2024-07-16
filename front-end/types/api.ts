// api 호출했을때의 raw한 데이터들의 Type

export type SchoolItem = {
  _id: string;
  campusName: string;
  collegeinfourl: string;
  schoolType: string;
  link: string;
  schoolGubun: string;
  adres: string;
  schoolName: string;
  region: string;
  totalCount: string;
  estType: string;
  seq: string;
};

export type MajorItem = {
  _id: string;
  facilName: string;
  lClass: string;
  mClass: string;
  majorSeq: string;
  totalCount: string;
};

export type CompanyItem = {
  _id: string;
  basDt: string;
  crno: string;
  afilCmpyNm: string;
  afilCmpyCrno: string;
  lstgYn: string;
};

export type UserCollection = {
  status: number;
  message: string;
  access_token: string;
  refresh_token: string;
  user_data: User;
};

export type User = {
  _id: string;
  id: number;
  username: string;
  email: string;
  password: string;
  type: string;
  tokenKeyValue: string;
  accessToken: string;
  refreshToken: string;
};
