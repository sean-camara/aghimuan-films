import React from "react";

const Service = () => {
  const services = [
    {
      title: "Wedding Videography",
      description:
        "Capture your special day with cinematic storytelling that highlights the emotions and moments you'll cherish forever.",
      icon: "📹",
    },
    {
      title: "Commercial Production",
      description:
        "Professional video content for your business that communicates your brand message effectively to your target audience.",
      icon: "🎬",
    },
    {
      title: "Documentary Filming",
      description:
        "Tell compelling stories through documentary-style filming with a focus on authenticity and narrative depth.",
      icon: "🎥",
    },
    {
      title: "Photography Sessions",
      description:
        "High-quality photography services for portraits, events, products, and more with attention to detail and artistic vision.",
      icon: "📸",
    },
  ];

  return (
    <section id="service-section" className="py-12 px-4 w-full bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-white text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
