import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchTrips2 } from "../redux";

class DriverViewTripsComponent extends Component {
  driver;
  componentDidMount() {
    this.driver = JSON.parse(localStorage.getItem("Driver"));
    console.log(this.driver.mobileNumber);
    this.props.fetchTrips2(this.driver.mobileNumber);
  }

  render() {
    const { tripData } = this.props;
    return tripData.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Trips List</h1>
          <div className=" d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-grow float-right text-success ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </>
    ) : tripData.error ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of Trips</h2>
          <div className="alert alert-danger" role="alert">
            {tripData.error.message}
          </div>
        </div>
      </>
    ) : tripData.trips.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of trips</h2>
          <div className="alert alert-danger" role="alert">
            No trips Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />
          <h2 className="text-center">List of trips</h2>
          <br />
          {tripData &&
            tripData.trips &&
            tripData.trips.map((trip) => (
              <Fragment key={trip.tripBookingId}>
                <div className="card" key={trip.tripBookingId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">TripBooking ID</span> :{" "}
                          {trip.tripBookingId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Driver </span>:{" "}
                          {trip.driver.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">Driver </span> :{" "}
                          {trip.driver.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">From Location </span> :{" "}
                          {trip.fromLocation}
                        </h5>
                        <h5>
                          <span className="fw-bold">To Location </span>:{" "}
                          {trip.toLocation}
                        </h5>
                        <h5>
                          <span className="fw-bold">Distance In KM </span> :{" "}
                          {trip.distanceInKm}
                        </h5>
                        <h5>
                          <span className="fw-bold">From Date </span> :{" "}
                          {trip.fromDateTime}
                        </h5>
                        <h5>
                          <span className="fw-bold">To Date </span> :{" "}
                          {trip.toDateTime}
                        </h5>
                        <h5>
                          <span className="fw-bold">status </span> :{" "}
                          {trip.status}
                        </h5>
                        <h5>
                          <span className="fw-bold">bill </span> : {trip.bill}
                        </h5>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>

                <br />
              </Fragment>
            ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tripData: state.driverReducer.fetchTrips,
  };
};

const mapDispatchToProps = { fetchTrips2 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverViewTripsComponent);
