import React from "react";
import Headingtitle from "../components/Headingtitle";
import Servicesinfo from "../components/Servicesinfo";

function Services() {
  return (
    <>
      <Headingtitle
        heading="Our Services"
        description="Classic cars differ from modern-day vehicles not only in looks, age, and originality but also in repairs and maintenance requirements. The need for special treatment is often due to the age and condition of individual car parts and is essential for making your vehicle look its absolute best. At Vintage Car Collector, we offer professional upholstery services  to bring back beauty to your beloved classic."
        image={require("../images/drive.jpg")}
      />
      <Servicesinfo />
    </>
  );
}

export default Services;
