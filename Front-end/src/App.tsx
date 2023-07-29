import { ToastContainer } from "react-toastify";
import { MainRoutes as Routes } from "./routes";
import { UserProvider } from "./contexts/userContext";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};
