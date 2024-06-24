import React from "react";
import { useParams } from "react-router-dom";
import magzdata from "../magzdata.json";
import Headingtitle from "../components/Headingtitle";

function Magzineview() {
  const { magzine_id } = useParams();
  const magzine = magzdata.Magazinedata.find((m) => m.id === magzine_id); // Corrected key access

  if (!magzine) {
    return (
      <center>
        <h2>Magazine Not Found !!!</h2>
      </center>
    );
  }

  return (
    <>
      <Headingtitle
        heading={magzine.magazinename}
        image={require("../images/drive.jpg")}
      />
      <br />
      <br />
      <div
        className="container"
        style={{
          // backgroundColor: "#8DCECE", // Corrected background color
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              height="300px"
              width="400px"
              style={{
                WebkitBackdropFilter: "blur(2px) saturate(10%)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: "10px",
                border: "1px solid rgba(209, 213, 219, 0.3)",
              }}
              src={require(`../images/${magzine.magazine_img}`)}
              alt={magzine.magazinename}
              className="img-fluid radius-image img-shadow"
            />
          </div>
          <div style={{ marginTop: "3px" }} className="col-md-6">
            <p
              style={{
                padding: "20px",
                borderRadius: "10px",
                borderColor: "black",
                backgroundColor: "black",
                textAlign: "left",
                color: "white",
                opacity: "1",
              }}
            >
              <b> {magzine.magazinename} </b> : {magzine.magazine_info}
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Magzineview;
