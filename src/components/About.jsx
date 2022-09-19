import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h1>About me</h1>
        <p>
          Nice to meet you! I'm Jonathan a full stack developer ready to embark
          into my first junior software developer role. I've recently completed
          a software engineering immersive course at General Assembly. Before coding, I previously studied a Bachelor of Medical Science at the University of Sydney. Coming from a medical science background has allowed my to approach problems with an analytical and problem-solving mindset. Because of my background I strive to build products that leave a positive and lasting impact. I'm interested in any roles that could develop me further as a software engineer. 
        </p>
        <img
          className="project-img"
          id="diagram"
          src={require("../images/diagramofme.png")}
          alt="tictactoe"
        />
        <h4><Link to="#contact" smooth>
          Contact me!
        </Link></h4>
      </div>
    </div>
  );
};

export default About;
