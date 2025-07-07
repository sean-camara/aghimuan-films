import React from "react";

const About = () => {
  return (
    <section id="about-section" className="py-12 px-4 bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-white">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              We are a creative team dedicated to capturing your special moments
              and bringing your vision to life. With years of experience in the
              film and photography industry, we pride ourselves on delivering
              high-quality content that exceeds expectations.
            </p>
            <p className="text-lg text-gray-300">
              At Aghimuan Films, we believe that every project tells a unique
              story. Our passion is to help you tell that story through
              compelling visuals and innovative techniques.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-gray-300 mb-4">
              To create stunning visual content that captures the essence of
              your brand, event, or personal story.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To be the leading creative film and photography studio, known for
              exceptional quality and innovative storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
