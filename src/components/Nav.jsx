import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Nav;
