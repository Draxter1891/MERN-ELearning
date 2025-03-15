import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ by Rishabh Tripathi
        </p>
        <div className="social-links">
          <a href="https://www.github.com/Draxter1891" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tripathi-rishabh"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
