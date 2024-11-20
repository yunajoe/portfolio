import { z } from "zod";

const getCompanyResponseSchema = z.object({
  _id: z.string(),
  basDt: z.string(),
  crno: z.string(),
  afilCmpyNm: z.string(),
  afilCmpyCrno: z.string(),
  lstgYn: z.string(),
});

export type GetCompanyResponse = z.infer<typeof getCompanyResponseSchema>;
