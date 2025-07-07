import React from "react";
import { useParams } from "react-router-dom";

const ProjectItem = () => {
  const { id } = useParams();

  // This would typically come from an API or data source
  const projectDetails = {
    id: id,
    name: "Night Club",
    description:
      "A vibrant nightclub photography session capturing the energy and atmosphere of the venue.",
    date: "June 15, 2023",
    client: "Pulse Nightclub",
    category: "Events",
    images: [
      "/hero-bg3.jpg",
      "/hero-bg2.jpg",
      "/hero-bg.png",
      "/hero-bg3.jpg",
      "/hero-bg2.jpg",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={projectDetails.images[0]}
            alt={projectDetails.name}
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
            {projectDetails.name}
          </h1>
          <p className="text-xl max-w-2xl px-4">{projectDetails.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Project Details
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <span className="text-[#D56E2D] w-24">Client:</span>
                  <span className="text-white">{projectDetails.client}</span>
                </div>
                <div className="flex">
                  <span className="text-[#D56E2D] w-24">Date:</span>
                  <span className="text-white">{projectDetails.date}</span>
                </div>
                <div className="flex">
                  <span className="text-[#D56E2D] w-24">Category:</span>
                  <span className="text-white">{projectDetails.category}</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Project Overview
              </h2>
              <p className="text-gray-300">
                This project involved capturing the vibrant atmosphere of a
                popular nightclub. The goal was to showcase the energy,
                lighting, and crowd engagement to help promote future events.
                The shoot included candid shots of patrons enjoying themselves,
                DJ performances, and the unique lighting and decor of the venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-white text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetails.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItem;
