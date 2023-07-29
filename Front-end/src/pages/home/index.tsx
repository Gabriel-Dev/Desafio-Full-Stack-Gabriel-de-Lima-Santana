import { Product } from "../../components/product";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export const Home = () => {
  const { products, navigate } = useContext(UserContext);

  return (
    <>
      <main>
        <h1>
          Descubra o fascinante mundo da tecnologia conosco!{" "}
          <span onClick={() => {navigate("/register")}}>Cadastre-se</span> agora para acessar uma
          seleção exclusiva de produtos{" "}
        </h1>
        {products && (
          <ul>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
};
