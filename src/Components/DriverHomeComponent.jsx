import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchDrivers } from "../redux";
import DriverAddComponent from "./DriverAddComponent";
import DriverEditComponent from "./DriverEditComponent";
import DriverViewComponent from "./DriverViewComponent";
import DriverDashboardComponent from "./DriverDashboardComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class DriverHomeComponent extends Component {
  render() {
    return (
      <>
        <Header />

        <Route path="/driver/home" component={DriverDashboardComponent} />
        <Route path="/admin/viewDrivers" component={DriverViewComponent} />
        <Route path="/admin/addDriver" component={DriverAddComponent} />
        <Route path="/admin/editDriver/:id" component={DriverEditComponent} />
        <br />

        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    driverData: state.driver,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverHomeComponent);
