

import { useState } from "react";
import {scroll} from "motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white w-full bg-black h-auto fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6  py-4  ">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              className="w-16 md:w-48"
              src="jdclogo.png"
              alt="JDC Analytics Logo"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative top-[90px] md:top-0 left-0 w-full md:w-auto bg-black md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:gap-8 p-6 md:p-0">
            <li>
              <a
                href="#Technologies"
                className="block py-2 text-lg hover:text-yellow-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Technologies"
                className="block py-2 text-lg hover:text-yellow-300"
              >
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-yellow-300">
                Industries
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-yellow-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-yellow-300">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-yellow-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-yellow-300">
                Resources
              </a>
            </li>
            <li>
              <a 
                href="#contact-us"
                className="block py-2 text-lg hover:text-yellow-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
