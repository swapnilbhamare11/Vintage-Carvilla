import React from "react";
import Home from "../icons/map.png";
import Email from "../icons/mail.png";
import Phone from "../icons/cl.png";
import Yt from "../icons/youtube.png";

function Addressinfo() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <div className="section-heading text-center mb-5">
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src={Home}
                  alt="Map icon for location"
                  height="100"
                  width="120"
                  className="img-fluid m-auto pt-4"
                />
                <div className="card-body">
                  <h4 className="teacher mb-0">Location</h4>
                  <br />
                  <b style={{ textAlign: "justify" }}>
                    Dossa MansionFort, Mumbai, 400001
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src={Email}
                  alt="Envelope icon for email"
                  height="100"
                  width="120"
                  className="img-fluid m-auto pt-4"
                />
                <div className="card-body">
                  <h4 className="teacher mb-0">Email</h4>
                  <br />
                  <b style={{ textAlign: "justify" }}>
                    vintagecarvilla09@gmail.com
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src={Yt}
                  alt="YouTube logo"
                  height="100"
                  width="120"
                  className="img-fluid m-auto pt-4"
                />
                <div className="card-body">
                  <h4 className="teacher mb-0">YouTube Channel</h4>
                  <br />
                  <b style={{ textAlign: "justify" }}>Vintage Carvilla</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src={Phone}
                  alt="Phone icon for contact number"
                  height="100"
                  width="120"
                  className="img-fluid m-auto pt-4"
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Calls & Enquiry</h5>
                  <br />
                  <b style={{ textAlign: "justify" }}>
                    Call Us: +91 99292 92333
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13798.353596561881!2d72.834961!3d18.935436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1db7108b029%3A0xfb41b49ba660aaa3!2sVintage%20and%20Classic%20Car%20Club%20of%20India!5e1!3m2!1sen!2sin!4v1717071371780!5m2!1sen!2sin"
              width="1300"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vintage and Classic Car Club of India Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addressinfo;
