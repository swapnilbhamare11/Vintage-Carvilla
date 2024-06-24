import React from "react";
import { Button } from "react-bootstrap";
import cardata from "../cardata.json";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function Carvilladata() {
  return (
    <div className="container">
      <div className="row">
        {cardata.cardata &&
          Array.isArray(cardata.cardata) &&
          cardata.cardata.map((data) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={data.id}>
                <MDBCard className="h-100">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-zoom"
                  >
                    <MDBCardImage
                      src={require(`../images/${data.carimg}`)}
                      alt={data.carname}
                      className="img-fluid"
                      style={{ height: "250px", width: "100%" }}
                    />
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <b>{data.carname}</b>
                    </MDBCardTitle>
                    <Link to={`/car/${data.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Carvilladata;
