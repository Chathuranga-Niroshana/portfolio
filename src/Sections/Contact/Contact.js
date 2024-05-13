import React, { useState } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-info-container">
        <h2>Contact</h2>
    <p>+94756261513</p>
        <p>J.M.C.Niroshana Jayathilaka,</p>
        <p>BSc. Software Engineering,</p>
        <p>CINEC Campus, Malabe,</p>
        <p>Sri Lanka.</p>
      </div>
      <div className="linkcontainer">
        <a href="http://www.linkedin.com/in/chathuranga-niroshana-651122252">
          <i
            className="fa fa-linkedin-square"
            style={{ color: "rgb(47, 4, 175)" }}
          ></i>
        </a>
        <a href="https://github.com/Chathuranga-Niroshana">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="mailto:niroshana.c.n.j@gmail.com">
          <i className="fa fa-envelope" style={{ color: "rgb(135, 9, 9)" }}></i>
        </a>
        <a
          href="https://wa.me/+94756261513"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp" style={{ color: "green" }}></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
