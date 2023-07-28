import { ModelStatic } from "sequelize";
import { User } from "../database/models/User";
import { IUser } from "../interfaces/user.interface";
import { returnUserSchema } from "../schemas/user.schema";

export class UserService {
  private model: ModelStatic<User> = User;

  async get() {
    const users = await this.model.findAll();
    return { status: 200, message: users };
  }

  async post(user: IUser) {
    const createdUser = await this.model.create({ ...user });
    return { status: 201, message: returnUserSchema.parse(createdUser)};
  }
}
