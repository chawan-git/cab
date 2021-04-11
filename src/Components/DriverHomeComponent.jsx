/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchDrivers } from "../redux";
//importing useful components
import DriverDashboardComponent from "./DriverDashboardComponent";
import DriverHeaderComponent from "./DriverHeaderComponent";
import DriverProfileEditComponent from "./DriverProfileEditComponent";
import TripViewComponent from "./TripViewComponent";
import Footer from "./FooterComponent";
import DriverViewTripsComponent from "./DriverViewTripsComponent";
import history from "../history";

class DriverHomeComponent extends Component {
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs  
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  //getData() method retrieves drag data (as a DOMString ) for the specified type.
  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //Rendering Home Elements
  render() {
    return (
      <>
        <DriverHeaderComponent />
        {/*  Route is the conditionally shown component that renders some UI when its path matches the current URL
             It works as HTML Anchor tag */}
        {/* Routing Driver Componets */}
        <Route path="/driver/home" component={DriverDashboardComponent} /> 
        <Route path="/driver/viewTrips" component={TripViewComponent} />
        <Route path="/driver/profile" component={DriverProfileEditComponent} />
        <Route path="/driver/tripHistory" component={DriverViewTripsComponent} />

        <br />

        <Footer />
      </>
    );
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    driverData: state.driver,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event 
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverHomeComponent);
