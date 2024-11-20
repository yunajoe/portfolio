import { z } from "zod";

const companyItemSchema = z.object({
  _id: z.string(),
  basDt: z.string(),
  crno: z.string(),
  afilCmpyNm: z.string(),
  afilCmpyCrno: z.string(),
  lstgYn: z.string(),
});

export type CompanyItem = z.infer<typeof companyItemSchema>;
