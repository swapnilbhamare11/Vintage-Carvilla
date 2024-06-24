import React from "react";
import sachin from "../images/ST.jpg";
import rohit from "../images/RS.jpg";
import virat from "../images/VK.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function Ourteam() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <MDBCard className="h-100">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-zoom"
            >
              <MDBCardImage
                src={sachin}
                alt=""
                className="img-fluid"
                style={{ height: "300px", width: "300px" }}
              />
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                <b>Sachin Bhosale</b>
              </MDBCardTitle>
              <MDBCardTitle className="text-center">Founder</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <MDBCard className="h-100">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-zoom"
            >
              <MDBCardImage
                src={rohit}
                alt=""
                className="img-fluid"
                style={{ height: "300px", width: "300px" }}
              />
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                <b>Rohit Shinde</b>
              </MDBCardTitle>
              <MDBCardTitle className="text-center">
                Co-Founder & Chief Secretary
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <MDBCard className="h-100">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-zoom"
            >
              <MDBCardImage
                src={virat}
                alt=""
                className="img-fluid"
                style={{ height: "300px", width: "300px" }}
              />
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                <b>Virat Patil</b>
              </MDBCardTitle>
              <MDBCardTitle className="text-center">
                Co-Founder & Finance Manager
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
