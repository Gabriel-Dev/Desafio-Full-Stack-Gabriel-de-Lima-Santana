import { Sequelize } from "sequelize";
import * as config from "./database/config";

export const database = new Sequelize(config);

