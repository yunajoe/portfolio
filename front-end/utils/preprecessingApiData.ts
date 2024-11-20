import { GetCompanyResponse } from "@/schemas/company";
import { GetRecruitmentResponse } from "@/schemas/recruitment";
import { GetMajorResponse, GetSchoolResponse } from "@/schemas/school";

export const removeDuplicatedSchool = (arr: GetSchoolResponse[]) => {
  if (arr.length > 0) {
    const newArr = [arr[0]];
    arr.forEach((item, idx) => {
      const { _id, schoolName } = item;
      const schoolNameArr = newArr.map((item2) => item2.schoolName);
      if (!schoolNameArr.includes(schoolName)) {
        newArr.push(item);
      }
    });
    return newArr;
  } else {
    return [];
  }
};

export const preprocessingMajor = (arr: GetMajorResponse[]) => {
  if (arr.length > 0) {
    const filteredArr = arr.map((item) => item.mClass);
    const result = removeDuplicatedElements(filteredArr);
    return result;
  }
  return [];
};

// search하는 회사관련
export const replaceLetterCompany = (arr: GetCompanyResponse[]) => {
  return arr.map((item) => item.afilCmpyNm.replace("(주)", ""));
};

export const removeDuplicatedElements = (arr: string[]) => {
  const set = new Set(arr);
  return [...set];
};

export const preprocessingCompany = (arr: GetCompanyResponse[]) => {
  if (arr.length > 0) {
    const replacedCompany = replaceLetterCompany(arr);
    const result = removeDuplicatedElements(replacedCompany);
    return result;
  }
  return [];
};

// hiring 회사 관련

export const filterCompanyByCategory = (
  data: GetRecruitmentResponse[],
  cateogry: string[]
) => {};
