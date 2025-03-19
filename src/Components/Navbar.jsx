import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`w-full ${isOpen ? 'bg-[#034638]' : 'bg-secondary'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logo.png" // Update this path to the uploaded logo
                alt="Versaflex Technologies"
                className="h-12"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#045d4b]">
              Home
            </Link>
            <Link to="/solar" className="text-white hover:text-[#045d4b]">
              Solar Solutions
            </Link>
            <Link to="/electrical" className="text-white hover:text-[#045d4b]">
              Electrical Services
            </Link>
            <Link to="/about" className="text-white hover:text-[#045d4b]">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-[#045d4b]">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-gradient-to-r from-lightgreen to-lemon px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block w-full text-center px-3 py-2 text-white hover:text-[#045d4b] transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/solar"
              className="block w-full text-center px-3 py-2 text-white hover:text-[#045d4b] transition duration-300"
            >
              Solar Solutions
            </Link>
            <Link
              to="/electrical"
              className="block w-full text-center px-3 py-2 text-white hover:text-[#045d4b] transition duration-300"
            >
              Electrical Services
            </Link>
            <Link
              to="/about"
              className="block w-full text-center px-3 py-2 text-white hover:text-[#045d4b] transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center px-3 py-2 text-white hover:text-[#045d4b] transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
