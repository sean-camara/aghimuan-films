import React from "react";

const Equipment = () => {
  const equipmentCategories = [
    {
      category: "Cameras",
      items: [
        "Sony A7S III",
        "Canon EOS R5",
        "Blackmagic Pocket Cinema Camera 6K",
        "DJI Ronin 4D",
      ],
    },
    {
      category: "Lenses",
      items: [
        "Sony G Master Series",
        "Canon L Series",
        "Sigma Art Series",
        "Zeiss Prime Lenses",
      ],
    },
    {
      category: "Lighting",
      items: [
        "Aputure 600d Pro",
        "Godox VL Series LED Panels",
        "Nanlite Forza 500",
        "Profoto B10 Plus",
      ],
    },
    {
      category: "Audio",
      items: [
        "Rode NTG5 Shotgun Microphone",
        "Sennheiser MKH 416",
        "Zoom F6 Field Recorder",
        "Wireless Lavalier Systems",
      ],
    },
  ];

  return (
    <section id="equipment-section" className="py-12 px-4 w-full bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-white text-center">
          Our Equipment
        </h2>
        <p className="text-gray-300 text-center mb-8">
          We use professional-grade equipment to ensure the highest quality for
          your projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentCategories.map((category, index) => (
            <div key={index} className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#D56E2D]">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="text-[#D56E2D] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
