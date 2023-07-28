import { Response, Request, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { ModelStatic } from "sequelize";
import { User } from "../database/models/User";

export class UserMiddleware {
    private model: ModelStatic<User> = User;

  validateData(schema: ZodTypeAny) {
    return (request: Request, response: Response, next: NextFunction) => {
      const validatedData = schema.parse(request.body);
      request.body = validatedData;
      return next();
    };
  }

  async uniqueEmail(request: Request, response: Response, next: NextFunction) {
    const user = await this.model.findOne({
        where:{
            email: request.body.email
        }
    });

    if (user && request.body.email) {
      return response.status(409).json({
        message: "Email already exists"
    })
    }

    return next();
  }
}
