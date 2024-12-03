import { z } from "zod";

export const getRecruitmentResponseSchema = z.object({
  _id: z.string(),
  recrutPblntSn: z.number(),
  pblntInstCd: z.string(),
  pbadmsStdInstCd: z.string(),
  instNm: z.string(),
  ncsCdLst: z.string(),
  ncsCdNmLst: z.string(),
  hireTypeLst: z.string(),
  hireTypeNmLst: z.string(),
  workRgnLst: z.string(),
  workRgnNmLst: z.string(),
  recrutSe: z.string(),
  recrutSeNm: z.string(),
  prefCondCn: z.string(),
  recrutNope: z.number(),
  pbancBgngYmd: z.string(),
  pbancEndYmd: z.string(),
  recrutPbancTtl: z.string(),
  srcUrl: z.string(),
  replmprYn: z.enum(["Y", "N"]),
  aplyQlfcCn: z.string(),
  disqlfcRsn: z.string(),
  scrnprcdrMthdExpln: z.string(),
  prefCn: z.string(),
  acbgCondLst: z.string(),
  acbgCondNmLst: z.string(),
  nonatchRsn: z.string().nullable(),
  ongoingYn: z.enum(["Y", "N"]),
  decimalDay: z.number(),
  files: z.array(z.string()),
  steps: z.array(z.unknown()),
});

export type GetRecruitmentResponse = z.infer<
  typeof getRecruitmentResponseSchema
>;

export type GetRecruitmentResponseWithFavoite = GetRecruitmentResponse & {
  isFavorite: boolean;
};
