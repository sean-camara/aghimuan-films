// src/pages/Home/Home.jsx
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Equipment from "./Equipment";
import Contact from "./Contact";

const Home = () => {
  console.log("🟢 Home component mounted");
  return (
    <>
      <Hero />
      <About />
      <Equipment />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
