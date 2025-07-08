// src/pages/Project/Project.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  "Night Club": [
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
  const images = data[active];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
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

      {/* Thumbnails */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-4 overflow-x-auto px-4">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => {
              setActive(cat);
              setIndex(0);
            }}
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

      {/* Prev / Next buttons (desktop only) */}
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
  );
}
