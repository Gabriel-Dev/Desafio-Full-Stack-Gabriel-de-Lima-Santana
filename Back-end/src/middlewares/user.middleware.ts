import { Response, Request, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { ModelStatic } from "sequelize";
import { User } from "../database/models/User";
import jwt from "jsonwebtoken";

export class UserMiddleware {
  private model: ModelStatic<User> = User;

  verifyData(schema: ZodTypeAny) {
    return (request: Request, response: Response, next: NextFunction) => {
      const validatedData = schema.parse(request.body);
      request.body = validatedData;
      return next();
    };
  }

  async verifyUniqueEmail(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const user = await this.model.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (user && request.body.email) {
      return response.status(409).json({
        message: "Email already exists",
      });
    }

    return next();
  }

  verifyToken(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization?.split(" ")[1];
  
    if (!token) {
      return response.status(401).json({
        message: "Missing bearer token",
      });
    }

    jwt.verify(token, process.env.SECRET_KEY!, (error) => {
      if (error) {
        return next(error)
      }
    });

    return next();
  }
}
