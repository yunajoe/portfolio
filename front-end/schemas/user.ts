import { z } from "zod";

const getUserResponseSchema = z.object({
  _id: z.string(),
  id: z.number(),
  username: z.string(),
  userprofile: z.string(),
  email: z.string(),
  password: z.string(),
  type: z.string(),
  tokenKeyValue: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;
