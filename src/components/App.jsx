import React, {useState} from "react"
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import { Project0, Project1, Project2, Project3 } from "./Projects";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../App.css";
import {
  AiOutlineHome,
} from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsClipboardCheck, BsToggleOff, BsToggleOn, BsPersonCircle } from "react-icons/bs";

import {GiJelly, GiTicTacToe} from "react-icons/gi"
import {SiBuymeacoffee} from "react-icons/si"
import {BiDumbbell} from "react-icons/bi"

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
              
            <Link class="navbar" to="#welcome" smooth>
              <AiOutlineHome />
            </Link>
            <Link class="navbar" to="#about" smooth>
              <BsPersonCircle />
            </Link>
            <Link class="navbar" to="#skills" smooth>
              <BsClipboardCheck />
            </Link>
            <Link class="navbar" to="#project-3" smooth><GiJelly/></Link>
            <Link class="navbar" to="#project-2" smooth><SiBuymeacoffee/></Link>
            <Link class="navbar" to="#project-1" smooth><BiDumbbell/></Link>
            <Link class="navbar" to="#project-0" smooth><GiTicTacToe/></Link>

            <Link class="navbar" to="#contact" smooth>
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
