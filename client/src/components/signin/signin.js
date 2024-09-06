import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="grid grid-cols-2 m-2 shadow-xl h-screen">
      <div
        className="text-[#73114B] flex flex-col justify-center items-center bg-cover bg-center"
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
      <div className="flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center space-y-11">
          <div>
            <p className="text-3xl font-semibold">Login to your Account</p>
            <p className="text-md">See what is going on.</p>
            <div className="flex items-center justify-center text-slate-400 font-semibold space-x-3 border mt-9 py-2 rounded-md">
              <FcGoogle /> <p>Continue with Google</p>
            </div>
          </div>
          <div className="text-xs text-slate-300">
            -------------or Sign in with email-------------
          </div>
          <div className="w-full space-y-5">
            <div>
            <p>Email</p>
            <input
              type="text"
              className="border border-slate-200 w-full py-2 px-1 rounded-md"
              placeholder="mail@abc.com"
            />  
            </div>
            
            <div>
              <p>Password</p>
              <input
                type="text"
                className="border border-slate-200 w-full py-2 px-1 rounded-md"
                placeholder="*************"
              />
              <div className="flex text-xs justify-between">
                <div className="flex text-slate-500">
                  <input type="checkbox" /> <p>Remember Me</p>
                </div>
                <div className="font-semibold text-[#7F265B]">
                  Forgot Password?
                </div>
              </div>
            </div>

            <button className="w-[90%] py-2 bg-[#7F265B] text-white font-bold rounded-md mx-3">
              Login
            </button>
          </div>
        </div>
        <div className="flex">
          <p className="text-slate-300">Not Registered Yet?</p>{" "}
          <Link to="/signin" className="font-semibold text-[#7F265B]">
            Create an account
          </Link>
        </div>
      </div>
      <Link className="absolute top-10 right-10" to='/'><GoX/></Link>
      
    </div>
  );
};

export default Signin;
