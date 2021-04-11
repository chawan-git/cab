import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import history from "../history";
import { fetchTrips } from "../redux/trip/tripActions";
import CustomerHeaderComponent from "./CustomerHeaderComponent";
import CustomerProfileEditComponent from "./CustomerProfileEditComponent";
import CustomerViewTripsComponent from "./CustomerViewTripsComponent";
import FooterComponent from "./FooterComponent";
import TripAddComponent from "./TripAddComponent";
import TripRequestedComponent from "./TripRequestedComponent";

/* creating a component for customer home */

class TripHomeComponent extends Component {

  /* getting the state data from local storage at the time of loading the component and tracking changes in  storage object using event listener */
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  /* validating whether customer is logged in or not, using local storage and redirecting to unauthorized page */
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };

  // used to render the following code which incluse HTML, CSS and bootsatrp for UI
  render() {
    return (
      <>
        <CustomerHeaderComponent />
        {/* /customer/home */}
        <Route
          path="/customer/trip/:username"
          component={TripRequestedComponent}
        />
        <Route path="/customer/home" component={TripAddComponent} />
        <Route
          path="/customer/profile"
          component={CustomerProfileEditComponent}
        />
        <Route
          path="/customer/viewTrips"
          component={CustomerViewTripsComponent}
        />
        {/* <Route path="/customer/tripRequested" component={TripRequestedComponent} /> */}
        <br />
        <FooterComponent />
      </>
    );
  }
}

// arrow function used to map tripBooking state in trip reducer to tirpData
const mapStateToProps = (state) => {
  return {
    tripData: state.trip,
  };
};

// used to call the methods of tripActions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
  };
};

// connecting mapStateToProps and mapDispatchToProps to TripHomeComponent
export default connect(mapStateToProps, mapDispatchToProps)(TripHomeComponent);
