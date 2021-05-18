import React from "react";
import "./css/nav.scss";
import { useState } from "react";
export default function Nav() {
  const [border, setBorder] = useState(""); //3px dashed #5ff3d1
  const [border1, setBorder1] = useState(""); //3px dashed #5ff3d1
  const [border2, setBorder2] = useState(""); //3px dashed #5ff3d1
  const [border3, setBorder3] = useState(""); //3px dashed #5ff3d1
  return (
    <div className="main-nav-div">
      <div className="container-fluid nav-container">
        <nav class="navbar navbar-expand-lg  navbar-custom justify-content-end fixed-top py-4">
          <button
            class="navbar-toggler menu-button-custom"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars ham-menu"></i>
            </span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end ul-nav"
            id="navbarNav"
          >
            <ul class="navbar-nav nav-items-ul">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ outline: border }}
                  onClick={() => {
                    setBorder("2px dashed #5ff3d1");
                    setTimeout(function () {
                      setBorder("");
                    }, 1000);
                  }}
                >
                  <span className="no-nav-item">01.&nbsp;</span>Home{" "}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ outline: border1 }}
                  onClick={() => {
                    setBorder1("2px dashed #5ff3d1");
                    setTimeout(function () {
                      setBorder1("");
                    }, 1000);
                  }}
                >
                  <span className="no-nav-item">02.&nbsp;</span>About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ outline: border2 }}
                  onClick={() => {
                    setBorder2("2px dashed #5ff3d1");
                    setTimeout(function () {
                      setBorder2("");
                    }, 1000);
                  }}
                >
                  <span className="no-nav-item">03.&nbsp;</span>Experience
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ outline: border3 }}
                  onClick={() => {
                    setBorder3("2px dashed #5ff3d1");
                    setTimeout(function () {
                      setBorder3("");
                    }, 1000);
                  }}
                >
                  <span className="no-nav-item">04.&nbsp;</span>Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link resume-link" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
