import React from "react";
import "./css/socialLinks.scss";
function SocialLinks() {
  return (
    <div>
      <div className="social-links-container">
        <a
          target="_blank"
          href="https://github.com/ConfidentProgrammer"
          className="social-link-a"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.hackerrank.com/deepp2618"
          className="social-link-a"
        >
          <i class="fab fa-hackerrank"></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/dean06/"
          className="social-link-a"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/deeppatel4142/"
          className="social-link-a"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <hr className="line-email" />
      </div>
    </div>
  );
}

export default SocialLinks;
