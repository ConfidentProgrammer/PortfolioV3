import React from "react";
import { useState } from "react";
import Work from "./Work";
function WorksMain() {
  const work = [
    {
      name: "samskrita Bharati",
      line1: "",
      line2: "",
      line3: "",
      line4: "",
    },
    {
      name: "Petro-Canada",
      line1: "",
      line2: "",
    },
  ];
  const SamskritaBharati = [
    "Collaborated with peers to develop code for students to enhance their learning in Samskrita language, as well as developed, troubleshoot, enhanced, and maintained the written open-source code.",
    "Learnt Agile and used Agile method like SCRUM for code sprinting and to complete code before deadline.",
    "Built the product using the NoSQL database MongoDB like database called Firebase.",
  ];
  const PetroCanada = [
    "Adapted to evolving team dynamics which supported the fostering of a collaborative team atmosphere.",
    "Demonstrated effective time management skills which resulted in the successful completion of assigned tasks.",
  ];
  const chetan = [
    "Provided desk side technical support to the employees for touchscreens, smartboards, networks, tablets, and servers.",
    "Gathered advanced knowledge of networking concepts like LAN, WAN, PAN.",
    "Assisted with IT teams with project management and network security.",
  ];
  const [visibleWork, setVisibleWork] = useState([]);

  return (
    <div>
      <Work
        position={"Open-Source-Developer "}
        workPara={SamskritaBharati}
        title={"Samskrita Bharati"}
      />

      <Work
        position={"IT support Advisor "}
        workPara={chetan}
        title={"Chetan Engravers"}
      />
    </div>
  );
}

export default WorksMain;
