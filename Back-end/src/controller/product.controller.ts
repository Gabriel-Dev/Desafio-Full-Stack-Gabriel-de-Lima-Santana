import { Response, Request, NextFunction } from "express";
import { ProductService } from "../services/product.service";

export class ProductController{
    private service = new ProductService()

    async get(request: Request, response: Response, next: NextFunction){
        const { status, message } = await this.service.get()
        response.status(status).json(message)
    }
}