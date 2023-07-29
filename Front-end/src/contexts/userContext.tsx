import { ReactNode, createContext, useState, useEffect } from "react";
import { notifyError, notifySucess } from "../toastfy";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ILogin, IReturnUser, IUser } from "../schemas/userSchema";
import jwt_decode from "jwt-decode";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  user: null | IReturnUser;
  loading: boolean;
  spinner: boolean;
  LoginSubmit: (loginData: ILogin) => Promise<void>;
  createUser: (user:IUser) => Promise<void>;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const LoginSubmit = async (loginData: ILogin) => {
    try {
      setSpinner(true);
      const response = await api.post("/users/login", loginData);
      window.localStorage.clear();
      window.localStorage.setItem(
        "@token",
        JSON.stringify(response.data.token)
      );
      navigate("/");
      setLoading(true);
      notifySucess("Successfully logged in!");
    } catch (err) {
      console.log(err);
      notifyError("Invalid credentials");
    } finally {
      setSpinner(false);
    }
  };

  useEffect(() => {
    async function loadUser() {
      const token: string = JSON.parse(localStorage.getItem("@token")!);
      if (!token) {
        setLoading(false);
        return;
      }
      const userId = Number(jwt_decode<{ sub: string }>(token).sub);
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get(`/users`);
        setUser(response.data.find((user: IReturnUser) => user.id == userId));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [navigate]);

  const createUser = async (user: IUser) => {
    try {
      setSpinner(true);
      await api.post(`/users`, user);
      notifySucess("User successfully created!");
    } catch (err) {
      console.log(err);
      notifyError("Failed to create user");
    } finally {
      setLoading(false);
      setSpinner(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, loading, spinner, LoginSubmit, createUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
