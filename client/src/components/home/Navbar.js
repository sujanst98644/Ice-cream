import React from "react";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row py-1 justify-between items-center px-[120px]">
      <ul className="flex flex-row space-x-14">
        <NavLink
          to="/"
          className={({
            isActive,
          }) => `relative transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-white 
    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 
    ${isActive ? "before:scale-x-100" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({
            isActive,
          }) => `relative transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-white 
    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 
    ${isActive ? "before:scale-x-100" : ""}`}
        >
          Contact
        </NavLink>
        <NavLink
          to="/flavors"
          className={({
            isActive,
          }) => `relative transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-white 
    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 
    ${isActive ? "before:scale-x-100" : ""}`}
        >
          Flavors
        </NavLink>
        <NavLink
          to="/about"
          className={({
            isActive,
          }) => `relative transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-white 
    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 
    ${isActive ? "before:scale-x-100" : ""}`}
        >
          About
        </NavLink>
      </ul>
      <ul className="flex flex-row items-center justify-end space-x-10 text-lg ">
        <div className="flex bg-[#f2f2f2] text-black items-center justify-center px-3 rounded-lg opacity-70">
          <input
            type="text"
            className="focus:outline-none bg-[#f2f2f2] font-extralight bg-opacity-50"
            placeholder="what are you looking for?"
          />
          <FaSearch />
        </div>
        <li>
          <GoHeart className="text-3xl" />
        </li>
        <li>
          <Link to='/cart'><FiShoppingCart className="text-3xl" /></Link>
        </li>
        <li>
          <Link
            to="/signin"
            className="flex items-center border rounded-full px-3 py-1 bg-white text-black space-x-3"
          >
            <p>Login</p>
            <FiUser />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
