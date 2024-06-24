import React from "react";
import { useParams } from "react-router-dom";
import cardata from "../cardata.json";
import Headingtitle from "../components/Headingtitle";
import Error from "../components/Error";

function Newcarview() {
  const { carid } = useParams();
  const car = cardata.cardata.find((c) => c.id === carid);

  if (!car) {
    return (
      <center>
        <Error />
      </center>
    );
  }

  return (
    <>
      <Headingtitle
        heading={car.carname}
        image={require("../images/drive.jpg")}
      />
      <br />
      <br />
      <br />
      <br />

      <div
        className="container"
        style={{
          //   backgroundImage: `url(${descimg})`,
          // backgroundColor: "red",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              height="500px"
              width="600px"
              style={{
                //   backdropFilter: "blur(100px) saturate(50%)",
                WebkitBackdropFilter: "blur(2px) saturate(10%)",
                backgroundColor: "rgba(0,0, 0, 0)",
                borderRadius: "10px",
                border: "0px solid rgba(209, 213, 219, 0.3)",
              }}
              src={require(`../images/${car.carimg}`)}
              alt={car.carname}
              className="img-fluid radius-image img-shadow"
            />
          </div>
          <div className="col-md-6" style={{ marginTop: "3px" }}>
            <p
              className=""
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
              <b>{car.carname}</b> : {car.info}
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Newcarview;
