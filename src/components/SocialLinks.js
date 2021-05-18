import React from "react";
import "./css/socialLinks.scss";
function SocialLinks() {
  return (
    <div>
      <div className="social-links-container">
        <a
          href="https://github.com/ConfidentProgrammer"
          className="social-link-a"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.hackerrank.com/deepp2618"
          className="social-link-a"
        >
          <i class="fab fa-hackerrank"></i>
        </a>

        <a href="https://www.linkedin.com/in/dean06/" className="social-link-a">
          <i class="fab fa-linkedin"></i>
        </a>

        <a
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
