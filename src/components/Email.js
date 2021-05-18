import React from "react";
import './css/email.scss';
function Email({right, bottom, content, url}) { // -90, b - 110
    
  return <div>
     
      <div className="email-div" style={{
          right: right + 'px', 
          bottom: bottom + 'px'
      }}>
          
          <a href={url+content}>
          <span className='email-span' style={{

          }}>{content}</span></a>
          <hr className='line-email' style={{

          }}/>
      </div>
  </div>;
}

export default Email;
