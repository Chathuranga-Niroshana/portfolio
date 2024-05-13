import React from "react";
import STM from "../../Assests/Project1/Screenshot (82).png";
import LBMS from "../../Assests/Project1/Screenshot (83).png";
import ECOM from "../../Assests/Project1/Screenshot (84).png";
import TDL from "../../Assests/Project1/Screenshot (85).png";
import ET from "../../Assests/Project1/Screenshot (104).png";
import SMD from "../../Assests/Project1/Screenshot (103).png";
import COM from "../../Assests/Project1/Screenshot (135).png";
import EMP from "../../Assests/Project1/Screenshot (141).png";

const Project = () => {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "This is an Employee Management System for a company. This has many features such as department/ project management, Employee management. task management. This Web app was created using React JS, CSS, Node JS, Express JS and MySQL as database.",
      image: EMP,
      githubLink: "https://github.com/Chathuranga-Niroshana/Employee-Management-System",
    },
    {
      title: "COM.com",
      description:
        "E-commerce web site for buy computers. Implemented using MERN Stack. Allows entering, updating, and deleting data. Code uploaded to GitHub.",
      image: COM,
      githubLink: "https://github.com/Chathuranga-Niroshana/COM.com",
    },
    {
      title: "Student & Teacher Management System",
      description:
        "Student and Teacher Management Web System for educational institutes using MERN Stack. Allows entering, updating, and deleting data. Code uploaded to GitHub.",
      image: STM,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Student-And-Teacher-Management-System",
    },
    {
      title: "Library Book Management System",
      description:
        "Project using MERN Stack for managing books in the library. Code uploaded to GitHub.",
      image: LBMS,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Book-Management-System",
    },
    {
      title: "E-Commerce Store",
      description:
        "A Project using MERN Stack for online shopping webpage. Code uploaded to GitHub.",
      image: ECOM,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Ecommerce-Store-Web-App-",
    },
    {
      title: "To-Do List",
      description: "Simple React JS Project. Code uploaded to GitHub.",
      image: TDL,
      githubLink: "https://github.com/Chathuranga-Niroshana/To-do-List",
    },
    {
      title: "Express Tracker",
      description:
        "This was created using React JS to track the expenses.This can delete, add, edit the data.also this will store data in local storage. Code uploaded to GitHub.",
      image: ET,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/CodeAlpha_Expense_Tracker",
    },
    {
      title: "Social Media Dashboard",
      description:
        "This is a Social Media Dashboard created using React Js.in this web site you can acces to varias platforms and look at your Instergram, Facebook pages.also can watch YouTube videos. Code uploaded to GitHub.",
      image: SMD,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/CodeAlpha_Social_Media_Dashboard",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectcontainer">
        {projects.map((project, index) => (
          <div className="project1" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <br />
            <br />
            <a href={project.githubLink}>
              <button>
                Go To Code <i className="fa fa-github"></i>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
