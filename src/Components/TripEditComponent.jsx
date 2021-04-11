import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateTrip, fetchTrip } from "../redux";

/* creating a component to view edit the trip booking details in the database */

class TripEditComponent extends Component {
  
  /* setting the initial state */

  state = {
    tripBookingId: "",
    customer: {
      username: "",
      password: "",
      address: "",
      mobileNumber: "",
      email: "",
      customerId: "",
    },
    driver: {
      username: "",
      password: "",
      address: "",
      mobileNumber: "",
      email: "",
      driverId: "",
      licenseNo: "",
      cab: {
        cabId: "",
        carType: "",
        perKmRate: "",
      },
    },
    fromLocation: "",
    toLocation: "",
    distanceInKm: "",
    fromDateTime: "",
    toDateTime: "",
    status: "",
    bill: "",
  };

  /* setting the trip state at the time of loading the component */
  async componentDidMount() {
    await this.props.fetchTrip(this.props.match.params.id);
    const { tripFetchData } = this.props;
    tripFetchData &&
      tripFetchData.trip &&
      (await this.setState({
        tripBookingId: tripFetchData.trip.tripBookingId,
        customer: tripFetchData.trip.customer,
        driver: tripFetchData.trip.driver,
        fromLocation: tripFetchData.trip.fromLocation,
        toLocation: tripFetchData.trip.toLocation,
        distanceInKm: tripFetchData.trip.distanceInKm,
        fromDateTime: tripFetchData.trip.fromDateTime,
        toDateTime: tripFetchData.trip.toDateTime,
        status: tripFetchData.trip.status,
        bill: tripFetchData.trip.bill,
      }));
      this.getData();
      window.addEventListener("storage", (e) => this.getData());
    }

    /* validating whether admin is logged in or not, using local storage and redirecting to unauthorized page */
    getData = () => {
      if (localStorage.getItem("Admin")) {
      } else {
        history.push("/unauthorized");
      }
    };

  // handling the change of the input fields in the component
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  // handling the submit button of the trip booking
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateTrip(this.state);
    if(!this.props.tripUpdateData.error.message)
    history.push("/admin/viewTrips");
  };

  // used to render the following code which incluse HTML, CSS and bootsatrp for UI
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit trip {this.props.match.params.id}</h2>
            </div>
          </div>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.tripUpdateData.error.message}</h3>
              </div>
            </div>
            <br />
            <h5 className="text-center">
              <span className="fw-bold">Customer Name </span>:{" "}
              {this.state.customer.username} @{" "}
              {this.state.customer.mobileNumber}
            </h5>
            <br />
            <h5 className="text-center">
              <span className="fw-bold">Driver name </span> :{" "}
              {this.state.driver.username} @ {this.state.driver.mobileNumber}
            </h5>
            <br />
            <h5 className="text-center">
              <span className="fw-bold">License Number </span> :{" "}
              {this.state.driver.licenseNo}
            </h5>
            <br />
            <h5 className="text-center">
              <span className="fw-bold">Car Type </span> :{" "}
              {this.state.driver.cab.carType}
            </h5>
            <br />

            <hr />
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="fromLocation">
                  <h6>
                    Enter fromLocation (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="fromLocation"
                  required
                  value={this.state.fromLocation}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="From Location"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="toLocation">
                  <h6>
                    Enter toLocation (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="toLocation"
                  required
                  value={this.state.toLocation}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="To Location"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="fromDateTime">
                  <h6>
                    Enter fromDateTime (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  //type="text"
                  name="fromDateTime"
                  required
                  value={this.state.fromDateTime}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="fromDateTime"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="toDateTime">
                  <h6>
                    Enter toDateTime (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  //type="text"
                  name="toDateTime"
                  required
                  value={this.state.toDateTime}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="toDateTime"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="distanceInKm">
                  <h6>
                    Distance in KM (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="distanceInKm"
                  required
                  value={this.state.distanceInKm}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Distance in KM"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="status">
                  <h6>
                    Trip status (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="status"
                  required
                  value={this.state.status}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="status"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="bill">
                  <h6>
                    Bill in Rupees (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="bill"
                  pattern="([1-9]+)"
                  required
                  value={this.state.bill}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="bill"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Update Trip
                </button>
              </div>
            </div>
          </form>
        </div>
        )
      </>
    );
  }
}

// arrow function used to map states in trip reducer to tripUpdateData and tripFetchData
const mapStateToProps = (state) => ({
  tripUpdateData: state.tripReducer.updateTrip,
  tripFetchData: state.tripReducer.fetchTrip,
});

// used to call the methods of tripActions
const mapDispatchToProps = { updateTrip, fetchTrip };

// connecting mapStateToProps and mapDispatchToProps to TripEditComponent
export default connect(mapStateToProps, mapDispatchToProps)(TripEditComponent);
