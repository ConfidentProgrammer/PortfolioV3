import React from "react";
import "./css/about.scss";
import Tag from "./Tag";
function About() {
  return (
    <div id="About" className="about-container">
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 col-lg-6 col-custom">
            <Tag name="h2" />
            <h2 className="about-h2">
              <span className="diff-text">01.</span> About{" "}
              <hr className="about-line" />
            </h2>
            <Tag name="/h2" />
            <Tag name="p" />
            <p className="about-para">
              More about me <span className="diff-text">,</span> I am passionate
              about web development since my childhood, I can spend more than{" "}
              <span className="diff-text">6 hours</span> to automate something
              than hard code it. I think that cloning the somebody's project is
              the best way to practice programming. The primary area of my focus
              is the <span className="diff-text"> Front-end Development.</span>
            </p>
            <Tag name="/p" />
            <Tag name="p" />
            <p className="skills-para">
              Here are few technologies I've been working with:
              <div className="skills-div">
                <ul className="skills-ul">
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> Javascript
                  </li>
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> React
                  </li>
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> Java
                  </li>
                </ul>
                <ul className="skills-ul">
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> REST
                  </li>
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> CSS3 (Sass)
                  </li>
                  <li className="skills-li">
                    <i class="fas fa-angle-right"></i> Figma
                  </li>
                </ul>
              </div>
            </p>
            <Tag name="/p" />
          </div>
          <div className="col-md-5 col-lg-5 col-profile ">
            <div className="profile-photo"></div>
            <div className="frame"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
