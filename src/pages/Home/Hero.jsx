import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

const slides = ["/hero-bg.png", "/hero-bg2.jpg", "/hero-bg3.jpg"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Advance slides every 5 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  const goToSlide = (i) => setCurrentSlide(i);
  const nextSlide = () =>
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  const prevSlide = () =>
    setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
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
      <div className="relative z-20 flex flex-col md:flex-row h-full justify-start md:justify-center items-start md:items-center container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-20 pb-16 md:py-20 max-w-6xl text-[#FFF6ED]">
        {/* Left side - Text content */}
        <div className="md:w-1/2 md:pr-8 mt-8 sm:mt-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Photographer/
            <br className="sm:hidden" />
            Videographer
          </h1>
          <p
            className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg max-w-md"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Capturing life's most precious moments with artistic vision and
            technical excellence. I specialize in stunning visual narratives for
            weddings, events, and commercial projects.
          </p>
          <Button>Get in Touch</Button>
        </div>

        {/* Right side - Phone image (visible on md screens and up) */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative mx-auto w-64 h-auto">
            <div className="bg-black rounded-3xl p-2 shadow-xl">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/hero-bg3.jpg"
                  alt="Event photography on smartphone"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-0 w-full flex justify-center">
                <div className="bg-black w-20 h-5 rounded-b-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev/Next Arrows - Hidden on mobile, visible on md screens and up */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-[#D56E2D] rounded-full text-[#FFF6ED] text-base"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-[#D56E2D] rounded-full text-[#FFF6ED] text-base"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 w-full flex justify-center space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-[#D56E2D]" : "bg-[#D56E2D] bg-opacity-50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom banner */}
      <div className="absolute bottom-0 w-full bg-[#FFF6ED] py-2 sm:py-3 md:py-4 z-30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-[#373131] text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 md:mb-0 md:inline-block md:mr-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore my portfolio to see the full range of my creative work
          </p>
          <Link to="/project">
            <Button className="text-xs sm:text-sm md:text-base py-1 px-3 sm:py-2">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
