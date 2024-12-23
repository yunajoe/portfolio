import privateAPI from "@/api/private";

export const searchSchoolByName = async (searchKeyWord: string) => {
  const response = await privateAPI.get(
    `school/list/search?schoolName=${searchKeyWord}`
  );
  return response;
};

export const searchMajor = async () => {
  const response = await privateAPI.get("major/list");
  return response;
};

export const searchCompany = async () => {
  const response = await privateAPI.get("company/list");
  return response;
};
