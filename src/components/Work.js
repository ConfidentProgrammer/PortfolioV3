import React from "react";
import "./css/work.scss";
function Work({title, workPara, position}) {
  return <div className="work-container-main">
      <div className="container">
          <div className="row">
              <div className="col-1">

              </div>
          <div  className="col-md-1 col-lg-1  col-custom">
            
              <div className="work-title-container">
                  <p className='icon-container' > <i class="fas fa-briefcase icon"></i><hr className='icon-line' /> </p>
                  
                
              </div>
              </div>
              <div className="col-md-7 col-lg-7">
              <div className="work-para">
                <h5 id='workID' className="title-h3">
                      <span className='position-span'>{position}</span>
                  @&nbsp;{title}

                  </h5>
                  <div className="work-line-group">
                  {
                        workPara.map(work => (
                            <p className='work-para-content'><i class="fas fa-angle-right"></i> {work}</p>
                        ))
                    }
                   
                  </div>
                   
                </div>
             
              </div>
          </div>
      </div>
  </div>;
}

export default Work;
