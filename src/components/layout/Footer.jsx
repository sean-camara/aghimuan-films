import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/aghimuan logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#802637] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
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

          {/* Navigation */}
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

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <span className="text-white">f</span>
            </a>
            <a
              href="#"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <span className="text-white">t</span>
            </a>
            <a
              href="#"
              className="bg-[#D56E2D] w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <span className="text-white">i</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#6a1f2e] py-4 text-center text-sm">
        <p>© {currentYear} Aghimuan Films. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
