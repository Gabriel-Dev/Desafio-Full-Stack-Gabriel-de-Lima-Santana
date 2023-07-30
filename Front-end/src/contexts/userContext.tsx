import { ReactNode, createContext, useState, useEffect } from "react";
import { notifyError, notifySucess } from "../toastfy";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ILogin, IProduct, IReturnUser, IUser } from "../schemas/userSchema";
import jwt_decode from "jwt-decode";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  user: null | IReturnUser;
  products: null | IProduct[];
  LoginSubmit: (loginData: ILogin) => Promise<void>;
  registerSubmit: (user: IUser) => Promise<void>;
  navigate: NavigateFunction;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);

  const LoginSubmit = async (loginData: ILogin) => {
    try {
      const response = await api.post("/users/login", loginData);
      window.localStorage.clear();
      window.localStorage.setItem(
        "@token",
        JSON.stringify(response.data.token)
      );
      navigate("/");
      notifySucess("Successfully logged in!");
    } catch (err) {
      console.log(err);
      notifyError("Invalid credentials");
    }
  };

  useEffect(() => {
    async function loadUserAndProducts() {
      const token: string = JSON.parse(localStorage.getItem("@token")!);

      if (!token) {
        setProducts(null);
        return;
      }
      const userId = Number(jwt_decode<{ sub: string }>(token).sub);
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const users = await api.get(`/users`);
        const products = await api.get(`/products`);
        setUser(users.data.find((user: IReturnUser) => user.id == userId));
        setProducts(products.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadUserAndProducts();
  }, [navigate]);

  const registerSubmit = async (user: IUser) => {
    try {
      await api.post(`/users`, user);
      notifySucess("User successfully created!");
    } catch (err) {
      console.log(err);
      notifyError("Failed to create user");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, products, LoginSubmit, registerSubmit, navigate }}
    >
      {children}
    </UserContext.Provider>
  );
};
