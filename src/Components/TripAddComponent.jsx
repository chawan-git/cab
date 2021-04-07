import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import TripHeaderComponent from "./TripHeaderComponent";

export class TripAddComponent extends Component {
  render() {
    return (
      <div>
        <TripHeaderComponent />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="card ">
            <div className="card-body">
              <h2 className="card-title">Confirm the Booking Details :</h2>
              <br />
              <h3>Pick Up Location :</h3>
              <h3>Drop Location :</h3>

              <label>
                <h3>Choose a Cab Type</h3>
              </label>

              <select
                type="text"
                name="cab"
                id="cab"
                className="form-control p-2"
              >
                <option value="" hidden>
                  List of Cabs Available
                </option>
                <option value="volvo">Sedan</option>
                <option value="saab">SUV</option>
              </select>

              <br />

              <Link to="/addTrip" className="btn btn-primary fw-bold">
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default TripAddComponent;
