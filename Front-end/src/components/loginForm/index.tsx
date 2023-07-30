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
      className="w-full flex flex-col justify-center items-center gap-2"
      onSubmit={handleSubmit(LoginSubmit)}
    >
      <div className="w-[80%] relative px-2">
        <input
          type="email"
          placeholder="E-mail"
          className="input-text w-full"
          {...register("email")}
        />
        <TfiEmail className="text-[20px] text-grey-4 absolute top-[10px]"/>
        
      </div>
      <div className="w-[80%] relative px-2">
        <input
          type="password"
          placeholder="Password"
          className="input-text w-full"
          {...register("password")}
        />
        <TbLock className="text-[20px] text-grey-4 absolute top-[10px]"/>
      </div>
      
      <button type="submit" className="button-brand-2 mt-8 w-[50%]">
        Sing in
      </button>
    </form>
  );
};
