import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AdminDashboardComponent extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Welcome to the admin dashboard</h2>
            <Link to="/admin/viewAdmins" className="btn btn-primary fw-bold">
              View all admins
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboardComponent;
