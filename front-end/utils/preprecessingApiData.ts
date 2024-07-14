import { CompanyItem, MajorItem, SchoolItem } from "@/types/api";

export const removeDuplicatedSchool = (arr: SchoolItem[]) => {
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

export const preprocessingMajor = (arr: MajorItem[]) => {
  if (arr.length > 0) {
    const filteredArr = arr.map((item) => item.mClass);
    const result = removeDuplicatedElements(filteredArr);
    return result;
  }
  return [];
};

// 회사관련
export const replaceLetterCompany = (arr: CompanyItem[]) => {
  return arr.map((item) => item.afilCmpyNm.replace("(주)", ""));
};

export const removeDuplicatedElements = (arr: string[]) => {
  const set = new Set(arr);
  return [...set];
};

export const preprocessingCompany = (arr: CompanyItem[]) => {
  if (arr.length > 0) {
    const replacedCompany = replaceLetterCompany(arr);
    const result = removeDuplicatedElements(replacedCompany);
    return result;
  }
  return [];
};
