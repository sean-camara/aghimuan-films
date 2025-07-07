import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#D56E2D] text-[#FFF6ED] px-5 py-2 rounded-full hover:bg-opacity-90 transition ${className}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {children}
    </button>
  );
};

export default Button;
