import React from "react";
import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai'

export const Project0 = () => {
  return (
    <div className="projects">
      <div>
       <h1>Tic Tac Toe</h1>
        <br />
        
        <p>My first ever coding project, where I was thrown into the deep with the basic fundamentals of Javascript, HTML and CSS. Features a best of 3, and character select of cute animals.  </p>
        <p><b>Tech Stack:</b> JavaScript, CSS, jQuery, HTML </p>
        <h1><a href="https://jonathanchan197.github.io/Tic-Tac-Toe/" target="_blank"><AiFillPlayCircle /></a><a href="https://github.com/Jonathanchan197/Tic-Tac-Toe" target="_blank"><AiFillGithub /></a></h1>

        <img className="project-img" src={require('../images/tictactoe.png')} alt="tictactoe" />
      </div>  
    </div>
  );
};

export const Project1 = () => {
  return (
    <div className="projects">
      <div>
       <h1>Workout Tracker</h1> 
        <br />
        
        <p>A workout tracker that lets you create gym routines for yourself or to share. Users can create new exercises or find existing exercises based on muscle groups. Workouts are completely customizable from set to rep ranges. Users can even check out other users routines if youre looking for inspiration.  </p>
        <p><b>Tech Stack:</b> Heroku, Cloudinary, CSS, HTML5, Ruby on Rails, Ruby, HTML </p>
        <h1><a href="http://jc197-workout-tracker.herokuapp.com/" target="_blank"><AiFillPlayCircle /></a><a href="https://github.com/Jonathanchan197/Workout-Tracker" target="_blank"><AiFillGithub /></a></h1>


        <img className="project-img" src={require('../images/workout.png')} alt="workout-tracker" />
      </div>  
    </div>
  );
};

export const Project2 = () => {
  return (
    <div className="projects">
      <div>
       <h1>Coffee Dates</h1>
       
        <br />
        
        <p>A group project where our goal was to simplify the cold contact process on linked-in. Coffee dates allows users to register as mentors or mentees, which they can then choose to pair with each other to offer guidance in their respective industries. Once a match has been formed a live chat is created between the two.</p>
        
        <p><b>Tech Stack:</b> JavaScript, React.js, Yarn, Supabase, CSS, Netlify, PostgreSQL </p>
        <h1><a href="https://main--stunning-entremet-0abbec.netlify.app/" target="_blank"><AiFillPlayCircle /></a><a href="https://github.com/Jonathanchan197/Coffee-Dates" target="_blank"><AiFillGithub /></a></h1>

        <img className="project-img" src={require('../images/coffeedates.png')} alt="coffeedates" />
      </div>  
    </div>
  );
};

export const Project3 = () => {
  return (
    <div className="projects">
      <div>
       <h1>Trello </h1>
        <br />
        
        <p>After using Trello for many of my projects, I decided to create a productiviy app that takes inspiration. Jello features a drag and droppable taskboard and workspaces for users to use. In-addition users can invite other users to their workspaces and taskboards. </p>
        <p><b>Tech Stack:</b> JavaScript, React.js, CSS, npm, Firebase, Netlify</p>
        <h1><a href="https://friendly-rabanadas-95dae4.netlify.app/" target="_blank"><AiFillPlayCircle /></a><a href="https://github.com/Jonathanchan197/Jello" target="_blank"><AiFillGithub /></a></h1>

        <img className="project-img" src={require('../images/jello.png')} alt="jello" />
      </div>  
    </div>
  );
};

