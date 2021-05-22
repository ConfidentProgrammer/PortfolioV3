import React from "react";
import "./css/featuredproject.scss";
import Tag from './Tag';

function FeaturedProject({ image, desc, name, tech , urlG, urlL }) {
  return (
    <div className="project-container-Main">
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>

              <div className="col-md-6 col-lg-6 col-image">
                <div className="project-container">
                
                  <div id="projects" className="image-container">
                    <img  className="image-itself" src={image} alt="" />
                  </div>
                  
                  
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-desc">
              <div className="desc-container">
              
                    <div className="name-container">
                    <Tag name="project" />
                    <p  className="feature-project">Featured Project</p>
                      <h6 className="title-project">{name}</h6>
                    </div>
                     

                      <p className="desc-itself">{desc}</p>
                        <div className="ul-container">
                      <ul className="tech-list">
                          {
                              tech.map(tech => <li className='list-item-tech' >{tech}</li>)
                          }
                      </ul>
                      <ul className="link-list">
                          <li className='list-item-link'><a className='link-a' href={urlL}><i class="fab fa-github"></i></a></li>
                          <li className='list-item-link'><a className='link-a' href={urlG}><i class="fas fa-external-link-alt"></i></a></li>
                      </ul>
                      <Tag name="/project" />
                      </div>
                   
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
