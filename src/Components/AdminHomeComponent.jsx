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
class AdminHomeComponent extends Component {
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  render() {
    return (
      <>
        <AdminHeaderComponent />


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
          <Route path="/admin/editCustomer/:id" component={CustomerEditComponent} />


        <br />

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
