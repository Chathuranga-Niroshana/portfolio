import React from "react";
import resumeImg from "../../Assests/Resume/Screenshot (143).png";
import resume from "../../Assests/Resume/J.M.Chathuranga Niroshana Jayathilaka.pdf";

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resumecontainer">
        <img src={resumeImg} alt="resume" />
      </div>
      <a href={resume} download="J.M.Chathuranga Niroshana.pdf">
        <button>
          Download My CV <i className="fa fa-download"></i>
        </button>
      </a>
    </section>
  );
};

export default Resume;
