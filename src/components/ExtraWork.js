import React from "react";
import "./css/extraWork.scss";
function ExtraWork({ title, body, tech, link }) {
  return (
    <div>
        
      <div className="card-container">
        <div className="work-icon-container">
          <div className="folder">
            <i class="far fa-folder folder-icon"></i>
          </div>
          <div className="github">
              <a href={link}><i class="fab fa-github"></i></a>
           
          </div>
        </div>

        <div className="work-desc-container">
          <h6 className="extra-work-title">{title}</h6>

          <p className="extra-work-desc">{body}</p>
          <ul className="work-tech-list">
            {tech.map((t) => (
              <li className="work-tech-list-item">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExtraWork;
