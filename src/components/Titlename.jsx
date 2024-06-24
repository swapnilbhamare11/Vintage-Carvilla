import React from "react";
import tm from "../icons/tm.png";

function Titlename(props) {
  return (
    <div>
      <br />
      <image src={tm}></image>
      <h1 className="cookie-regular justify-content-center">
        {props.Titlename}
      </h1>
      <br />
    </div>
  );
}

export default Titlename;
