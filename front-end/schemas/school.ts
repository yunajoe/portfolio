import { z } from "zod";

const getSchoolResponseSchema = z.object({
  _id: z.string(),
  campusName: z.string(),
  collegeinfourl: z.string(),
  schoolType: z.string(),
  link: z.string(),
  schoolGubun: z.string(),
  adres: z.string(),
  schoolName: z.string(),
  region: z.string(),
  totalCount: z.string(),
  estType: z.string(),
  seq: z.string(),
});

const getMajorResponseSchema = z.object({
  _id: z.string(),
  facilName: z.string(),
  lClass: z.string(),
  mClass: z.string(),
  majorSeq: z.string(),
  totalCount: z.string(),
});

export type GetSchoolResponse = z.infer<typeof getSchoolResponseSchema>;
export type GetMajorResponse = z.infer<typeof getMajorResponseSchema>;
