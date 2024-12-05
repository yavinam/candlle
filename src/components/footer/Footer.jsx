import React from "react";
import footer from '../../assets/footer.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
       
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
              <img
                src={footer} 
                alt="Logo"
                className="h-8"
              />
            </div>
            <h1 className="text-2xl font-bold">Candleaf</h1>
          </div>
          <p className="text-gray-400">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-green-500 mb-3">
              Discovery
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  New season
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Most searched
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Most selled
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-green-500 mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-500 mb-3">Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        ©Candleaf All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
