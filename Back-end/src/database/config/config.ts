import "dotenv/config"
import { Options } from "sequelize"

const { POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DB_NAME, POSTGRES_DB_HOST } = process.env

const config: Options = {
    username: POSTGRES_USERNAME!,
    password: POSTGRES_PASSWORD!,
    database: POSTGRES_DB_NAME!,
    host: POSTGRES_DB_HOST!, 
    dialect: "postgres",
    logging: false,
}

export = config