import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { UserMiddleware } from "../middlewares/user.middleware";
import { userSchema } from "../schemas/user.schema";

const control = new UserController();
const middleware = new UserMiddleware();

export const userRoutes = Router();

userRoutes.get("", control.get.bind(control));
userRoutes.post(
  "",
  middleware.validateData(userSchema).bind(middleware),
  middleware.uniqueEmail.bind(middleware),
  control.post.bind(control)
);
