import React from "react";
import "./titleblock.css";

function Titleblock(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Titleblock;
