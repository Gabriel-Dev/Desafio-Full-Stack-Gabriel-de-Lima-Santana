import { ModelStatic } from "sequelize";
import { Product } from "../database/models/Product";

export class ProductService {
  private model: ModelStatic<Product> = Product;

  async get() {
    const products = await this.model.findAll();
    return { status: 200, message: products };
  }

}
