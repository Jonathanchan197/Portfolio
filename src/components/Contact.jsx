import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import {GrDocumentDownload} from 'react-icons/gr'
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div>
        <h1> Interested?</h1>
        <p id="feedback">or want to give me some feedback </p>
        <p>Contact me:</p>
        <h1>
          <button
            onClick={event =>  window.open('https://www.linkedin.com/in/jonathanchan197', '_blank')}
          >
            <AiFillLinkedin />
          </button>

          <button
            onClick={() =>
              (window.location = "mailto:jonathanchan197@gmail.com")
            }
          >
            <AiOutlineMail />
          </button>
          <button
            onClick={event =>  window.open('https://github.com/Jonathanchan197', '_blank')}
          >
            <AiFillGithub />
          </button>
        </h1>
        <p>Resume:</p>
            <h1><a href="" target="_blank">
            <GrDocumentDownload/></a></h1>
      </div>
    </div>
  );
};
export default Contact;
