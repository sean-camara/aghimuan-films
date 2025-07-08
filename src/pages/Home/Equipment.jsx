import React from "react";
import { motion } from "framer-motion";
import {
  PencilIcon,
  CameraIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const cameraEquipment = [
  { name: "Camera 1", icon: PencilIcon },
  { name: "Camera 2", icon: VideoCameraIcon },
  { name: "Lens 1", icon: StarIcon },
  { name: "Lens 2", icon: CameraIcon },
  { name: "Lens 3", icon: StarIcon },
  { name: "Flash", icon: StarIcon },
];

const editingSoftware = [
  { name: "Software 1", icon: PencilIcon },
  { name: "Software 2", icon: VideoCameraIcon },
  { name: "Software 3", icon: StarIcon },
  { name: "Software 4", icon: CameraIcon },
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-center text-3xl md:text-4xl mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: "#373131",
          }}
        >
          My Equipment
        </h2>

        {/* Mobile First: Image on top */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start rounded-lg p-8"
          style={{ backgroundColor: "rgba(185, 167, 100, 0.26)" }}
        >
          {/* Image on top for mobile */}
          <div className="order-1 md:order-2">
            <img
              src="/equipment-image.png"
              alt="Equipment"
              className="w-full h-auto rounded-lg border border-gray-400"
              onError={() => console.log("❌ Equipment image not found!")}
            />
          </div>

          {/* Text + Boxes */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Cameras */}
            <div>
              <h3
                className="mb-4 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: "#D56E2D",
                }}
              >
                Camera’s
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cameraEquipment.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    className="flex sm:justify-start justify-center items-center gap-2 px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:shadow-md"
                    style={{ backgroundColor: "#FFF6ED" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#D56E2D" }} />
                    <span
                      className="text-sm md:text-base"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#D56E2D",
                      }}
                    >
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Editing Software */}
            <div>
              <h3
                className="mb-4 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: "#D56E2D",
                }}
              >
                Editing Software
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {editingSoftware.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    className="flex sm:justify-start justify-center items-center gap-2 px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:shadow-md"
                    style={{ backgroundColor: "#FFF6ED" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#D56E2D" }} />
                    <span
                      className="text-sm md:text-base"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#D56E2D",
                      }}
                    >
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
