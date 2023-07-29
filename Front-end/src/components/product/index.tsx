import { IProduct } from "../../schemas/userSchema";

export const Product = ({ product }: { product: IProduct }) => {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </li>
  );
};
