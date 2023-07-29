import { ToastContainer } from "react-toastify";
import { MainRoutes as Routes } from "./routes";
import { UserProvider } from "./contexts/userContext";

export const App = () => {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};
