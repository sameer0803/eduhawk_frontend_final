import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="md:pt-1">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default MainLayout;
