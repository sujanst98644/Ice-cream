import React from "react";
import { FaFileImage, FaUsers } from "react-icons/fa6";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { PiHouseFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Admin = () => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    document.title = "Admin Dashboard";
    axios
      .get("http://localhost:3000/admin")
      .then((response) => {
        console.log(response.data);
        if (response.data === "Success") {
          alert("You are authorized to view this page!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-200 text-black">
        <div className=" flex justify-start items-center p-4 text-xl font-bold">
          Dashboard
        </div>
        <nav>
          <ul className="space-y-1">
            <Link
              to="/Admin/dashboard"
              className="flex items-center space-x-1 text-lg px-4 py-1 hover:bg-gray-400 mx-4 rounded-lg"
            >
              <PiHouseFill />
              Dashboard
            </Link>
            <Link
              to="/Admin/users"
              className="flex items-center space-x-1 text-lg px-4 py-1 hover:bg-gray-400 mx-4 rounded-lg"
            >
              <FaUsers />
              Users
            </Link>
            <Link
              to="/Admin/upload"
              className="flex items-center space-x-1 text-lg px-4 py-1 hover:bg-gray-400 mx-4 rounded-lg"
            >
              <FaFileImage />
              Upload
            </Link>
            <Link
              to="/Admin/settings"
              className="flex items-center space-x-1 text-lg px-4 py-1 hover:bg-gray-400 mx-4 rounded-lg"
            >
              <IoSettingsSharp />
              Settings
            </Link>
            <Link
              to=""
              className="flex items-center space-x-1 text-lg text-white px-4 py-1 hover:bg-gray-400 mx-4 rounded-lg bg-slate-900"
            >
              <IoLogOut />
              Logout
            </Link>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
