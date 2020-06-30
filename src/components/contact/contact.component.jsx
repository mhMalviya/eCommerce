import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact.styles.scss";

import dp from "../../assets/my-image.png";

const Contact = () => (
  <div className="contact">
    <div
      className="image-container"
      style={{ backgroundImage: `url(${dp})` }}
    />
    <div className="contact-content">
      <h2>I am Mayank Malviya</h2>
      <h3>Front End Developer</h3>
      <div className="contact-content-social-media">
        <a
          href="https://www.linkedin.com/in/mayank-malviya-6409361a0/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>

        <a href="https://github.com/mhMalviya" target="_blank">
          <FontAwesomeIcon icon={["fab", "github-square"]} size="lg" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
