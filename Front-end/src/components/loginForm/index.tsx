import { useForm } from "react-hook-form";
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILogin, loginSchema } from "../../schemas/userSchema";

export const LoginForm = () => {
  const { LoginSubmit } = useContext(UserContext) 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  return (
    <form
      className=""
      onSubmit={handleSubmit(LoginSubmit)}
    >
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className=""
          {...register("email")}
        />
        <TfiEmail />
        
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className=""
          {...register("password")}
        />
        <TbLock />
      </div>
      
      <button type="submit" className="">
        Sing in
      </button>
    </form>
  );
};
