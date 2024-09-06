import React from "react";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row py-3 justify-between items-center">
      <ul className="flex flex-row space-x-14">
        <li>Home</li>
        <li>Contact</li>
        <li>Flavors</li>
        <li>About</li>
      </ul>
      <ul className="flex flex-row items-center justify-end space-x-10 text-lg ">
        <div className="flex bg-[#f2f2f2] text-black items-center justify-center px-3 rounded-lg">
          <input type="text" className="focus:outline-none bg-[#f2f2f2] font-extralight" placeholder="what are you looking for?" />
          <FaSearch />
        </div>

        <li>
          <GoHeart className="text-3xl"/>
        </li>
        <li>
          <FiShoppingCart className="text-3xl"/>
        </li>
        <li>
          <Link to='/signin' className="flex items-center border rounded-full px-3 py-1 bg-white text-black space-x-3" >
            <p>Login</p>
            <FiUser />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
