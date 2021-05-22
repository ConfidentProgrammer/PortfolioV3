import React from "react";
import "./css/socialMobile.scss";
function socialMobile() {
  return (
    <div>
      <div className="mobile-link-container">
        <a
          href="https://github.com/ConfidentProgrammer"
          className="mobile-link-a"
        >
          <i class="fab fa-github mobile-github"></i>
        </a>
        <a
          href="https://www.hackerrank.com/deepp2618"
          className="mobile-link-a"
        >
          <i class="fab fa-hackerrank mobile-hackerrank"></i>
        </a>
        <a href="https://www.linkedin.com/in/dean06/" className="mobile-link-a">
          <i class="fab fa-linkedin mobile-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/deeppatel4142/"
          className="mobile-link-a"
        >
          <i class="fab fa-instagram mobile-instagram"></i>
        </a>
      </div>
      <div className="author-container">
        <p className="author-line">
          Built by Deep Patel with <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>{" "}
        </p>
      </div>
    </div>
  );
}

export default socialMobile;
