import { Item } from "@/types/portpolio";

export const findDefaultResumeValue = (arr: Item[], portpolioId: string) => {
  return arr.find((item) => item.portpolioId === portpolioId);
};
