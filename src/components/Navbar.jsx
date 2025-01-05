import React, { useState } from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-gray-800">
                <img src={Logo} alt="easybank logo" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="md:justify-between md:flex md:flex-row md:gap-48">
              <div className="hidden md:flex space-x-10">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
                <a href="#blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
                <a
                  href="#careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Careers
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="#requestInvite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-easybank-gradient py-3 px-4 rounded-full text-white text-lg"
                >
                  Request Invite
                </a>
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4 py-2 text-center text-lg">
              <a
                href="#features"
                className="block text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
              <a
                href="#blog"
                className="block text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-gray-900"
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
