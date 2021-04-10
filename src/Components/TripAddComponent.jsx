import React, { Component, Fragment } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import history from "../history";
import { connect } from "react-redux";
import { fetchCabs, insertTrip, fetchDrivers1 } from "../redux";
import LocalTaxiOutlinedIcon from "@material-ui/icons/LocalTaxiOutlined";

class TripAddComponent extends Component {
  state = {
    setOrNot: false,
    loading: false,
    error: "",
    errSource: "",
    errDestination: "",
    disabled: "",
    disabled2: "not",
    but: "",
    tripBooking: {
      fromLocation: "",
      toLocation: "",
      distanceInKm: "",
      bill: "",
      status: "",
      fromDateTime: "2021-04-08 01:49:00",
      toDateTime: "2021-04-08 01:50:00",
      customer: {
        customerId: "",
        username: "",
        password: "",
        email: "",
        mobileNumber: "",
        address: "",
      },
      driver: {
        driverId: "",
        username: "",
        password: "",
        email: "",
        mobileNumber: "",
        address: "",
        cab: {
          cabId: "",
          carType: "",
          perKmRate: "",
        },
      },
    },
    driverData: [],
  };

  async componentDidMount() {
    var customerData = JSON.parse(localStorage.getItem("Customer"));
    if (localStorage.getItem("trip")) {
      var trip = JSON.parse(localStorage.getItem("trip"));
      await this.props.fetchCabs();
      await this.setState({
        tripBooking: {
          ...this.state.tripBooking,
          fromLocation: trip.fromLocation,
          toLocation: trip.toLocation,
          customer: {
            customerId: customerData.customerId,
            username: customerData.username,
            password: customerData.password,
            email: customerData.email,
            mobileNumber: customerData.mobileNumber,
            address: customerData.address,
          },
        },
      });
    } else {
      await this.props.fetchCabs();
      await this.setState({
        tripBooking: {
          ...this.state.tripBooking,
          customer: {
            customerId: customerData.customerId,
            username: customerData.username,
            password: customerData.password,
            email: customerData.email,
            mobileNumber: customerData.mobileNumber,
            address: customerData.address,
          },
        },
      });
    }
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };

  handleCabChange = async (event) => {
    await this.setState({
      ...this.state,
      setOrNot: false,
    });

    var cab = {
      ...this.state.tripBooking.driver.cab,
    };

    var cabObj = event.target.value.split(",");

    cab.cabId = cabObj[0];
    cab.carType = cabObj[1];
    cab.perKmRate = cabObj[2];

    if (cabObj[1] != null) {
      await this.setState({
        ...this.state,
        disabled: "not",
        but: "not",
      });
    }

    await this.setState({
      tripBooking: {
        ...this.state.tripBooking,
        driver: {
          ...this.state.tripBooking.driver,
          cab: {
            cabId: cabObj[0],
            carType: cabObj[1],
            perKmRate: cabObj[2],
          },
        },
      },
    });

    const fromLocation = this.state.tripBooking.fromLocation;
    const toLocation = this.state.tripBooking.toLocation;
    const cabRate = this.state.tripBooking.driver.cab.perKmRate;

    if (fromLocation === "Bangalore") {
      if (toLocation === "Mysore") {
        await this.setState({
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 152,
            bill: cabRate * 152,
          },
        });
      } else if (toLocation === "Goa") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 583,
            bill: cabRate * 583,
          },
        });
      } else {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 569,
            bill: cabRate * 569,
          },
        });
      }
    } else if (fromLocation === "Mysore") {
      if (toLocation === "Bangalore") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 152,
            bill: cabRate * 152,
          },
        });
      } else if (toLocation === "Goa") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 614,
            bill: cabRate * 614,
          },
        });
      } else {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 743,
            bill: cabRate * 743,
          },
        });
      }
    } else if (fromLocation === "Goa") {
      if (toLocation === "Bangalore") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 583,
            bill: cabRate * 583,
          },
        });
      } else if (toLocation === "Mysore") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 614,
            bill: cabRate * 614,
          },
        });
      } else {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 647,
            bill: cabRate * 647,
          },
        });
      }
    } else if (fromLocation === "Hyderabad") {
      if (toLocation === "Mysore") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 743,
            bill: cabRate * 743,
          },
        });
      } else if (toLocation === "Goa") {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 647,
            bill: cabRate * 647,
          },
        });
      } else {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 569,
            bill: cabRate * 569,
          },
        });
      }
    }

    await this.props.fetchDrivers1(this.state.tripBooking.driver.cab.carType);

    if (this.props.driverData.loading) {
      await this.setState({
        ...this.state,
        loading: true,
        setOrNot: false,
      });
    } else if (this.props.driverData.error) {
      await this.setState({
        ...this.state,
        error: this.props.driverData.error.message,
        setOrNot: false,
      });
    } else {
      await this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers,
        setOrNot: true,
      });
    }
  };

  handleResetCab = () => {
    var dropDown = document.getElementById("carType");
    dropDown.selectedIndex = 0;
  };

  handleChange = async (e) => {
    if (e.target.name === "source") {
      this.handleResetCab();

      await this.setState({
        ...this.state,
        tripBooking: {
          ...this.state.tripBooking,
          fromLocation: e.target.value,
          distanceInKm: "",
          bill: "",
        },
        // fromLocation: e.target.value,
        errDestination: "",
        disabled: "",
        but: "not",
        disabled2: "not",
      });

      if (e.target.value === this.state.tripBooking.toLocation) {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            fromLocation: e.target.value,
            distanceInKm: "",
            bill: "",
          },
          errDestination: "To Location & From Location Cannot be same",
          but: "",
          disabled2: "",
        });
      }
    }

    if (e.target.name === "destination") {
      this.handleResetCab();

      await this.setState({
        ...this.state,
        tripBooking: {
          ...this.state.tripBooking,
          toLocation: e.target.value,
          distanceInKm: "",
          bill: "",
        },
        errDestination: "",
        disabled: "",
        disabled2: "not",
        but: "not",
      });

      if (e.target.value === this.state.tripBooking.fromLocation) {
        await this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            toLocation: e.target.value,
            distanceInKm: "",
            bill: "",
          },
          errDestination: "To Location & From Location Cannot be same",
          but: "",
          disabled2: "",
        });
      }
    }
  };

  handleRequest = async (driver) => {
    console.log(driver);
    await this.setState({
      tripBooking: {
        ...this.state.tripBooking,
        status: "Requested",
        driver: {
          ...this.state.tripBooking.driver,
          driverId: driver.driverId,
          username: driver.username,
          password: driver.password,
          email: driver.email,
          mobileNumber: driver.mobileNumber,
          rating: driver.rating,
          status: driver.status,
          licenseNo: driver.licenseNo,
          address: driver.address,
        },
      },
    });
    if (localStorage.getItem("Customer")) {
      localStorage.setItem("trip", JSON.stringify(this.state));
    } else {
      localStorage.setItem("trip", JSON.stringify(this.state));
      history.push("/login");
    }
    await this.props.insertTrip(this.state.tripBooking);
  };

  render() {
    return this.state.setOrNot ? (
      <div>
        <div className="container">
          <br />
          <br />
          <div className="row mt-4 ms-4">
            <div className="col border border-light ms-4 bg-white">
              <div className="text-center mt-4">
                <DirectionsCarIcon fontSize="large" />
                <h5>Ride</h5>
              </div>

              <hr />
              <div className=" ms-4 me-4">
                <div className="mt-4">
                  <h1 className="display-5 fw-bold">Request a ride now</h1>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PersonPinCircleOutlinedIcon />
                  </span>

                  <select
                    type="source"
                    name="source"
                    id="source"
                    className="form-control p-2"
                    placeholder="Select pickup location"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.fromLocation}
                  >
                    <option value="" hidden>
                      Enter pickup location
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PinDropOutlinedIcon />
                  </span>

                  <select
                    type="destination"
                    name="destination"
                    id="destination"
                    className="form-control p-2"
                    placeholder="Select destination"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.toLocation}
                  >
                    <option value="" hidden>
                      Enter destination
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
                <h5 className="text-danger">{this.state.errDestination}</h5>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <LocalTaxiOutlinedIcon />
                  </span>

                  <select
                    type="carType"
                    name="carType"
                    id="carType"
                    className="form-control p-2"
                    placeholder="Choose Car Type"
                    onChange={this.handleCabChange}
                    disabled={!this.state.disabled2}

                    // value={this.state.tripBooking.driver.driverId}
                  >
                    <option value="0" hidden>
                      Select Car Type
                    </option>
                    {this.props.cabData.cabs.map((cab) => (
                      <option
                        key={cab.cabId}
                        value={
                          cab.cabId + "," + cab.carType + "," + cab.perKmRate
                        }
                      >
                        {cab.carType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Distance in Km</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.distanceInKm}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Trip Fare</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.bill}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
            </div>
            <div className="col">
              <>
                <h2 className="text-center">List of Available Drivers</h2>
                <br />
                <div>
                  {this.state &&
                    this.state.driverData &&
                    this.state.driverData.map((driver) => (
                      <Fragment key={driver.driverId}>
                        <div className="card" key={driver.driverId}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-10">
                                <h5>
                                  <span className="fw-bold">Driver name </span>:{" "}
                                  {driver.username}
                                </h5>

                                <h5>
                                  <span className="fw-bold">
                                    Email address{" "}
                                  </span>{" "}
                                  : {driver.email}
                                </h5>
                                <h5>
                                  <span className="fw-bold">
                                    Mobile number{" "}
                                  </span>
                                  : {driver.mobileNumber}
                                </h5>

                                <h5>
                                  <span className="fw-bold">
                                    License Number{" "}
                                  </span>{" "}
                                  : {driver.licenseNo}
                                </h5>
                                <h5>
                                  <span className="fw-bold">Rating </span> :{" "}
                                  {driver.rating}
                                </h5>

                                <h5>
                                  <span className="fw-bold">Car Type </span> :{" "}
                                  {driver.cab.carType}
                                </h5>
                                <h5>
                                  <span className="fw-bold">Price Per Km </span>{" "}
                                  : {driver.cab.perKmRate}
                                </h5>
                              </div>
                              <div className="col-md-2">
                                <button
                                  className="btn btn-dark col-md-12 mb-2 mt-4"
                                  disabled={!this.state.disabled2}
                                  onClick={() => this.handleRequest(driver)}
                                >
                                  <LocalTaxiOutlinedIcon />

                                  <h5 className="text-white">Book</h5>
                                </button>

                                {/* <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) => this.deleteDriver(driver.driverId, e)}
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete driver</h5>
                        </button> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />
                      </Fragment>
                    ))}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    ) : this.state.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Drivers List</h1>
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
    ) : this.state.error ? (
      <>
        <div className="container">
          <br />
          <br />
          <div className="row mt-4 ms-4">
            <div className="col border border-light ms-4 bg-white">
              <div className="text-center mt-4">
                <DirectionsCarIcon fontSize="large" />
                <h5>Ride</h5>
              </div>

              <hr />
              <div className=" ms-4 me-4">
                <div className="mt-4">
                  <h1 className="display-5 fw-bold">Request a ride now</h1>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PersonPinCircleOutlinedIcon />
                  </span>

                  <select
                    type="source"
                    name="source"
                    id="source"
                    className="form-control p-2"
                    placeholder="Select pickup location"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.fromLocation}
                  >
                    <option value="" hidden>
                      Enter pickup location
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PinDropOutlinedIcon />
                  </span>

                  <select
                    type="destination"
                    name="destination"
                    id="destination"
                    className="form-control p-2"
                    placeholder="Select destination"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.toLocation}
                  >
                    <option value="" hidden>
                      Enter destination
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
                <h5 className="text-danger">{this.state.errDestination}</h5>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <LocalTaxiOutlinedIcon />
                  </span>

                  <select
                    type="carType"
                    name="carType"
                    id="carType"
                    className="form-control p-2"
                    placeholder="Choose Car Type"
                    onChange={this.handleCabChange}

                    // value={this.state.tripBooking.driver.driverId}
                  >
                    <option value="0" hidden>
                      Select Car Type
                    </option>
                    {this.props.cabData.cabs.map((cab) => (
                      <option
                        key={cab.cabId}
                        value={
                          cab.cabId + "," + cab.carType + "," + cab.perKmRate
                        }
                      >
                        {cab.carType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Distance in Km</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.distanceInKm}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Trip Fare</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.bill}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
            </div>
            <div className="col">
              <>
                <h2 className="text-center">List of Available Drivers</h2>
                <br />
                <div className="alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              </>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div>
        <div className="container">
          <br />
          <br />
          <div className="row mt-4 ms-4">
            <div className="col-md-6 border border-light ms-4 bg-white">
              <div className="text-center mt-4">
                <DirectionsCarIcon fontSize="large" />
                <h5>Ride</h5>
              </div>

              <hr />
              <div className=" ms-4 me-4">
                <div className="mt-4">
                  <h1 className="display-5 fw-bold">Request a ride now</h1>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PersonPinCircleOutlinedIcon />
                  </span>

                  <select
                    type="source"
                    name="source"
                    id="source"
                    className="form-control p-2"
                    placeholder="Select pickup location"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.fromLocation}
                  >
                    <option value="" hidden>
                      Enter pickup location
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
              </div>
              <br />

              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <PinDropOutlinedIcon />
                  </span>

                  <select
                    type="destination"
                    name="destination"
                    id="destination"
                    className="form-control p-2"
                    placeholder="Select destination"
                    onChange={this.handleChange}
                    value={this.state.tripBooking.toLocation}
                  >
                    <option value="" hidden>
                      Enter destination
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Mysore">Mysore</option>
                  </select>
                </div>
                <h5 className="text-danger">{this.state.errDestination}</h5>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <LocalTaxiOutlinedIcon />
                  </span>

                  <select
                    type="carType"
                    name="carType"
                    id="carType"
                    className="form-control p-2"
                    placeholder="Choose Car Type"
                    onChange={this.handleCabChange}

                    // value={this.state.tripBooking.driver.driverId}
                  >
                    <option value="0" hidden>
                      Select Car Type
                    </option>
                    {this.props.cabData.cabs.map((cab) => (
                      <option
                        key={cab.cabId}
                        value={
                          cab.cabId + "," + cab.carType + "," + cab.perKmRate
                        }
                      >
                        {cab.carType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Distance in Km</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.distanceInKm}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Trip Fare</label>
                  <input
                    type="text"
                    disabled={true}
                    value={this.state.tripBooking.bill}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cabData: state.cabReducer.viewCabs,
    driverData: state.tripReducer.fetchDrivers,
  };
};

const mapDispatchToProps = { fetchCabs, insertTrip, fetchDrivers1 };

export default connect(mapStateToProps, mapDispatchToProps)(TripAddComponent);
