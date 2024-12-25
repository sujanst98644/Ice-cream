import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (email, password) => {
    try {
       const response = await axios.post("https://ice-cream-xi-lac.vercel.app/api/auth/login", {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.message || "An error occurred during login" };
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    console.log(result);
    if (result.success) {
      const { role } = result.data;
      console.log(role);
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/user");
      }
    } else {
      alert(result.message);
    }
  };

  return (
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p>Password</p>
            <input
              type="password"
              className="border border-slate-200 w-full py-2 px-1 rounded-md"
              placeholder="*************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            className="w-[90%] py-2 bg-[#7F265B] text-white font-bold rounded-md mx-3"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex">
        <p className="text-slate-300">Not Registered Yet?</p>{" "}
        <Link to="/signup" className="font-semibold text-[#7F265B]">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
