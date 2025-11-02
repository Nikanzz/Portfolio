import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com/jeremia_p.i/" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaInstagram /> 
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="https://github.com/Nikanzz" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaGithub /> 
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/jeremia-pinnywan-immanuel/" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin /> 
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-5">
          &copy; Jeremia Pinnywan Immanuel 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;