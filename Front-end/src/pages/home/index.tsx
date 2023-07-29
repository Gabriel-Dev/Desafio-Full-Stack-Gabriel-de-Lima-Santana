import { Product } from "../../components/product";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import tech from "../../assets/Daco_6140960.png";

export const Home = () => {
  const { products, navigate } = useContext(UserContext);

  return (
    <>
      <main className="w-full min-h-screen h-full flex flex-col gap-16 items-center relative gradient animate-gradient text-grey-4">
        <div className="flex items-center mt-[80px] w-full justify-around">
          <img
            src="https://digitalnex.com.br/imgs/nexLogo2.png"
            alt="nex digital"
          />
          {products && (
            <p className="body-1-600 text-center cursor-pointer"
            onClick={()=>{
              window.localStorage.clear();
              location.reload()
            }}>Sing out</p>
          )}
        </div>
        {products ? (
          <h1 className="heading-1-700 w-[70%] mt-[50px]">
            Now that you have registered with us. 
            Welcome to the world of technology!
          </h1>
        ) : (
          <h1 className="heading-1-700 w-[70%] mt-[50px]">
            Explore the world of technology with us!{" "}
            <span
              className=" text-brand-2 cursor-pointer"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register now
            </span>{" "}
            to access an exclusive selection of products{" "}
          </h1>
        )}
        {products && (
          <ul className="w-[70%] flex flex-col gap-4 pb-16">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
};
