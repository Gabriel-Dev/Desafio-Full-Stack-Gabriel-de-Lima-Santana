import { z } from "zod";
import { loginSchema, returnUserSchema, userSchema } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>;
export type IReturnUser = z.infer<typeof returnUserSchema>;
export type ILogin = z.infer<typeof loginSchema>;

