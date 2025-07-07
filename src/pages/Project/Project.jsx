import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Night Club",
      image: "/hero-bg3.jpg",
      category: "Events",
    },
    {
      id: 2,
      name: "Wedding",
      image: "/hero-bg2.jpg",
      category: "Wedding",
    },
    {
      id: 3,
      name: "Events",
      image: "/hero-bg.png",
      category: "Events",
    },
    {
      id: 4,
      name: "Films",
      image: "/hero-bg3.jpg",
      category: "Films",
    },
    {
      id: 5,
      name: "Reels",
      image: "/hero-bg2.jpg",
      category: "Reels",
    },
    {
      id: 6,
      name: "Birthday",
      image: "/hero-bg.png",
      category: "Events",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg3.jpg"
            alt="Project Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col h-full justify-center items-center text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            My Projects
          </h1>
          <h2
            className="text-2xl md:text-3xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Night Club
          </h2>
        </div>

        {/* Featured Project Image */}
        <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-black rounded-3xl p-2 shadow-xl">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/hero-bg3.jpg"
                alt="Featured Project"
                className="w-full h-auto max-w-[250px]"
              />
            </div>
            <div className="absolute top-0 left-0 w-full flex justify-center">
              <div className="bg-black w-20 h-5 rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="pt-24 pb-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative border-2 border-[#D56E2D] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white text-center font-medium">
                    {project.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
