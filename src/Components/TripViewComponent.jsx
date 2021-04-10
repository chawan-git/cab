import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTrip, fetchTrips } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class TripViewComponent extends Component {
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;
    if (target.value === "")
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips,
      });
    else if (option === "username") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.customer.username.includes(target.value)
        ),
      });
    } else if (option === "username") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.driver.username.includes(target.value)
        ),
      });
    } else if (option === "fromLocation") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.fromLocation.includes(target.value)
        ),
      });
    } else if (option === "toLocation") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.toLocation.includes(target.value)
        ),
      });
    } else if (option === "fromDateTime") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.fromDateTime.includes(target.value)
        ),
      });
    } else if (option === "toDateTime") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.toDateTime.includes(target.value)
        ),
      });
    } else if (option === "status") {
      this.setState({
        ...this.state,
        tripData: this.props.tripData.trips.filter((x) =>
          x.status.includes(target.value)
        ),
      });
    } else {
      this.setState({
        ...this.state,
      });
    }
  };

  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  state = {
    tripData: [],
    filterOption: "",
  };

  async componentDidMount() {
    await this.props.fetchTrips();
    await this.setState({
      ...this.setState,
      tripData: this.props.tripData.trips,
    });
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  async deleteTrip(tripBookingId, e) {
    e.preventDefault();
    await this.props.deleteTrip(tripBookingId);
    await this.setState({
      ...this.state,
      tripData: this.props.tripData.trips.filter(
        (trip) => trip.tripBookingId !== tripBookingId
      ),
    });
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
          <form>
            <div className="row">
              <div className="col-md-3">
                <select
                  name=""
                  id="select"
                  className="form-control"
                  onChange={this.handleSelect}
                >
                  <option value="select">Search based on ...</option>
                  <option value="username">Customer Name</option>
                  <option value="username">Driver Name</option>
                  <option value="status">Trip Status</option>
                  <option value="fromLocation">From Location</option>
                  <option value="toLocation">To Location</option>
                  <option value="fromDateTime">From Date</option>
                  <option value="toDateTime">To Date</option>
                </select>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={this.handleSearch}
                  aria-label="Search"
                />
              </div>
            </div>
          </form>
          <br />
          {this.state &&
            this.state.tripData &&
            this.state.tripData.map((trip) => (
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
                          <span className="fw-bold">Customer </span>:{" "}
                          {trip.customer.username}
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
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link to={"/admin/editTrip/" + trip.tripBookingId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>

                        <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) =>
                            this.deleteTrip(trip.tripBookingId, e)
                          }
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete trip</h5>
                        </button>
                      </div>
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
    tripData: state.tripReducer.viewTrips,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    deleteTrip: (tripBookingId) => dispatch(deleteTrip(tripBookingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripViewComponent);
