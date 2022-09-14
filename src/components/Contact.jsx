import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import {GrDocumentDownload} from 'react-icons/gr'


const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1> Interested?</h1>
        <p id="feedback">or want to give me some feedback </p>
        <p>Contact me:</p>
        <h1>
          <a
            href="https://www.linkedin.com/in/jonathanchan197/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>

          <button
            onClick={() =>
              (window.location = "mailto:jonathanchan197@gmail.com")
            }
          >
            <AiOutlineMail />
          </button>
          <a href="https://github.com/Jonathanchan197" target="_blank">
            <AiFillGithub />
          </a>
        </h1>
        <p>Resume:</p>
            <h1><a href="" target="_blank">
            <GrDocumentDownload/></a></h1>
      </div>
    </div>
  );
};

export default Contact;
