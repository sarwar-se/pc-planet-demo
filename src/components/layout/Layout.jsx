import React from "react";
import Header from "./Header";
import NavigationBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
