import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
