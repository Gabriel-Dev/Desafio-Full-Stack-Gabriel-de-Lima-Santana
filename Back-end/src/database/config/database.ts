import "dotenv/config";
import { Sequelize } from 'sequelize-typescript';

const {
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DB_NAME,
  POSTGRES_DB_HOST,
} = process.env;

export const sequelize = new Sequelize(POSTGRES_DB_NAME!, POSTGRES_USERNAME!, POSTGRES_PASSWORD!, {
  host: POSTGRES_DB_HOST!,
  dialect: "postgres",
  logging: false
});
