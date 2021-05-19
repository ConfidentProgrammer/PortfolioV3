import React from "react";
import './css/title.scss';
function Title({number, title, width}) {
  return <div className="title-container">
      <div className="container">
          <div className="row">
          <div className="col-1">

          </div>
          <div className="col-md-7 col-lg-6 col-custom">
          <h2 className="about-h2">
            <span className='diff-text'>{number}</span>  {title} <hr style={{width : width + 'px'}}className='about-line' />
          </h2>
              </div>
          </div>
      </div>
  </div>;
}

export default Title;
