export type GetUserInfoByObjectIdSaga = {
  type: string;
  _id: string;
};

export type UpdateProfileImageSaga = {
  type: string;
  formData: FormData;
};

export type UpdateUserNameSaga = {
  type: string;
  _id: string;
  username: string;
};

export type UpdateUserPasswordSaga = {
  type: string;
  _id: string;
  current_password: string;
  new_password: string;
};
