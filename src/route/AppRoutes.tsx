import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import UserDetails from "../pages/UserDetails";
import AddEditUser from "../pages/AddEditUser";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="user" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="add-user" element={<AddEditUser />} />
        <Route path="edit-user/:id" element={<AddEditUser />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
