import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTrip, fetchTrip } from "../redux";

class TripEditComponent extends Component {
  // state = {
  //   tripBookingId: "",
  //   customer: {
  //     username: "customer",
  //     password: "customer@123",
  //     address: "bengaluru",
  //     mobileNumber: "9035017233",
  //     email: "customer@gmail.com",
  //     customerId: 1,
  //   },
  //   driver: {
  //     username: "driver",
  //     password: "driver@123",
  //     address: "Bengaluru",
  //     mobileNumber: "9035017234",
  //     email: "driver@rao.life",
  //     driverId: 1,
  //     licenseNo: "KA05EP2489",
  //     cab: {
  //       cabId: 1,
  //       carType: "SUV",
  //       perKmRate: 7,
  //     },
  //   },
  //   fromLocation: "",
  //   toLocation: "",
  //   distanceInKm: "",
  //   fromDateTime: "",
  //   toDateTime: "",
  //   status: "",
  //   bill: "",
  // };

  state = {
    tripBookingId: "",
    customer: {
      username: "",
      password: "",
      address: "",
      mobileNumber: "",
      email: "",
      customerId: '',
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



  async componentDidMount() {
    await this.props.fetchTrip(this.props.match.params.id);
    const { tripFetchData } = this.props;
    tripFetchData &&
      tripFetchData.trip &&
      this.setState({
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
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateTrip(this.state);
  };

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
            <h5 className = "text-center">
                <span className="fw-bold">Customer Name </span>:{" "}
                      {this.state.customer.username}
            </h5>
            <br/>
            <h5 className = "text-center"> 
                <span className="fw-bold">Driver name </span> :{" "}
                      {this.state.driver.username}
            </h5>
            <br/>
            <hr/>
            <br/>
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
const mapStateToProps = (state) => ({
  tripUpdateData: state.tripReducer.updateTrip,
  tripFetchData: state.tripReducer.fetchTrip,
});
const mapDispatchToProps = { updateTrip, fetchTrip };

export default connect(mapStateToProps, mapDispatchToProps)(TripEditComponent);
