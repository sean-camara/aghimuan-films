// src/pages/Home/Service.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Night Club Photography",
    description: "Lorem Ipsum is simply dummy text.",
    icon: "📸",
  },
  {
    title: "Birthday Photography",
    description: "Lorem Ipsum is simply dummy text.",
    icon: "🎂",
  },
  {
    title: "Event",
    description: "Lorem Ipsum is simply dummy text.",
    icon: "🎉",
  },
  {
    title: "Reels/Promotion",
    description: "Lorem Ipsum is simply dummy text.",
    icon: "🎬",
  },
];

const Service = () => (
  <section id="service-section" className="w-full py-12 px-4 bg-white">
    {/* SECTION HEADER */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2
        className="text-4xl mb-4"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 700,
          color: "#373131",
        }}
      >
        Services
      </h2>
      <p
        className="text-base leading-relaxed"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          color: "#373131",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((svc, idx) => (
        <motion.div
          key={idx}
          className="bg-[#EDE8D7] p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4" style={{ color: "#D56E2D" }}>
            {svc.icon}
          </div>
          <h3
            className="text-xl mb-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              color: "#373131",
            }}
          >
            {svc.title}
          </h3>
          <p
            className="text-sm leading-snug"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              color: "#373131",
            }}
          >
            {svc.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Service;
