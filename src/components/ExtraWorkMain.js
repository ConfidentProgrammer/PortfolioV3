import React from "react";
import ExtraWork from "./ExtraWork";
import "./css/extraWorkMain.scss";
function ExtraWorkMain() {
  return (
    <div>
        <div className="extra-work-title-container">
            <h2 className='h2-title-extra-work'> <span class='diff-text'>04.</span> Have a Glance at other projects</h2>
            </div>
        <div className="container custom-container">
            <div className="row">
                
                <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/Recipe-APP'}
        title={"Fetch your favourite recipe with Edaman API"}
        body={
          "This project is built in react and used Edaman API for fetching the recipes from the database."
        }
        tech={["React Js", "HTML", "CSS", "Edaman API"]}
      />
       </div>
      <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/ConfidentProgrammer.github.io'}
        title={"PortfolioV2"}
        body={
          "This is the second attempt to make a portfolio after making a cheap powerpoint presentation portfolioV1."
        }
        tech={[ "HTML", "CSS", "GSAP", "Javascript"]}
      />
       </div>
      <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/zat.am'}
        title={"Learn counting in Sanskrita (Zat.am)"}
        body={
          "This project is built focus on edutainment way to teach counting to the students in Sanskrita Language."
        }
        tech={["Javascript", "HTML", "CSS", "Firebase"]}
      />
      
     </div>
     <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/WeatherAPP'}
        title={"Know the weather at your location"}
        body={
          "This is the Weather website that, uses the OpenWeather API to fetch weather of the current location. This project also has dynamic background feature."
        }
        tech={["Javascript", "HTML", "CSS", "OpenWeather API"]}
      />
      
     </div>
     <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/Pomodoro'}
        title={"Improve your productivity using this Clock"}
        body={
          "This project implements the pomodoro technique that helps to study and take break at regular intervals."
        }
        tech={["Javascript", "HTML", "CSS"]}
      />
      
     </div>
     <div className="col-lg-4 col-md-6 custom-col">
                <ExtraWork link={'https://github.com/ConfidentProgrammer/GodsEye'}
        title={"DON'T SPY!!"}
        body={
          "This project is built upon springboot framework of java that detects accurate location of the user who use this, and spot on google maps."
        }
        tech={["Javascript", "HTML", "CSS", "springboot", "Java", "MySQL",]}
      />
      
     </div>
    
               
                
            </div>
        </div>
      
    </div>
  );
}

export default ExtraWorkMain;
