import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Views/Navbar";
import Footer from "./Components/Views/Footer";
import Home from "./Components/Views/Home";
import Profile from "./Components/Views/Profile.js";
import ImageDetails from "./Components/PlaceData/ImageDetails.js";
//auth route
import Signin from "./Components/Authentication/Signin.js";
import Signup from "./Components/Authentication/Signup.js";
//admin route
import Adminlogin from "./Admin/AdminLoginPage.js";
import AdminPage from "./Admin/DataEntry/AdminPage.js";
import { AuthProvider } from "./Context/AuthContext.js";

function Start() {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/"];

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/Adminhome" element={<Adminlogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<ImageDetails />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </AuthProvider>
  );
}

export default Start;
