import React, { useState } from "react";
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import { Project0, Project1, Project2, Project3 } from "./Projects";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../App.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import {
  BsClipboardCheck,
  BsToggleOff,
  BsToggleOn,
  BsPersonCircle,
} from "react-icons/bs";

import { GiJelly, GiTicTacToe } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { BiDumbbell } from "react-icons/bi";

function App() {
  const [navDisplay, setNavDisplay] = useState(false);

  const handleToggle = () => {
    setNavDisplay(!navDisplay);
  };

  const [home, setHome] = useState(false);
  const handleHomeOn = () => {
    setHome(true);
  };
  const handleHomeOff = () => {
    setHome(false);
  };

  const [about, setAbout] = useState(false);
  const handleAboutOn = () => {
    setAbout(true);
  };
  const handleAboutOff = () => {
    setAbout(false);
  };

  const [skills, setSkills] = useState(false);
  const handleSkillsOn = () => {
    setSkills(true);
  };
  const handleSkillsOff = () => {
    setSkills(false);
  };

  const [jello, setJello] = useState(false);
  const handleJelloOn = () => {
    setJello(true);
  };
  const handleJelloOff = () => {
    setJello(false);
  };

  const [coffee, setCoffee] = useState(false);
  const handleCoffeeOn = () => {
    setCoffee(true);
  };
  const handleCoffeeOff = () => {
    setCoffee(false);
  };

  const [workout, setWorkout] = useState(false);
  const handleWorkoutOn = () => {
    setWorkout(true);
  };
  const handleWorkoutOff = () => {
    setWorkout(false);
  };

  const [tic, setTic] = useState(false);
  const handleTicOn = () => {
    setTic(true);
  };
  const handleTicOff = () => {
    setTic(false);
  };

  const [contact, setContact] = useState(false);
  const handleContactOn = () => {
    setContact(true);
  };
  const handleContactOff = () => {
    setContact(false);
  };

  return (
    <BrowserRouter>
      <div className="widgets-container">
        <div class="widget-icon">
          <button id="widget-button" onClick={handleToggle}>
            {navDisplay ? <BsToggleOff /> : <BsToggleOn />}
          </button>
          {navDisplay ? (
            <>
              <nav>
                <Link
                  onMouseOut={handleHomeOff}
                  onMouseOver={handleHomeOn}
                  className="navbar"
                  to="#welcome"
                  smooth
                >
                  {home ? <p>Going up?</p> : <AiOutlineHome />}
                </Link>
                <Link
                  onMouseOut={handleAboutOff}
                  onMouseOver={handleAboutOn}
                  className="navbar"
                  to="#about"
                  smooth
                >
                  {about ? <p>About me</p> : <BsPersonCircle />}
                </Link>
                <Link
                  onMouseOut={handleSkillsOff}
                  onMouseOver={handleSkillsOn}
                  className="navbar"
                  to="#skills"
                  smooth
                >
                  {skills ? <p>Skills</p> : <BsClipboardCheck />}
                </Link>
                <Link
                  onMouseOut={handleJelloOff}
                  onMouseOver={handleJelloOn}
                  className="navbar"
                  to="#project-3"
                  smooth
                >
                  {jello ? <p>Jello</p> : <GiJelly />}
                </Link>
                <Link
                  onMouseOut={handleCoffeeOff}
                  onMouseOver={handleCoffeeOn}
                  className="navbar"
                  to="#project-2"
                  smooth
                >
                  {coffee ? <p>Coffee-Dates</p> : <SiBuymeacoffee />}
                </Link>
                <Link
                  onMouseOut={handleWorkoutOff}
                  onMouseOver={handleWorkoutOn}
                  className="navbar"
                  to="#project-1"
                  smooth
                >
                  {workout ? <p>Workout Tracker</p> : <BiDumbbell />}
                </Link>
                <Link
                  onMouseOut={handleTicOff}
                  onMouseOver={handleTicOn}
                  className="navbar"
                  to="#project-0"
                  smooth
                >
                  {tic ? <p>TicTacToe</p> : <GiTicTacToe />}
                </Link>

                <Link
                  onMouseOut={handleContactOff}
                  onMouseOver={handleContactOn}
                  className="navbar"
                  to="#contact"
                  smooth
                >
                  {contact ? <p>Contact me!</p> : <RiContactsBookLine />}
                </Link>
              </nav>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="container">
        <Welcome />
        <About />
        <Skills />
        <Project3 />
        <Project2 />
        <Project1 />
        <Project0 />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
