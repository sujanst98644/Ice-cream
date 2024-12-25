import React from "react";
import { Link } from "react-router-dom";

const Front = () => {
  return (
    <div className="pt-10 flex flex-row">
      <div className="mt-48 flex flex-col space-y-5">
        <div className="text-7xl font-semibold text-[#B73232]">
          ICE CREAM SHOP
        </div>
        <div className="w-3/5 font-light ">
          Lorem ipsum dolor sit amet consectetur. Urna donec augue interdum
          volutpat ultrices et cursus. Massa vitae eget mollis malesuada neque
          sed vestibulum.
        </div>
        <div className="my-10 space-x-10 font-light">
          <Link to='/flavors'><button className="bg-[#E24B4B] rounded-lg  h-12 w-36">Order</button></Link>
          <Link to='/flavors'><button className="border rounded-lg h-12 w-36">more flavor</button></Link>
        </div>
      </div>
      <div className="w-4/5">
        <img className="relative top-20 left-20" src="spring-d.svg" alt="" />
        <img
          className="relative left-60 bottom-14 w-1/3 "
          src="icepick-b.svg"
          alt=""
        />
        <img
          className="relative right-1 bottom-24 w-full"
          src="icecream.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Front;
