import { z } from "zod";
import { returnUserSchema, userSchema } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>;
export type IReturnUser = z.infer<typeof returnUserSchema>;

