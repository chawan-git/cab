import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import history from "../history";
import { fetchTrips } from "../redux/trip/tripActions";
import CustomerProfileEditComponent from "./CustomerProfileEditComponent";
import CustomerViewTripsComponent from "./CustomerViewTripsComponent";
import FooterComponent from "./FooterComponent";
import TripAddComponent from "./TripAddComponent";
import TripHeaderComponent from "./TripHeaderComponent";
import TripRequestedComponent from "./TripRequestedComponent";

class TripHomeComponent extends Component {
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };

  render() {
    return (
      <>
        <TripHeaderComponent />

        {/* /customer/home */}
        <Route path="/customer/home" component={TripAddComponent} />
        <Route path="/customer/profile" component={CustomerProfileEditComponent} />
        <Route path="/customer/viewTrips" component={CustomerViewTripsComponent} />
        <Route path="/customer/tripRequested" component={TripRequestedComponent} />

        <br />
        <FooterComponent />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tripData: state.trip,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripHomeComponent);
