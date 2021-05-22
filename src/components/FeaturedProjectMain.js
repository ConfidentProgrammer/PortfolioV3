import React from "react";
import FeaturedProject from "./FeaturedProject";
import ForumEdited from "../Images/ForumEdited.png";
import ReviewEdited from "../Images/ReviewEdited.png";
import AppointEdited from "../Images/AppointEdited.png";
import RandomShape from './RandomShape';
function FeaturedProjectMain() {
  
    const descReview = "Restaurant review system in which we can give reviews to resturant in the database. I fully focused on keeping the UI/UX efficient and good looking by applying the rules of basic colour theory and typography.";
    const reviewTech = ['Java', 'Springboot', 'Javascript'];
    const urlGR = 'https://github.com/ConfidentProgrammer/Restaurant-Review-System';
    const urlLR = 'https://drive.google.com/file/d/1tFmWZlN5htRN6vL8lz1CmMJcHJfnnJHN/view?usp=sharing';

    const descAppoint = "This is the fully functional pet appointment system in which we can book, modify, delete and add our the appointment, all the data is coming from the JSON file";
    const appointTech = ['react.js', 'HTML5', 'Javascript', 'CSS3'];
    const urlGA = 'https://github.com/ConfidentProgrammer/Pet-Appointment-System';
    const urlLA = 'https://drive.google.com/file/d/1QBtYChyl0hfwS9tVzqb7YE-ShhjX0yRP/view?usp=sharing';

    const descForum = "This is the fully functionalized employee forum, similar to reddit but simpler that it. Employee can write, edit threads and also comments on other people threads. Employee needs to login or register in order to view all the threads"
    const forumTech = ['Java', 'Springboot', 'Javascript', 'UI/UX'];
    const urlGF = 'https://github.com/ConfidentProgrammer/Employee-Forum';
    const urlLF = 'https://drive.google.com/file/d/1B4KATPlrifh1di0iJErCL4Q_jhMuB5_a/view?usp=sharing'

  return (
    <div>
     
      <FeaturedProject image={ReviewEdited} desc={descReview} tech={reviewTech} name={"Restaurant Review System"} urlL={urlGR} urlG={urlLR} />
      <RandomShape L={700} T={2500}/>
      <FeaturedProject image={ForumEdited} desc={descForum} tech={forumTech} name={"Employee Forum"} urlL={urlGF} urlG={urlLF} />
      <FeaturedProject image={AppointEdited} desc={descAppoint} tech={appointTech} name={"Pet Appointment System"} urlL={urlGA} urlG={urlLA}  />


    </div>
  );
}

export default FeaturedProjectMain;
