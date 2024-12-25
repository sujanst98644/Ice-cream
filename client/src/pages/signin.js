import React from "react";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import Login from "../components/home/login";

const Signin = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-2 shadow-xl h-screen">
      <div
        className="hidden md:flex text-[#73114B] flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('planet.svg'), url('dcircle.svg'), url('circle.svg'), url('hand.svg') ",
          backgroundPosition:
            "left -40px top -40px,right 170px top 220px, right 170px top 120px, right 20px top -50px",
          backgroundSize: "200px 200px, 45px 45px, 390px 390px , 650px 650px",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        }}
      >
        <div className="font-extrabold text-3xl absolute bottom-16 font-nunito">
          Treat yourself a dessert.
        </div>
        <div className="text-xl absolute bottom-10 font-nunito">
          Start for free and get attractive offers from the community
        </div>
      </div>
      <Login />
      <Link className="absolute top-10 right-10 text-xl" to="/">
        <GoX />
      </Link>
    </div>
  );
};

export default Signin;
