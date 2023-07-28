import { Sequelize } from "sequelize";
import * as config from "./database/config/config";

export const database = new Sequelize(config);
