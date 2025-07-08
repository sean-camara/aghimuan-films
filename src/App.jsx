// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Project from "./pages/Project/Project.jsx";
import ProjectItem from "./pages/Project/ProjectItem.jsx";

function App() {
  console.log("🟢 App component rendering");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
