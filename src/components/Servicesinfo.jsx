import React from "react";
import repair from "../images/repair.jpg";
import card from "../images/card.jpg";
import insp from "../images/inspection.jpg";
import ins from "../images/insurance.jpg";
import trans from "../images/trans.jpg";
import ctlg from "../images/catalog.jpg";

function Servicesinfo() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src={repair}
                  height="200px"
                  width="300px"
                  alt="Restoration Vehicle"
                />
                <br />
                <br />
                <h5>
                  Restoration Shops,
                  <br />
                  Vehicle Parts & Products
                </h5>
                <br />

                <b style={{ textAlign: "justify" }}>
                  Properly restoring a classic vehicle takes patience,
                  dedication, and skill. Professionally restored cars and trucks
                  look better, run better, last longer, and command higher
                  prices. These specialty restoration companies can help you
                  with even your most challenging restoration needs.By
                  leveraging these resources, you can find the right shops and
                  parts to successfully complete your vehicle restoration or
                  upgrade project.
                </b>
                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src={card}
                  height="200px"
                  width="300px"
                  alt="Financing Resources"
                />{" "}
                <br />
                <br />
                <h5>Financing Resources</h5>
                <b style={{ textAlign: "justify" }}>
                  {" "}
                  <br />
                  <br />
                  Financing a classic car or truck can differ greatly from
                  financing a new vehicle, especially if the vehicle is rare or
                  heavily customized.They understand that collector vehicles are
                  not the same as daily drivers; they offer flexible loan terms
                  as long as 10 years or more, low fixed rates, and many of them
                  can pre-qualify you for auctions.When undertaking a vehicle
                  restoration project, financing can be a significant concern.
                  Various resources are available to help manage the costs
                  associated with restoration, parts, and labor.
                </b>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src={insp}
                  height="200px"
                  width="300px"
                  alt="Inspections & Appraisals"
                />{" "}
                <br />
                <br />
                <h5>Inspections & Appraisals</h5>
                <b style={{ textAlign: "justify" }}>
                  {" "}
                  <br />
                  <br />
                  You found the perfect classic! At least you think you did. How
                  can you be sure when the car is in a different state? Or maybe
                  you know everything about your favorite model- except the
                  current market value. ClassicCars.com can help. Hire an
                  inspection service or appraiser that specializes in
                  classics!.Inspections and appraisals are crucial steps in the
                  vehicle restoration process. They help ensure the quality of
                  the work done, verify the value of the vehicle, and can be
                  essential for insurance purposes.
                </b>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img src={ins} height="200px" width="300px" alt="Insurance" />
                <br /> <br />
                <h5>Insurance</h5> <br />
                <b style={{ textAlign: "justify" }}>
                  You’ve invested your time and money finding the classic car of
                  your dreams. Now it’s time to protect your car against loss
                  from collision, theft, and other dangers. Don’t take a chance
                  with your classic car’s insurance. Protect your investment and
                  get peace of mind from a company that specializes in insuring
                  classic and collector vehicles.Insurance for a restored
                  vehicle is essential to protect your investment, whether the
                  car is a classic, muscle car.
                </b>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src={trans}
                  height="200px"
                  width="300px"
                  alt="Transport Resources"
                />{" "}
                <br />
                <br />
                <h5>Transport Resources</h5>
                <br />
                <b style={{ textAlign: "justify" }}>
                  Need to ship a classic car across the country? ClassicCars.com
                  can help. Hire a vehicle transport company that specializes in
                  the safe transportation of classic and collector
                  vehicles.Transport resources encompass a wide range of assets
                  and systems used to facilitate the movement of people and
                  goods. These resources can be broadly categorized into various
                  modes of transport, infrastructure, and auxiliary services.
                </b>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src={ctlg}
                  height="200px"
                  width="300px"
                  alt="Catalog Resources"
                />{" "}
                <br /> <br />
                <h5>Catalog Resources</h5> <br />
                <b style={{ textAlign: "justify" }}>
                  Whether you're a seasoned collector, or just starting out, if
                  you own a classic car, you're going to need parts. These
                  companies provide parts catalogs; parts available on
                  request.Catalog resources are tools, databases, and systems
                  used for organizing, managing, and accessing collections of
                  items or information. They are essential in various fields
                  such as libraries, retail, e-commerce, archives, and inventory
                  management.
                </b>
                <br />
              </div>
            </div>
            <center></center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicesinfo;
