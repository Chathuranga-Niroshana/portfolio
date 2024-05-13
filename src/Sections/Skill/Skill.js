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
  <div className="skill" id="oopSkills">
           Version Control (Git)
          </div>
        </div>
        <div className="skills-container">
          <div className="skill key" id="html">
            HTML
          </div>
          <div className="skill key" id="css">
            CSS
          </div>
          <div className="skill key" id="tailwind">
            Tailwind CSS
          </div>
    <div className="skill key" id="tailwind">
            Bootstrap
          </div>
          <div className="skill key" id="javascript">
            JavaScript
          </div>
          <div className="skill key" id="react">
            React JS
          </div>
          <div className="skill key" id="node">
            Node JS
          </div>
          <div className="skill key" id="express">
            Express JS
          </div>
    <div className="skill key" id="mysql">
            PHP
          </div>
    <div className="skill key" id="mysql">
            JAVA
          </div>
    <div className="skill key" id="mysql">
            Next JS
          </div>
    <div className="skill key" id="mysql">
            Python
          </div>
    <div className="skill key" id="mysql">
            MySQL
          </div>
          <div className="skill key" id="mongodb">
            MongoDB
          </div>
          <div className="skill key" id="mysql">
            MySQL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
