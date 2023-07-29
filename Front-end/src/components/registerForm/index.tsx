import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { TbLock } from "react-icons/tb";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <form
      className=""
      onSubmit={handleSubmit(() => {
        console.log("teste");
      })}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className=""
          {...register("name")}
        />
        <CgProfile />
        {errors.name && <p></p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className=""
          {...register("email")}
        />
        <TfiEmail />
        {errors.email && <p></p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className=""
          {...register("password")}
        />
        <TbLock />
        {errors.password && <p></p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm password"
          className=""
          {...register("confirmPassword")}
        />
        <TbLock />
        {errors.confirmPassword && <p></p>}
      </div>
      <button type="submit" className="">
        Create an Account
      </button>
    </form>
  );
};
