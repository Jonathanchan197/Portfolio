import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Welcome = () => {
  return (
    <div className="welcome">
        <div>
        <h1>I'm Jonathan</h1>
        <h4>a full-stack developer</h4>
        <p>
        <Link to="#about" smooth>
          Learn more...
        </Link>
        </p>
        </div>
        
    </div>
    
    
  );
};

export default Welcome;
