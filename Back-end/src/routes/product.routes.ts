import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { UserMiddleware } from "../middlewares/user.middleware";

const control = new ProductController();
const middleware = new UserMiddleware();

export const productRoutes = Router();

productRoutes.get(
  "",
  middleware.verifyToken.bind(middleware),
  control.get.bind(control)
);
