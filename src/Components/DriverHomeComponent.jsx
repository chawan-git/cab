import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchDrivers } from "../redux";
import DriverDashboardComponent from "./DriverDashboardComponent";
import DriverHeaderComponent from "./DriverHeaderComponent";
import DriverProfileEditComponent from "./DriverProfileEditComponent";
import TripViewComponent from "./TripViewComponent";
import Footer from "./FooterComponent";
import DriverViewTripsComponent from "./DriverViewTripsComponent";
import history from "../history";

class DriverHomeComponent extends Component {
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };
  render() {
    return (
      <>
        <DriverHeaderComponent />

        <Route path="/driver/home" component={DriverDashboardComponent} />
        <Route path="/driver/viewTrips" component={TripViewComponent} />
        <Route path="/driver/profile" component={DriverProfileEditComponent} />
        <Route
          path="/driver/tripHistory"
          component={DriverViewTripsComponent}
        />

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
