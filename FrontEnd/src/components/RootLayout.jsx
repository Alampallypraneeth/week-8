import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />

      <div className="mx-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default RootLayout;