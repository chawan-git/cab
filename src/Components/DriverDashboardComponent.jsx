import React, { Component } from "react";
import { Link } from "react-router-dom";

export class DriverDashboardComponent extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Welcome to the Driver dashboard</h2>
            <Link to="/admin/viewDrivers" className="btn btn-primary fw-bold">
              View all Drivers
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverDashboardComponent;
