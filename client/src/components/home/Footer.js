import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";
import { MdOutlinePhone } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-3 bg-[#283646]">
      <div className="text-[#3A86FF]">ICE-CREAM FACTORY</div>
      <div>
        <ul className="flex justify-center items-center space-x-5">
          <li className="flex flex-col items-center justify-center">
            <div>Home</div>
            <div className={`p-2 rounded-full bg-white text-[#283646] w-9 flex items-center justify-center`}>
              <FaXTwitter/>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center">
            <div>About</div>
            <div className={`p-2 rounded-full bg-white text-[#283646] w-9 flex items-center justify-center`}>
              <FaFacebookF/>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center">
            <div>Service</div>
            <div className={`p-2 rounded-full bg-white text-[#283646] w-9 flex items-center justify-center`}>
              <TfiYoutube/>
            </div>
          </li>
          <li className="flex flex-col items-center justify-center">
            <div>Contact us</div>
            <div className={`p-2 rounded-full bg-white text-[#283646] w-8 h-8 flex items-center justify-center`}>
              <ImInstagram/>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#76AEFF] h-[2px] w-[80%]"/>
      <div className="flex justify-around items-center w-full">
        <div className="flex items-center">Copyright studio</div>
        <div className="flex items-center"><GrLocation/> kathmandu,nepaltar-2,tarkeshwor</div>
        <div className="flex items-center"><GoMail/> ourstudio@hello.com</div>
        <div className="flex items-center"><MdOutlinePhone/> +977 567890000</div>
      </div>
    </div>
  );
};

export default Footer;
