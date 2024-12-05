import React, {useState} from 'react';
import icon from '../../assets/icon.png'
import { FaUserCircle } from "react-icons/fa"; // Profil ikonkasi
import { FaShoppingCart } from "react-icons/fa"; // Savatcha ikonkasi
import { Link } from "react-router-dom";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
   <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
     
        <div className="flex items-center">
          <img
            src={icon} 
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-green-500">Candleaf</h1>
        </div>

        {/* Center Section - Links */}
        <div className="hidden md:flex space-x-8">
          {/* Discover with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 font-medium hover:text-green-500 flex items-center gap-1"
            >
              Discovery
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-40 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-500"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-500"
                >
                  Beneficios
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-500"
                >
                  Popular
                </a>
              </div>
            )}
          </div>
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-green-500"
          >
            About
          </a>
          <Link
            to="#contact"
            className="text-gray-700 font-medium hover:text-green-500"
          >
            Contact us
          </Link>
        </div>


      <div className="flex items-center space-x-6">
      {/* Profile Icon */}
      <a
        href="#profile"
        className="text-gray-700 hover:text-green-500"
        aria-label="Profile"
      >
        <FaUserCircle className="w-6 h-6" />
      </a>

      {/* Cart Icon */}
      <a
        href="#cart"
        className="text-gray-700 hover:text-green-500"
        aria-label="Cart"
      >
        <FaShoppingCart className="w-6 h-6" />
      </a>
    </div>


      </div>
    </nav>

  );
};

export default Header;

