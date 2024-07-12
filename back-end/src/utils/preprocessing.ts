// userData에서 id랑 password 를 제우는거
export type User = {
  _id: string;
  id: number;
  username: string;
  email: string;
  password: string;
  type: string;
  tokenKeyValue: string;
};

export const removeIdAndPassword = (obj: User) => {
  const { id, password, ...rest } = obj;
  return rest;
};
