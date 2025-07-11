// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/aghimuan logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Which section is active (for highlighting links)
  const [activeSection, setActiveSection] = useState("home");
  // Track last scroll position
  const [lastScroll, setLastScroll] = useState(0);
  // Controls visibility: true = visible (slide down), false = hidden (slide up)
  const [visible, setVisible] = useState(true);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;
      // If we scroll up (current <= lastScroll), show the navbar
      // If we scroll down, hide it
      setVisible(current <= lastScroll);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Helper to know which link to highlight
  const getActiveLink = (section) => {
    const path = location.pathname;
    if (path.includes("/project") && section === "project") return true;
    if (path === "/") return section === activeSection;
    return false;
  };

  // Handle clicking desktop links
  const handleLinkClick = (link, sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(link);
    if (["home","about","equipment","service","contact"].includes(link)) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`
        fixed inset-x-0 top-0
        bg-white border-b border-[#373131] z-50
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full pointer-events-none"}
      `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-4 z-20">
          <img
            src={logo}
            alt="Aghimuan Films Logo"
            className="h-10 w-auto rounded-full border border-[#373131]"
          />
          <span
            className="text-[#373131] text-xl font-semibold"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Aghimuan Films
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 font-[Poppins]">
          {[
            ["home", "Home", "home-section"],
            ["about", "About", "about-section"],
            ["equipment", "Equipment", "equipment-section"],
            ["service", "Service", "service-section"],
            ["contact", "Contact", "contact-section"],
            ["project", "Project", null],
          ].map(([link, label, id]) => (
            <li key={link}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (link === "project") {
                    setActiveSection("project");
                    navigate("/project");
                  } else {
                    handleLinkClick(link, id);
                  }
                }}
                className={`px-4 py-2 rounded-lg transition font-semibold border border-transparent ${
                  getActiveLink(link)
                    ? "bg-[#D56E2D] text-white"
                    : "text-[#373131] hover:bg-[#D56E2D] hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#373131] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EDE8D7] border-t border-[#373131]">
          <ul className="flex flex-col space-y-2 py-4 text-center font-[Poppins]">
            {[
              ["home", "Home", "home-section"],
              ["about", "About", "about-section"],
              ["equipment", "Equipment", "equipment-section"],
              ["service", "Service", "service-section"],
              ["contact", "Contact", "contact-section"],
              ["project", "Project", null],
            ].map(([link, label, id]) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (link === "project") {
                      setActiveSection("project");
                      navigate("/project");
                    } else {
                      handleLinkClick(link, id);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-lg transition font-semibold border border-transparent ${
                    getActiveLink(link)
                      ? "bg-[#D56E2D] text-[#FFF6ED]"
                      : "text-[#373131] hover:bg-[#373131] hover:text-[#FFF6ED]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
