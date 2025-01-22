import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const Header = () => {
  return (
    <div className="bg-dark3 text-white py-1 px-40 flex justify-between items-center text-sm lg-block">

      <div class="mb-2  mt-2 flex items-center flex-row font-light tracking-wider text-white"><FaLocationDot className='text-white mr-4' /><span>Leading Construction and Consultancy Services Since 2018</span></div>
      <div className="flex ">
        <div className="bg-white rounded-full p-2 mr-2">
          <FaFacebook className="text-navbg text-base cursor-pointer" />
        </div>
        <div className="bg-white rounded-full p-2 mr-2">
          <TbWorldWww className="text-navbg text-base cursor-pointer" />
        </div>
        <div className="bg-white rounded-full p-2 mr-2">
          <FaInstagram className="text-navbg text-base cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
