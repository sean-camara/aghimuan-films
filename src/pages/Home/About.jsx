import React from "react";
import { motion } from "framer-motion";
import {
  PencilIcon,
  Squares2X2Icon,
  CameraIcon,
  VideoCameraIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const skills = [
  { name: "Scriptwriting", icon: PencilIcon },
  { name: "Directing", icon: VideoCameraIcon },
  { name: "Photography", icon: CameraIcon },
  { name: "Editing", icon: Squares2X2Icon },
  { name: "Storyboarding", icon: StarIcon },
  { name: "Color Grading", icon: StarIcon },
];

const About = () => {
  console.log("✅ Rendering About");

  return (
    <section id="about-section" className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: "#D56E2D",
            }}
          >
            About Me
          </h2>
          <h3
            className="mt-2 text-3xl md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: "#373131",
            }}
          >
            Shawn James N. Camara
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div>
            <img
              src="/about-image.png"
              alt="Shawn James"
              className="w-full h-auto rounded-lg border border-gray-400"
              onError={() => console.log("❌ Image not found!")}
            />
          </div>

          {/* Right: Description + Skills */}
          <div className="space-y-6">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#373131",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard.
            </p>

            {/* Skills */}
            <div>
              <h4
                className="mb-4 text-xl md:text-2xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: "#373131",
                }}
              >
                Skills
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    className="flex sm:justify-start justify-center items-center gap-2 px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:shadow-md"
                    style={{ backgroundColor: "#FFF6ED" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#853300" }} />
                    <span
                      className="text-sm md:text-base"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#853300",
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

export default About;
