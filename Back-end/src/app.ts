import express, { Application } from 'express'
import cors from 'cors'
import { userRoutes } from "./routes/user.routes"
import { handleErrors } from './errors'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRoutes)

app.use(handleErrors)

export default app