import { z } from "zod";

const companyDateSchema = z.object({
  startYear: z.string(),
  startMonth: z.string(),
  endYear: z.string(),
  endMonth: z.string(),
});

const schoolDateSchema = z.object({
  startYear: z.string(),
  startMonth: z.string(),
  endYear: z.string(),
  endMonth: z.string(),
});

export const companyListItemSchema = z.object({
  id: z.number(),
  companyName: z.string(),
  status: z.string(),
  position: z.string(),
  companyDate: companyDateSchema,
  isCurrent: z.boolean(),
});

const schoolListItemSchema = z.object({
  id: z.number(),
  schoolName: z.string(),
  major: z.string(),
  schoolDate: schoolDateSchema,
  isCurrent: z.boolean(),
});
const itemSchema = z.object({
  _id: z.string(),
  users_table_id: z.string(),
  portpolio_name: z.string(),
  portpolioId: z.string(),
  introText: z.string(),
  careerList: z.array(companyListItemSchema),
  educationList: z.array(schoolListItemSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
  defaultResume: z.boolean(),
});
export type CompanyListItem = z.infer<typeof companyListItemSchema>;
export type SchoolListItem = z.infer<typeof schoolListItemSchema>;
export type Item = z.infer<typeof itemSchema>;
