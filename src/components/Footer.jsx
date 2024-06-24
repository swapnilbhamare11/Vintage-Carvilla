import React from "react";
import fb from "../icons/facebook.png";
import insta from "../icons/instagram.png";
import wapp from "../icons/whatsapp.png";

function Footer() {
  return (
    <footer className="text-white">
      <div className="container-fluid">
        <div
          className="row align-items-center py-3"
          style={{
            background: "linear-gradient(75deg, #65258a 10%, #e80566)",
            fontWeight: "bolder",
          }}
        >
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-start">
              🟢 Copyrights © 2024. All rights reserved by Swapnil V.S Bhamare
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item me-3">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-white">
                  <img src={fb} alt="Facebook" height="40px" width="40px" />
                </a>
              </li>
              <li className="list-inline-item me-3">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-white">
                  <img src={insta} alt="Instagram" height="40px" width="40px" />
                </a>
              </li>
              <li className="list-inline-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-white">
                  <img src={wapp} alt="WhatsApp" height="40px" width="40px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
