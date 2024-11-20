import publicAPI from "@/api/public";

export const getHiringDetailList = async () => {
  const response = await publicAPI.get("hiring/company/list");
  return response;
};
