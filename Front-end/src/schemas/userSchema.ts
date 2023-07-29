import { z } from 'zod'

export const returnUserSchema = z.object({
    id: z.number(),
    name: z.string().max(150),
    email: z.string().max(150).email(),
})
export const userSchema = returnUserSchema.omit({ id: true }).extend({
    password: z.string().max(150).nonempty("Invalid password"),
})
export const AllUserSchema = z.array(returnUserSchema)
export const loginSchema = userSchema.omit({name: true})

export type IUser = z.infer<typeof userSchema>;
export type IReturnUser = z.infer<typeof returnUserSchema>;
export type ILogin = z.infer<typeof loginSchema>;