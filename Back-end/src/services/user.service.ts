import { ModelStatic } from "sequelize";
import { User } from "../database/models/User";
import { ILogin, IUser } from "../interfaces/user.interface";
import { returnUserSchema } from "../schemas/user.schema";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserService {
  private model: ModelStatic<User> = User;

  async get() {
    const users = await this.model.findAll();
    return { status: 200, message: users };
  }

  async post(user: IUser) {
    const createdUser = await this.model.create({ ...user });
    return { status: 201, message: returnUserSchema.parse(createdUser) };
  }

  async login(loginData: ILogin) {
    const user = await this.model.findOne({
      where: {
        email: loginData.email,
      },
    });

    if (!user || !(await compare(loginData.password, user.password))) {
      return { status: 401, message: { message: "Invalid credentials" } };
    }

    const token = jwt.sign(
      {
        user: user,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "24h",
        subject: user.id.toString(),
      }
    );

    return { status: 200, message: { token: token } };
  }
}
