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
      className="w-full flex flex-col justify-center items-center gap-2"
      onSubmit={handleSubmit(registerSubmit)}
    >
      <div className="w-[80%] relative px-2">
        <input
          type="text"
          placeholder="Name"
          className="input-text w-full"
          {...register("name")}
        />
        <CgProfile className="text-[20px] text-grey-4 absolute top-[10px]"/>
      </div>
      <div className="w-[80%] relative px-2">
        <input
          type="email"
          placeholder="E-mail"
          className="input-text w-full"
          {...register("email")}
        />
        <TfiEmail className="text-[18px] text-grey-4 absolute top-[10px] left-[8px]" />
       
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
      <div className="w-[80%] relative px-2">
        <input
          type="password"
          placeholder="Confirm password"
          className="input-text w-full"
          {...register("confirmPassword")}
        />
        <TbLock className="text-[20px] text-grey-4 absolute top-[10px]"/>
      </div>
      <button type="submit" className="button-brand-2 mt-8 w-[50%]">
        Create an Account
      </button>
    </form>
  );
};
