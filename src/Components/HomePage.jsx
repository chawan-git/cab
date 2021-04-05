import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export class HomePage extends Component {
  render() {
    return (
      <div id="homepage">
        <HeaderComponent />

        <div className="container">
          <br />
          <br />
          <div className="row mt-4 ms-4">
            <div className="col-md-6 border border-light ms-4 bg-white">
              <div className="text-center mt-4">
                <DirectionsCarIcon fontSize="large" />
                <h5>Ride</h5>
              </div>

              <hr />
              <div className=" ms-4 me-4">
                <div className="mt-4">
                  <h1 className="display-5 fw-bold">Request a ride now</h1>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PersonPinCircleOutlinedIcon />
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control p-2"
                    placeholder="Enter pickup location"
                  />
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className=" input-group">
                  <span className="input-group-text">
                    <PinDropOutlinedIcon />
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control p-2"
                    placeholder="Enter destination"
                  />
                </div>
              </div>
              <br />
              <br />

              <div className="ms-4">
                <button type="submit" className="btn btn-dark fw-bold p-2">
                  Request now
                </button>
              </div>
              <br />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
