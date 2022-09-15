import React, {useState} from "react"
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import { Project0, Project1, Project2, Project3 } from "./Projects";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../App.css";
// import useAnimations
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsClipboardCheck, BsToggleOff, BsToggleOn } from "react-icons/bs";

function App() {
  const [navDisplay, setNavDisplay] = useState(false)

  const handleToggle = () => {
    setNavDisplay(!navDisplay);
  }

  return (
    <BrowserRouter>
      <div className="widgets-container">
        <div class="widget-icon">
          <button id="widget-button" onClick={handleToggle}>
            {navDisplay? <BsToggleOff /> : <BsToggleOn/>}
          </button>
          {navDisplay? <>
            <nav>
            <Link class="navbar">
              <AiOutlineHome />
            </Link>
            <Link class="navbar">
              <AiOutlineInfoCircle />
            </Link>
            <Link class="navbar">
              <BsClipboardCheck />
            </Link>
            <Link class="navbar">Jello</Link>
            <Link class="navbar">Coffee Dates</Link>
            <Link class="navbar">Workouts</Link>
            <Link class="navbar">TicTacToe</Link>

            <Link class="navbar">
              <RiContactsBookLine />
            </Link>
          </nav>
          </> : <></>}
          
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
