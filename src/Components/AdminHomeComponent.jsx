import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import history from "../history";
import { fetchAdmins } from "../redux/admin/adminActions";
import AdminAddComponent from "./AdminAddComponent";
import AdminDashboardComponent from "./AdminDashboardComponent";
import AdminEditComponent from "./AdminEditComponent";
import AdminHeaderComponent from "./AdminHeaderComponent";
import AdminProfileEditComponent from "./AdminProfileEditComponent";
import AdminViewComponent from "./AdminViewComponent";
import CabAddComponent from "./CabAddComponent";
import CabEditComponent from "./CabEditComponent";
import CabViewComponent from "./CabViewComponent";
import CustomerEditComponent from "./CustomerEditComponent";
import CustomerViewComponent from "./CustomerViewComponent";
import DriverAddComponent from "./DriverAddComponent";
import DriverEditComponent from "./DriverEditComponent";
import DriverViewComponent from "./DriverViewComponent";
import FooterComponent from "./FooterComponent";
import TripEditComponent from "./TripEditComponent";
import TripViewComponent from "./TripViewComponent";

// Author: Ashutosh Rao Chawan U
// This component will be used to render the sub pages of the admin module.
class AdminHomeComponent extends Component {
  // This method is called when the components loads for the first time.
  componentDidMount() {
    // This method call is made to check if the admin has logged in or not.
    this.getData();

    // This EventListener listens to the change in the localStorage and call the getData method again to check if the admin has logged in or not.
    window.addEventListener("storage", (e) => this.getData());
  }

  // This is the method that, fetches the admin data from the localStorage and if it is not there, it redirects to the unauthorized page.
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };

  // This render method is used to display the HTML, CSS & Bootstrap page to the user.
  render() {
    return (
      <>
        {/* Adding the AdminHeaderComponent */}
        <AdminHeaderComponent />

        {/* The following are the route paths for admin module. */}
        <Route path="/admin/home" component={AdminDashboardComponent} />
        <Route path="/admin/viewAdmins" component={AdminViewComponent} />
        <Route path="/admin/addAdmin" component={AdminAddComponent} />
        <Route path="/admin/editAdmin/:id" component={AdminEditComponent} />
        <Route path="/admin/addCabType" component={CabAddComponent} />
        <Route path="/admin/viewCabTypes" component={CabViewComponent} />
        <Route path="/admin/editCabType/:id" component={CabEditComponent} />
        <Route path="/admin/addDriver" component={DriverAddComponent} />
        <Route path="/admin/viewDrivers" component={DriverViewComponent} />
        <Route path="/admin/editDriver/:id" component={DriverEditComponent} />
        <Route path="/admin/profile" component={AdminProfileEditComponent} />
        <Route path="/admin/viewTrips" component={TripViewComponent} />
        <Route path="/admin/editTrip/:id" component={TripEditComponent} />
        <Route path="/admin/viewCustomers" component={CustomerViewComponent} />
        <Route
          path="/admin/editCustomer/:id"
          component={CustomerEditComponent}
        />

        <br />

{/* Adding the FooterComponent */}
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminData: state.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmins: () => dispatch(fetchAdmins()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeComponent);
