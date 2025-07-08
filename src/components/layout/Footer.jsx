import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../../assets/aghimuan logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#802637] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
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
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <a
              href="#home-section"
              className="hover:text-[#D56E2D] transition-colors"
            >
              Home
            </a>
            <a
              href="#service-section"
              className="hover:text-[#D56E2D] transition-colors"
            >
              Services
            </a>
            <a
              href="/project"
              className="hover:text-[#D56E2D] transition-colors"
            >
              Project
            </a>
            <a
              href="#about-section"
              className="hover:text-[#D56E2D] transition-colors"
            >
              About
            </a>
            <a
              href="#contact-section"
              className="hover:text-[#D56E2D] transition-colors"
            >
              Contact
            </a>
          </div>
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
      </div>
      <div className="bg-[#B9A764] py-4 text-center text-sm">
        <p>© {currentYear} Aghimuan Films. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
