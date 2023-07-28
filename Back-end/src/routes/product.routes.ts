import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const control = new ProductController();

export const productRoutes = Router();

productRoutes.get("", control.get.bind(control));
