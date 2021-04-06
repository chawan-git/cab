import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchDrivers } from "../redux";
import DriverAddComponent from "./DriverAddComponent"
import DriverEditComponent from "./DriverEditComponent";
import DriverViewComponent from "./DriverViewComponent"
import DriverDashboardComponent from "./DriverDashboardComponent"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"


class DriverHomeComponent extends Component {
  render() {
    return (
      <>
        
        <Header/>

        <Route path="/driver/home" component={DriverDashboardComponent} />
        <Route path="/driver/viewDrivers" component={DriverViewComponent} />
        <Route path="/driver/addDriver" component={DriverAddComponent} />
        <Route path="/driver/editDriver/:id" component={DriverEditComponent} />
        <br />

        <Footer/>

        
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

export default connect(mapStateToProps, mapDispatchToProps)(DriverHomeComponent);
