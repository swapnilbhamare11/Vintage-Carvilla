import React from "react";
import magz from "../magzdata.json";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Magazinedata() {
  return (
    <div className="container">
      <div className="row">
        {magz.Magazinedata &&
          Array.isArray(magz.Magazinedata) &&
          magz.Magazinedata.map((mdata) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={mdata.id}>
                <MDBCard className="h-100">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-zoom"
                  >
                    <MDBCardImage
                      src={require(`../images/${mdata.magazine_img}`)}
                      alt={mdata.magazinename}
                      className="img-fluid"
                      style={{ height: "300px", width: "300px" }}
                    />
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <b>{mdata.magazinename}</b>
                    </MDBCardTitle>
                    <Link to={`/magzine/${mdata.id}`}>
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

export default Magazinedata;
