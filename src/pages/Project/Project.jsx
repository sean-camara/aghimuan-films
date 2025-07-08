// src/pages/Project/Project.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  "Night Clubs": [
    "/club1.jpg",
    "/club2.jpg",
    "/club3.jpg",
    "/club4.jpg",
    "/club5.jpg",
  ],
  Wedding: [
    "/wedding.jpg",
    "/wedding2.jpg",
    "/wedding3.jpg",
    "/wedding4.jpg",
    "/wedding5.jpg",
  ],
  Event: [
    "/event.jpg",
    "/event1.jpg",
    "/event2.jpg",
    "/event3.jpg",
    "/event4.jpg",
  ],
  Films: ["/club1.jpg", "/club2.jpg", "/club3.jpg", "/club4.jpg", "/club5.jpg"],
  Reels: ["/club1.jpg", "/club2.jpg", "/club3.jpg", "/club4.jpg", "/club5.jpg"],
  Birthday: [
    "/club1.jpg",
    "/club2.jpg",
    "/club3.jpg",
    "/club4.jpg",
    "/club5.jpg",
  ],
};

export default function Project() {
  const categories = Object.keys(data);
  const [active, setActive] = useState(categories[0]);
  const [index, setIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const images = data[active];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const handleDragEnd = (e, info) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };
  const selectCategory = (cat) => {
    setActive(cat);
    setIndex(0);
    setDropdownOpen(false);
  };

  return (
    <div className="force-mobile">
      {/* Mobile header + dropdown */}
      <div className="md:hidden bg-[#EDE8D7] px-4 pt-4 pb-2">
        <h1
          className="text-3xl font-bold text-center"
          style={{ fontFamily: "Cormorant Garamond", color: "#373131" }}
        >
          My Projects
        </h1>
        <div className="relative max-w-xs mx-auto mt-2">
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="w-full py-2 px-4 rounded-full flex justify-between items-center"
            style={{
              backgroundColor: "#D56E2D",
              color: "#FFF6ED",
              fontFamily: "Cormorant Garamond",
            }}
          >
            {active}
            <span className="ml-2">▾</span>
          </button>
          {dropdownOpen && (
            <ul
              className="absolute left-0 right-0 mt-2 rounded-lg shadow-lg overflow-hidden z-50"
              style={{
                backgroundColor: "#EDE8D7",
                border: "1px solid #622022",
              }}
            >
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => selectCategory(cat)}
                  className="px-4 py-2 cursor-pointer"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    backgroundColor: cat === active ? "#D56E2D" : "transparent",
                    color: cat === active ? "#FFF6ED" : "#373131",
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Main content container */}
      <div className="w-full relative overflow-hidden bg-[#EDE8D7] min-h-[300px] md:h-[calc(100vh-90px)]">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            alt="project"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/1" />

        {/* Desktop header + thumbnails + controls */}
        <div className="hidden md:absolute md:inset-0 md:flex md:flex-col md:justify-center md:items-center text-white">
          <h1
            className="text-5xl font-bold mb-2"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            My Projects
          </h1>
          <h2 className="text-3xl" style={{ fontFamily: "Cormorant Garamond" }}>
            {active}
          </h2>
        </div>
        <div className="hidden md:absolute md:bottom-4 md:w-full md:flex md:justify-center md:space-x-4 md:overflow-x-auto md:px-4">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`relative flex-shrink-0 w-24 h-16 border-2 rounded-lg overflow-hidden cursor-pointer ${
                active === cat ? "border-white" : "border-white/50"
              }`}
            >
              <img
                src={data[cat][0]}
                alt={cat}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p
                  className="text-sm font-medium text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  {cat}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}
