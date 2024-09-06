import React from "react";
import Navbar from "./Navbar";
import Front from "./front";
import Categories from "./categories";
import Choices from "./choices";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="px-[120px]  dark:text-white font-sora min-h-screen min-w-full"
      style={{
        backgroundImage: "url('milk.svg'), url('Ellipse-d.svg')",
        backgroundPosition: "left 20px top -200px,right -450px top -150px",
        backgroundSize: "1200px 1200px, 1800px 1800px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div>
        <Navbar />
        <Outlet/>
        <Front />
        <Categories />
        <Choices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
