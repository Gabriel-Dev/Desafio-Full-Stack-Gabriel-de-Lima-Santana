import { Response, Request, NextFunction } from "express";
import { UserService } from "../services/user.service";

export class UserController{
    private service = new UserService()

    async get(request: Request, response: Response, next: NextFunction){
        const { status, message } = await this.service.get()
        response.status(status).json(message)
    }

    async post(request: Request, response: Response, next: NextFunction){
        const { status, message } = await this.service.post(request.body)
        response.status(status).json(message)
    }
}