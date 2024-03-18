// App.jsx
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopButton from "./Components/TopButton/TopButton";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Project from "./Sections/Project/Project";
import Skill from "./Sections/Skill/Skill";
import Resume from "./Sections/Resume/Resume";
import Contact from "./Sections/Contact/Contact";

const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        // Check if the target element exists
        const target = targetId ? document.querySelector(targetId) : null;

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Project />
        <Skill />
        <Resume />
        <Contact />
      </div>
      <TopButton />
    </div>
  );
};

export default App;
