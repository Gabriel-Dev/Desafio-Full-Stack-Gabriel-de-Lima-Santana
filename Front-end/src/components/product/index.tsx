import { IProduct } from "../../schemas/userSchema";

export const Product = ({ product }: { product: IProduct }) => {
  return (
    <li className="border-b-[1px] p-2">
      <h4 className="heading-4-700">{product.name}</h4>
      <p>{product.description}</p>
    </li>
  );
};
