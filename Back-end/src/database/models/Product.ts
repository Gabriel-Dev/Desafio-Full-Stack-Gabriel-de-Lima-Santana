import { Model } from "sequelize";
import { database } from "../../sequelize";
import sequelize from "sequelize";

export class Product extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
}

Product.init(
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
    description: {
      type: sequelize.STRING(255),
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "products",
    timestamps: false,
  }
);
