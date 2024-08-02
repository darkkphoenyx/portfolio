import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import GuestLayout from "../layouts/GuestLayout";
import Services from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
export default function AppRoutes() {
  return (
    <>
      <GuestLayout>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Services></Services>}></Route>
          <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
        </Routes>
      </GuestLayout>
    </>
  );
}
