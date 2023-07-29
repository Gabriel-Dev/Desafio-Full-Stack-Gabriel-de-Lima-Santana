import { LoginForm } from "../../components/loginForm";
import { RegisterForm } from "../../components/registerForm";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from "react";

export const Register = () => {
  const { navigate } = useContext(UserContext);
  const [singUp, setSingUp] = useState(true);

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center relative gradient animate-gradient">
        <div className="w-full max-w-[600px] min-h-[600px] p-4 flex flex-col gap-8">
          <section className=" text-whiteFixed body-1-400 flex justify-around">
            <div
              className={`text-center ${singUp && "border-b-2 border-brand-2"} cursor-pointer`}
              onClick={() => {
                setSingUp(true);
              }}
            >
              <h2 className="heading-2-700">SING UP</h2>
              <p>You don't have an account</p>
            </div>
            <div
              className={`text-center ${!singUp && "border-b-2 border-brand-2"} cursor-pointer`}
              onClick={() => {
                setSingUp(false);
              }}
            >
              <h2 className="heading-2-700">SING IN</h2>
              <p>You already have an account</p>
            </div>
          </section>
          {singUp ? <RegisterForm /> : <LoginForm />}
          <p className="body-1-600 text-whiteFixed w-full text-center cursor-pointer"
          onClick={()=>{navigate("/")}}>Go back to home</p>
        </div>
      </main>
    </>
  );
};
