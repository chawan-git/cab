import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import history from "../history";
import { fetchTrips } from "../redux/trip/tripActions";
import FooterComponent from "./FooterComponent";
import TripAddComponent from "./TripAddComponent";
import TripHeaderComponent from "./TripHeaderComponent";

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
