import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/aghimuan logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set active link based on current path
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.includes("/project")) return "project";
    return "";
  };

  const handleLinkClick = (link, sectionId) => {
    setMobileMenuOpen(false);

    if (
      link === "home" ||
      link === "about" ||
      link === "service" ||
      link === "contact"
    ) {
      navigate("/");

      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#802637] p-4 w-full sticky top-0 z-50">
      <div className="w-full px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-4 z-20">
          <img
            src={logo}
            alt="Aghimuan Films Logo"
            className="h-10 w-auto rounded-full"
          />
          <span
            className="text-white text-xl font-semibold"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Aghimuan Films
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex space-x-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home", "home-section");
              }}
              className={`text-[#FFF6ED] px-4 py-2 rounded-[14px] transition-all duration-300 ${
                getActiveLink() === "home"
                  ? "bg-[#D56E2D]"
                  : "hover:bg-[#D56E2D]"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("service", "service-section");
              }}
              className={`text-[#FFF6ED] px-4 py-2 rounded-[14px] transition-all duration-300 ${
                getActiveLink() === "service"
                  ? "bg-[#D56E2D]"
                  : "hover:bg-[#D56E2D]"
              }`}
            >
              Service
            </a>
          </li>
          <li>
            <Link
              to="/project"
              className={`text-[#FFF6ED] px-4 py-2 rounded-[14px] transition-all duration-300 ${
                getActiveLink() === "project"
                  ? "bg-[#D56E2D]"
                  : "hover:bg-[#D56E2D]"
              }`}
            >
              Project
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("about", "about-section");
              }}
              className={`text-[#FFF6ED] px-4 py-2 rounded-[14px] transition-all duration-300 ${
                getActiveLink() === "about"
                  ? "bg-[#D56E2D]"
                  : "hover:bg-[#D56E2D]"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact", "contact-section");
              }}
              className={`text-[#FFF6ED] px-4 py-2 rounded-[14px] transition-all duration-300 ${
                getActiveLink() === "contact"
                  ? "bg-[#D56E2D]"
                  : "hover:bg-[#D56E2D]"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            // X icon for close
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#D56E2D"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#D56E2D"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#802637] z-10 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul
            className="flex flex-col space-y-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("home", "home-section");
                }}
                className={`text-[#FFF6ED] text-xl px-6 py-2 rounded-[14px] transition-all duration-300 ${
                  getActiveLink() === "home" ? "bg-[#D56E2D]" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("service", "service-section");
                }}
                className={`text-[#FFF6ED] text-xl px-6 py-2 rounded-[14px] transition-all duration-300 ${
                  getActiveLink() === "service" ? "bg-[#D56E2D]" : ""
                }`}
              >
                Service
              </a>
            </li>
            <li>
              <Link
                to="/project"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[#FFF6ED] text-xl px-6 py-2 rounded-[14px] transition-all duration-300 ${
                  getActiveLink() === "project" ? "bg-[#D56E2D]" : ""
                }`}
              >
                Project
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("about", "about-section");
                }}
                className={`text-[#FFF6ED] text-xl px-6 py-2 rounded-[14px] transition-all duration-300 ${
                  getActiveLink() === "about" ? "bg-[#D56E2D]" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contact", "contact-section");
                }}
                className={`text-[#FFF6ED] text-xl px-6 py-2 rounded-[14px] transition-all duration-300 ${
                  getActiveLink() === "contact" ? "bg-[#D56E2D]" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
