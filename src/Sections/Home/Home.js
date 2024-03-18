// Home.jsx
import React, { useState, useEffect } from "react";
import profileImage from "./../../Assests/profile.jpg";
import "./Home.css";

const Home = () => {
  const [changingWord, setChangingWord] = useState("Frontend Development");

  useEffect(() => {
    const words = [
      "Frontend Development",
      "Backend Development",
      "MERN Development",
      "Fullstack Web Developer",
    ];

    let i = 1;

    const intervalId = setInterval(() => {
      setChangingWord(words[i]);
      i = (i + 1) % words.length;
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home">
      <img src={profileImage} alt="Profile" />
      <div className="textcontainer">
        <p>
          <strong>Hello, I am,</strong>
        </p>
        <h3>Chathuranga Niroshana</h3>
        <p id="intro">
          Welcome to my portfolio! I am a passionate Web Developer, pursuing a
          degree in Software Engineering. With an interest in crafting
          user-friendly web solutions using MERN Stack, I strive for engaging
          digital experiences.
        </p>
        <h4 id="changingWord">{changingWord}</h4>
        <div className="linkcontainer">
          <a href="http://www.linkedin.com/in/chathuranga-niroshana-651122252">
            <i
              className="fa fa-linkedin-square"
              style={{ color: "rgb(47, 4, 175)" }}
            ></i>
          </a>
          <a href="https://github.com/Chathuranga-Niroshana">
            <i
              className="fa fa-github"
              style={{ color: "white" }}
            ></i>
          </a>
          <a href="mailto:niroshana.c.n.j@gmail.com">
            <i
              className="fa fa-envelope"
              style={{ color: "rgb(135, 9, 9)" }}
            ></i>
          </a>
          <a
            href="https://wa.me/+94757684501"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-whatsapp"
              style={{ color: "green" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
