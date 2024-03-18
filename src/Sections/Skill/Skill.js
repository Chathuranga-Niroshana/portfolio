import React, { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleSkillAnimation() {
      const skills = document.querySelectorAll(".skill");
      skills.forEach((skill) => {
        if (isInViewport(skill) && !skill.classList.contains("animated")) {
          skill.classList.add("animated");
        }
      });
    }

    // Add event listener for scroll event to trigger skill animations
    window.addEventListener("scroll", handleSkillAnimation);

    // Add event listener for mouseover to trigger an additional effect
    function handleMouseover() {
      this.classList.add("mouseover");
    }

    function handleMouseout() {
      this.classList.remove("mouseover");
    }

    function handleSkillClick() {
      this.classList.toggle("active");
    }

    document.querySelectorAll(".skill").forEach((skill) => {
      skill.addEventListener("mouseover", handleMouseover);
      skill.addEventListener("mouseout", handleMouseout);
      skill.addEventListener("click", handleSkillClick);
    });

    // Initial check for skills in the viewport on page load
    handleSkillAnimation();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleSkillAnimation);
      document.querySelectorAll(".skill").forEach((skill) => {
        skill.removeEventListener("mouseover", handleMouseover);
        skill.removeEventListener("mouseout", handleMouseout);
        skill.removeEventListener("click", handleSkillClick);
      });
    };
  }, []);

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="contents">
        <div className="skills-container">
          <div className="skill" id="teamwork">
            Teamwork
          </div>
          <div className="skill" id="timeManagement">
            Time Management
          </div>
          <div className="skill" id="analyticalSkills">
            Analytical Skills
          </div>
          <div className="skill" id="detailOriented">
            Detail-oriented Approach
          </div>
          <div className="skill" id="independence">
            Ability to Work Independently
          </div>
          <div className="skill" id="adaptability">
            Adaptability and Flexibility
          </div>
          <div className="skill" id="problemSolving">
            Problem-solving Abilities
          </div>
          <div className="skill" id="agileMethodology">
            Agile Methodology
          </div>
          <div className="skill" id="oopSkills">
            OOP Skills
          </div>
        </div>
        <div className="skills-container">
          <div className="skill key" id="html">
            HTML
            <p>
              Standard markup language for documents designed to be displayed in
              a web browser.
            </p>
          </div>
          <div className="skill key" id="css">
            CSS
            <p>
              Style sheet language for describing the look and formatting of a
              document.
            </p>
          </div>
          <div className="skill key" id="tailwind">
            Tailwind CSS
            <p>Tailwind CSS provides utility-first classes for design.</p>
          </div>
          <div className="skill key" id="javascript">
            JavaScript
            <p>
              Programming language for interactive web pages. A core technology
              of the World Wide Web.
            </p>
          </div>
          <div className="skill key" id="react">
            React JS
            <p>
              JavaScript library for building user interfaces or UI components.
              Maintained by Facebook and a community of developers.
            </p>
          </div>
          <div className="skill key" id="node">
            Node JS
            <p>Node js is a JavaScript runtime built on Chrome's V8 engine.</p>
          </div>
          <div className="skill key" id="express">
            Express JS
            <p>Express.js is a web application framework for Node.js.</p>
          </div>
          <div className="skill key" id="mongodb">
            MongoDB
            <p>NoSQL database program.</p>
          </div>
          <div className="skill key" id="mongoose">
            Mongoose
            <p>
              Mongoose is an Object Data Modeling (ODM) library for MongoDB and
              Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
