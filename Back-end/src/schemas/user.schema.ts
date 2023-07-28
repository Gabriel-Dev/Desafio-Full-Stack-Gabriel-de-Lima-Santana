import { z } from 'zod'

export const returnUserSchema = z.object({
    id: z.number(),
    name: z.string().max(150),
    email: z.string().max(150).email(),
})

export const userSchema = returnUserSchema.omit({ id: true }).extend({
    password: z.string().max(150),
})


export const loginSchema = userSchema.omit({name: true})