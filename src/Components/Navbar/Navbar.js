import React from "react";
import "./Navbar.css";
import "../../App.css"

function Navbar() {
  return (
    <header id="headder">
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className="sidebar-wrapper">
        <div className="sidebar" id="sidebar">
          <div className="sidebarContainer">
            <a href="#headder">
              <i className="fa fa-home"></i>
            </a>
            <a href="#about">
              <i className="fa fa-user"></i>
            </a>
            <a href="#projects">
              <i className="fa fa-folder"></i>
            </a>
            <a href="#skills">
              <i className="fa fa-bar-chart-o"></i>
            </a>
            <a href="#resume">
              <i className="fa fa-file-text"></i>
            </a>
            <a href="#contact">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
