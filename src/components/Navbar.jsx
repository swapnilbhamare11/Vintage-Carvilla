import React from "react";
import home from "../icons/house1.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                <li className="nav-item mx-3">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    Home{" "}
                    <img height="25px" width="25px" alt="HomePage" src={home} />
                  </NavLink>
                </li>
                <li className="nav-item mx-4">
                  <NavLink to="/carvilla" className="nav-link">
                    CarVilla
                  </NavLink>
                </li>
                <li className="nav-item mx-4">
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item mx-4">
                  <NavLink to="/magazine" className="nav-link">
                    Magazine
                  </NavLink>
                </li>
                <li className="nav-item mx-4">
                  <NavLink to="/about_us" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-4">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
