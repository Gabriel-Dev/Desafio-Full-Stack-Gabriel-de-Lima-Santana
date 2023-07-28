import { Model } from "sequelize";
import { database } from "../../sequelize";
import sequelize from "sequelize";

export class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING(150),
      allowNull: false,
    },
    email: {
      type: sequelize.STRING(150),
      unique: true,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING(150),
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "users",
    timestamps: false,
  }
);