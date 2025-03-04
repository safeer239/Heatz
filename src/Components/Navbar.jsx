import React from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 bg-gradient-to-t from-transparent via-white/20 to-transparent text-green-500 rounded-4xl w-2/3 max-w-7xl mx-auto">
      <div className="flex items-center">
        <img className="rounded-4xl w-16 h-16" src={logo} alt="Logo" />
      </div>

      <ul className="hidden md:flex space-x-6 text-sm lg:text-base">
        <li className="hover:text-white transition">Mobile Accs</li>
        <li className="hover:text-white transition">Computer Accs</li>
        <li className="hover:text-white transition">Multimedia</li>
        <li className="hover:text-white transition">Support</li>
      </ul>

      <div className="flex items-center space-x-4 text-green-500">
        <FaSearch className="hover:text-white transition cursor-pointer" />
        <FaShoppingCart className="hover:text-white transition cursor-pointer" />
        <FaUser className="hover:text-white transition cursor-pointer" />
        <FaBars className="md:hidden hover:text-white transition cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
