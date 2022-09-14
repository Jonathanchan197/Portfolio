import About from "./About";
import Skills from "./Skills";
import {Project0, Project1, Project2, Project3} from "./Projects";
import Contact from "./Contact";
import "../App.css";

function App() {
  return (
    <div className="container">
      <About/>
      <Skills/>
      <Project3/>
      <Project2/>
      <Project1/>
      <Project0/>
      <Contact/>
    </div>
  );
}

export default App;
