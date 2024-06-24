import React from "react";
import org from "../images/orgBlk.jpg";
import nworg from "../images/Nwor.jpg";
import greenift from "../images/green2.jpg";
import blck from "../images/blck.jpg";
import bl from "../images/bluet.jpg";

function Landingpage() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="1500" // Adjust this value to change the speed
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={org}
              className="w-100 img-fluid"
              height="645px"
              width="auto"
              alt="FiatOrng."
            />
          </div>
          <div className="carousel-item">
            <img
              src={nworg}
              className="w-100 img-fluid"
              height="645px"
              width="auto"
              alt="FiatOrng"
            />
          </div>
          <div className="carousel-item">
            <img
              src={greenift}
              className="w-100 img-fluid"
              height="645px"
              width="auto"
              alt="Fiatgreen"
            />
          </div>
          <div className="carousel-item">
            <img
              src={bl}
              className="w-100 img-fluid"
              height="645px"
              width="auto"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={blck}
              className="w-100 img-fluid"
              height="645px"
              width="auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
