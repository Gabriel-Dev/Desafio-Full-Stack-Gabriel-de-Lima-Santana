import { z } from 'zod'

export const returnUserSchema = z.object({
    id: z.number(),
    name: z.string().max(150).nonempty("Invalid name"),
    email: z.string().max(150).email(),
})
export const userSchema = returnUserSchema.omit({ id: true }).extend({
    password: z.string().max(150).nonempty("Invalid password"),
})

export const loginSchema = userSchema.omit({name: true})
export const registerSchema = userSchema.extend({
    confirmPassword: z.string().max(150).nonempty("Invalid password")
  }).refine((data) => data.password === data.confirmPassword, {
    message: "the passwords are not the same",
    path: ["confirmPassword"]
  })

export type IUser = z.infer<typeof userSchema>;
export type IReturnUser = z.infer<typeof returnUserSchema>;
export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;