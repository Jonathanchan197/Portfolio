import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h1>My Skills</h1>
        <br />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        />

        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />

        <p><Link to="#project-4" smooth>
          Check out my projects here!
        </Link></p>
      </div>
    </div>
  );
};

export default Skills;
