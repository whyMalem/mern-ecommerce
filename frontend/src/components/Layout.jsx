import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ isLogin }) => {
  return isLogin ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
