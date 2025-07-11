// src/pages/Home/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

const slides = ["/hero-bg.png", "/hero-bg2.jpg", "/hero-bg3.jpg"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  const prevSlide = () =>
    setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  const goToSlide = (i) => setCurrentSlide(i);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  const handleGetInTouch = () => {
    const section = document.getElementById("contact-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home-section"
      className="relative w-full min-h-[100vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center md:items-start h-full">
        {/* Left side - Text */}
        <div className="md:w-1/2 text-left text-[#FFF6ED]">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Photographer/
            <br className="block md:hidden" />
            Videographer
          </h1>
          <p
            className="mb-6 text-sm sm:text-base md:text-lg max-w-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Capturing life&apos;s most precious moments with artistic vision and technical excellence. I specialize in stunning visual narratives for weddings, events, and commercial projects.
          </p>
          <div className="flex space-x-4">
            <Button
              onClick={handleGetInTouch}
              className="bg-[#D56E2D] text-[#FFF6ED] py-2 px-6 rounded-full transition-transform hover:scale-105"
            >
              Get in Touch
            </Button>
            <Link to="/project">
              <Button className="bg-transparent border border-[#FFF6ED] text-[#FFF6ED] py-2 px-6 rounded-full transition-transform hover:bg-[#FFF6ED] hover:text-[#373131]">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev/Next Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-transparent border border-[#FFF6ED] rounded-full text-[#FFF6ED] transition-colors hover:bg-[#FFF6ED] hover:text-[#373131]"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-transparent border border-[#FFF6ED] rounded-full text-[#FFF6ED] transition-colors hover:bg-[#FFF6ED] hover:text-[#373131]"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-20 w-full flex justify-center space-x-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === i ? "bg-[#D56E2D]" : "bg-[#FFF6ED] bg-opacity-70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom banner */}
      <div className="absolute bottom-0 w-full bg-[#FFF6ED] py-4 z-30">
        <div className="container mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <p
            className="text-[#373131] text-sm mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore my portfolio to see the full range of my creative work
          </p>
          <Link to="/project">
            <Button className="bg-transparent border border-[#373131] text-[#373131] py-2 px-6 rounded-full hover:bg-[#373131] hover:text-white transition-colors">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
