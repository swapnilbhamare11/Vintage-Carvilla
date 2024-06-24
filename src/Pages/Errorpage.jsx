import React from "react";
import Error from "../components/Error";
import "../index.css";
import Headingtitle from "../components/Headingtitle";

function Errorpage() {
  return (
    <>
      <Headingtitle
        heading="Page Error 404 !!!"
        image={require("../images/BD.jpg")}
      />
      <Error />
    </>
  );
}

export default Errorpage;
