// src/pages/Project/Project.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { name: "Club One", category: "Night Clubs", url: "/club1.jpg" },
  { name: "Club Two", category: "Night Clubs", url: "/club2.jpg" },
  { name: "Club Three", category: "Night Clubs", url: "/club3.jpg" },
  { name: "Club Four", category: "Night Clubs", url: "/club4.jpg" },
  { name: "Club Five", category: "Night Clubs", url: "/club5.jpg" },
  { name: "Wedding Fun", category: "Wedding", url: "/wedding.jpg" },
  { name: "Wedding Day", category: "Wedding", url: "/wedding2.jpg" },
  { name: "Wedding Magic", category: "Wedding", url: "/wedding3.jpg" },
  { name: "Wedding Glam", category: "Wedding", url: "/wedding4.jpg" },
  { name: "Wedding Lights", category: "Wedding", url: "/wedding5.jpg" },
  { name: "Event Crowd", category: "Event", url: "/event.jpg" },
  { name: "Event One", category: "Event", url: "/event1.jpg" },
  { name: "Event Two", category: "Event", url: "/event2.jpg" },
  { name: "Event Three", category: "Event", url: "/event3.jpg" },
  { name: "Event Four", category: "Event", url: "/event4.jpg" },
  { name: "Film Shot", category: "Films", url: "/club1.jpg" },
  { name: "Reel Moment", category: "Reels", url: "/club2.jpg" },
  { name: "Birthday Bash", category: "Birthday", url: "/club3.jpg" },
];

export default function Project() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(data.map((item) => item.category)))],
    []
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const openModal = (imgUrl) => {
    setModalImage(imgUrl);
    setZoom(1);
  };

  const closeModal = () => {
    setModalImage(null);
    setZoom(1);
  };

  return (
    <div className="px-6 py-10 bg-[#EDE8D7] min-h-screen">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white border border-[#D56E2D] text-black placeholder-gray-500 focus:outline-none"
          style={{ fontFamily: "Poppins, system-ui" }}
        />
      </div>

      {/* Category Navigation - desktop */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none ${
              selectedCategory === cat
                ? "bg-[#D56E2D] text-white"
                : "bg-white text-[#373131]"
            }`}
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Category Dropdown - mobile */}
      <div className="sm:hidden mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white border border-[#D56E2D] focus:outline-none text-[#373131]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={`${item.url}-${idx}`}
            layout
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid rounded-lg overflow-hidden bg-white cursor-pointer"
            onClick={() => openModal(item.url)}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="p-3">
              <h3
                className="text-sm font-medium truncate text-[#373131]"
                style={{ fontFamily: "Poppins, system-ui" }}
              >
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-md p-4 max-w-3xl w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="flex justify-between mb-2">
                <button
                  onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
                  className="text-black font-bold text-xl"
                >
                  -
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
                  className="text-black font-bold text-xl"
                >
                  +
                </button>
              </div>
              <img
                src={modalImage}
                alt="modal"
                style={{ transform: `scale(${zoom})` }}
                className="w-full h-auto mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
