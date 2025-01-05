import React from "react";
import Logo from "./assets/logo.svg";

const App = () => {
  return (
    <div>
      <div>
        <div className="">
          <img src={Logo} alt="" />
        </div>
        <div className="">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="">
          <button className="">Request</button>
        </div>
        <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
      </div>
    </div>
  );
};

export default App;
