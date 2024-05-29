import React, { useState } from 'react';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#525AA0] drop-shadow-3xl mt-2 rounded-[16px] p-3 lg:font-bold w-[95%] mx-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex items-center space-x-4 ">
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:-translate-y-1.5">Find Work</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:-translate-y-1.5">Find Talent</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:-translate-y-1.5">Articles</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:-translate-y-1.5">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:-translate-y-1.5">About Us</a>
            </li>
          </ul>
          
        </div>
        <div className="lg:flex md:flex hidden space-x-2">
            <button className="text-white px-4 py-2 rounded hover:-translate-y-1.5 ">Log in</button>
            <button className="text-[#525AA0] bg-white px-4 py-2 rounded-2xl hover:-translate-y-1.5">Join now</button>
          </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile responsive menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} `} >
        <ul className="mt-2 space-y-2 bg-[#525AA0]  ">
          <li>
            <a href="#" className="block text-white hover:text-gray-300 hover:-translate-y-1.5" >Find Work</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 hover:-translate-y-1.5">Find Talent</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 hover:-translate-y-1.5">Articles</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 hover:-translate-y-1.5">Contact Us</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-gray-300 hover:-translate-y-1.5">About Us</a>
          </li>
        </ul>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="text-white hover:border-[1px] px-4 py-2 rounded-2xl hover:-translate-y-1.5">Sign Up</button>
          <button className="text-[#525AA0] bg-white px-4 py-2 rounded-xl bg hover:-translate-y-1.5" >Join now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;