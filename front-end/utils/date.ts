import { EducationType } from "@/types/portpolio";

export const changeTimeFormat = (time: string) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate(); //
  return {
    year,
    month,
    day,
  };
};

export const sortById = (arr: EducationType[]) => {
  if (arr.length > 2) {
    arr.sort((a: EducationType, b: EducationType) => {
      return b.id - a.id;
    });
  }
  return arr;
};
