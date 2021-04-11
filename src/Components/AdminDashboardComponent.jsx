import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../history";

/* Author: Ashutosh Rao Chawan U */
/* Using a react class component for creating an admin dashboard to the cab application. */
export class AdminDashboardComponent extends Component {
  //This function runs when the component loads for the first time.
  componentDidMount() {
    //This call to the getData method makes sure only an admin can access this page, by checking the localStorage for an admin record.
    this.getData();
    //This line of code will listen to the change in the localStorage, if made any on any other tab on the same machine.
    window.addEventListener("storage", (e) => this.getData());
  }

  // This method is used to check the localStorage for the "Admin" record, if it's not there, we redirect the user to the unauthorized page.
  getData = () => {
    //localStorage.getItem is the method to get the record from the localStorage.
    if (localStorage.getItem("Admin")) {
    } else {
      //history.push will redirect to the url specified without refreshing the page.
      history.push("/unauthorized");
    }
  };

  //This method is used to render the below code on to the user screen
  render() {
    return (
      <div>
        {/* We have used HTML, CSS, JS & Bootstrap to design the screen */}
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

// Exporting the AdminDashboard component to be imported by other ReactJS files.
export default AdminDashboardComponent;
