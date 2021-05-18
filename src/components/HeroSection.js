import React from "react";
import "./css/heroSection.scss";
import Tag from "./Tag";
function HeroSection() {
  return (
    <div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-8 col-md-9">
            <Tag name="p" />
            <p className="intro-line">Hi, my name is</p>
            <Tag name="/p" />

            <Tag name="h1" />
            <h1 className="name-h1">Deep patel.</h1>
            <Tag name="/h1" />

            <Tag name="h2" />
            <h1 className="slogan-h1">I create beautiful web experiences.</h1>
            <Tag name="/h2" />
            <Tag name="p" />

            <p className="body-para">
              I am Deep Patel, currently pursuing software development and
              network engineering at the Sheridan College. I have immense
              knowledge of <span className="diff-text">Front-end</span> and
              Back-end technologies, diving deep into the spectrum of the{" "}
              <span className="diff-text">UI/UX</span> designs.
            </p>
            <Tag name="/p" />

            <a href="mailto:deep.canada29@gmail.com">
              {" "}
              <button className="btn cta-btn">Contact Me</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
