import React from "react";
import "./css/randomShape.scss";
function RandomShape({ T, L }) {
  const color = [
    "#F9F871",
    "#6B4AB1",
    "#00BCED",
    "#00BA9B",
    "#5FF3D1",
    "#FAEAFF",
    "#CCEF8F",
  ];
  //<i class="far fa-square"></i>
  let shape = ["circle", "square"];
  let randShape = Math.floor(Math.random() * 2);
  const colorRandom = Math.floor(Math.random() * 6);
  console.log(colorRandom);
  return (
    <div>
      <i
        class={"far fa-" + shape[randShape] + " square"}
        style={{
          top: T,
          left: L,
          color: color[colorRandom],
        }}
      ></i>
    </div>
  );
}

export default RandomShape;
