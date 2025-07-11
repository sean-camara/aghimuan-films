// src/components/layout/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../../assets/aghimuan logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Desktop View */}
      <footer className="hidden md:block bg-white text-[#373131] border-t border-b border-[#373131]">
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and title */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={logo}
              alt="Aghimuan Films Logo"
              className="h-10 w-auto rounded-full mr-3"
            />
            <span
              className="text-xl font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Aghimuan Films
            </span>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/AghimuanFilmsProduction/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/p/CowsZZuvsq0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@shawntiago/video/7505022272000871688"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaTiktok className="text-white" />
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="bg-[#D56E2D] py-4 text-center text-sm">
          <p className="text-white">© {currentYear} Aghimuan Films. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile View (unchanged) */}
      <footer className="md:hidden bg-white text-[#373131] border-t border-b border-[#373131]">
        <div className="container mx-auto py-8 px-4 flex flex-col items-center">
          {/* Social icons */}
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.facebook.com/AghimuanFilmsProduction/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/p/CowsZZuvsq0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@shawntiago/video/7505022272000871688"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <FaTiktok className="text-white" />
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="bg-[#D56E2D] py-4 text-center text-sm">
          <p className="text-white">© {currentYear} Aghimuan Films. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
