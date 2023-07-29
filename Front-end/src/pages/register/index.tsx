import { LoginForm } from "../../components/loginForm";
import { RegisterForm } from "../../components/registerForm";
import { useState } from "react";

export const Register = () => {
  const [ singUp, setSingUp] = useState(true)

  return (
    <>
      <main>
        <div>
          <section>
            <div onClick={()=>{setSingUp(true)}}>
              <h2>SING UP</h2>
              <p>You don't have an account</p>
            </div>
            <div onClick={()=>{setSingUp(false)}}>
              <h2>SING IN</h2>
              <p>You don't have an account</p>
            </div>
          </section>
          {singUp ? <RegisterForm /> : <LoginForm />}
        </div>
      </main>
    </>
  );
};
