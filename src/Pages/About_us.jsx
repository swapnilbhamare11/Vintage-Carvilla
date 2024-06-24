import React from "react";
import Headingtitle from "../components/Headingtitle";
import Titlename from "../components/Titlename";
import Ourteam from "../components/Ourteam";

function Aboutus() {
  return (
    <>
      <Headingtitle
        heading="About Us"
        description="Vintage Car Collector was born out of passion for classic and exotic cars and a desire to share this sentiment with the world. Our goal is to preserve the beauty and history of classic and exotic automobiles. The VCC team of highly trained, professional and enthusiastic car gurus work daily to fulfill our purpose. The deep trade expertise and knowledge coupled with respect for classic and exotic cars makes Vintage Car Collector your ultimate destination for all classic and exotic car transactions. We are here to provide easy, hassle free and quality service to sellers and buyers alike."
        image={require("../images/Gaadi.jpg")}
      />
      <Titlename Titlename="💼 Our Team 💼" />
      <Ourteam />
    </>
  );
}

export default Aboutus;
