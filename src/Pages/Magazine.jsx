import React from "react";
import Headingtitle from "../components/Headingtitle";
import Magazinedata from "../components/Magazinedata";

function Magazine() {
  return (
    <>
      <Headingtitle
        heading="Magazines"
        description="Award-winning online automotive magazine with over 400,000 monthly readers.In the automotive industry, the evolution of consumer preferences drove significant changes, leading to a shift from traditional choices towards more diversified options.Our magazine offers a mix of features on classic cars from various eras, restoration advice, buying guides, and coverage of classic car auctions and events."
        image={require("../images/BD.jpg")}
      />{" "}
      <br />
      <Magazinedata />
    </>
  );
}

export default Magazine;
