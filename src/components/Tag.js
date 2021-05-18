import React from "react";
import "./css/tag.scss";
function Tag({name}) {
  return <div>
      <span className="tag">{'<' + name + '>'}</span>
  </div>;
}

export default Tag;
