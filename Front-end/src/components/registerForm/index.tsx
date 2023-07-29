import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { registerSchema, IRegister } from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const { registerSubmit } = useContext(UserContext) 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema)
  });

  return (
    <form
      className=""
      onSubmit={handleSubmit(registerSubmit)}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className=""
          {...register("name")}
        />
        <CgProfile />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className=""
          {...register("email")}
        />
        <TfiEmail />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className=""
          {...register("password")}
        />
        <TbLock />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm password"
          className=""
          {...register("confirmPassword")}
        />
        <TbLock />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="">
        Create an Account
      </button>
    </form>
  );
};
