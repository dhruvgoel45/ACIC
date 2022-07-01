import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-40 w-full bg-white flex justify-between items-center h-22 text-black scroll-m-2  ">
      <div className="w-3/12 ">
        <img src="https://www.bmu.edu.in/acic-propel/ACIC_Bmu%20prope_logo.svg"></img>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">ABOUT US</li>
        <li className="p-4">INCUBATION</li>
        <li className="p-4">EVENTS</li>
        <li className="p-4">STARTUPS</li>
        <li className="p-4">GALLERY</li>
        <li className="p-4">CONTACT</li>

        <div className="w-40	pr-4 width: 100rem">
          {" "}
          <img src="https://www.bmu.edu.in/acic-propel/images/other-logo.jpeg" />
        </div>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full text-black  border-r bg-white border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-14 text">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">company</li>
          <li className="p-4 border-b border-gray-600">resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4 border-b border-gray-600">Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
