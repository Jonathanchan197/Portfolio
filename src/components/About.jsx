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
          a software engineering immersive at General Assembly. I adopt a growth
          mindset and am always looking to improve my technical skills
        </p>
        <img
          className="project-img"
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
