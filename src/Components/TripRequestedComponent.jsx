import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import history from "../history";
import { connect } from "react-redux";
import { fetchCabs, insertTrip } from "../redux";
import LocalTaxiOutlinedIcon from "@material-ui/icons/LocalTaxiOutlined";

class TripRequestedComponent extends Component {
  state = {
    errSource: "",
    errDestination: "",
    disabled: "",
    disabled2: "",
    but: "",
    tripBooking: {
      fromLocation: "",
      toLocation: "",
      distanceInKm: "",
      bill: "",
      status: "",
      fromDateTime: "",
      toDateTime: "",
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
    tripBooking1: {
      fromLocation: "",
      toLocation: "",
      distanceInKm: "",
      bill: "",
      status: "",
      fromDateTime: "",
      toDateTime: "",
      customer: {
        customerId: "",
        username: "",
        password: "",
        email: "",
        mobileNumber: "",
        address: "",
      },
      driver: null,
    },
  };

  componentDidMount() {
    var customerData = JSON.parse(localStorage.getItem("Customer"));
    this.props.fetchCabs();
    this.setState({
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

  handleCabChange = async (event) => {
    var cab = {
      ...this.state.tripBooking.driver.cab,
    };
    
    var cabObj = event.target.value.split(",");

    cab.cabId = cabObj[0];
    cab.carType = cabObj[1];
    cab.perKmRate = cabObj[2];


    await this.setState({
      tripBooking: {
        ...this.state.tripBooking,
        driver: {
          ...this.state.tripBooking.driver,
          cab: {
            cabId: cabObj[0],
            carType: cabObj[1],
            perKmRate: cabObj[2]
          },
        },
      },
    });


    const fromLocation = this.state.tripBooking.fromLocation;
    const toLocation = this.state.tripBooking.toLocation;
    const cabRate = this.state.tripBooking.driver.cab.perKmRate;


    if (fromLocation === "Bangalore") {
      if (toLocation === "Mysore") {
        this.setState({
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 152,
            bill: cabRate * 152
          }
        })
        
      } else if (toLocation === "Goa") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 583,
            bill: cabRate * 583
          }
        })
      } else {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 569,
            bill: cabRate * 569
          }
        })
      }
    } else if (fromLocation === "Mysore") {
      if (toLocation === "Bangalore") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 152,
            bill: cabRate * 152
          }
        })
      } else if (toLocation === "Goa") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 614,
            bill: cabRate * 614
          }
        })
      } else {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 743,
            bill: cabRate * 743
          }
        })
      }
    } else if (fromLocation === "Goa") {
      if (toLocation === "Bangalore") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 583,
            bill: cabRate * 583
          }
        })
      } else if (toLocation === "Mysore") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 614,
            bill: cabRate * 614
          }
        })
      } else {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 647,
            bill: cabRate * 647
          }
        })
      }
    } else if (fromLocation === "Hyderabad") {
      if (toLocation === "Mysore") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 743,
            bill: cabRate * 743
          }
        });
      } else if (toLocation === "Goa") {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 647,
            bill: cabRate * 647
          }
        })
      } else {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            distanceInKm: 569,
            bill: cabRate * 569
          }
        })
      }
    }

  };
  handleChange = (e) => {
    if (e.target.name === "source") {
      this.setState({
        ...this.state,
        tripBooking: {
          ...this.state.tripBooking,
          fromLocation: e.target.value,
        },
        // fromLocation: e.target.value,
        errDestination: "",
        disabled: "not",
        but: "not",
      });

      if (e.target.value === this.state.tripBooking.toLocation) {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            fromLocation: e.target.value,
          },
          errDestination: "To Location & From Location Cannot be same",
          but: "",
        });
      }
    }

    if (e.target.name === "destination") {
      this.setState({
        ...this.state,
        tripBooking: {
          ...this.state.tripBooking,
          toLocation: e.target.value,
        },
        errDestination: "",
        disabled2: "not",
        but: "not",
      });

      if (e.target.value === this.state.tripBooking.fromLocation) {
        this.setState({
          ...this.state,
          tripBooking: {
            ...this.state.tripBooking,
            toLocation: e.target.value,
          },
          errDestination: "To Location & From Location Cannot be same",
          but: "",
        });
      }
    }
  };

  handleRequest = async() => {
    await this.setState({
      tripBooking: {
        ...this.state.tripBooking,
        status: "Requested"
      }
    })
    if (localStorage.getItem("Customer")) {
      localStorage.setItem("trip", JSON.stringify(this.state));
      
    } else {
      localStorage.setItem("trip", JSON.stringify(this.state));
      history.push("/login");
    }
    this.props.insertTrip(this.state.tripBooking1);
  };

  render() {
    return (
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
                    name="carType"
                    className="form-control p-2"
                    placeholder="Choose Car Type"
                    onChange={this.handleCabChange}
                    // value={this.state.tripBooking.driver.driverId}
                  >
                    <option value="" hidden>
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
                  <input type="text" disabled={true} value={this.state.tripBooking.distanceInKm} className="form-control" />
                </div>
              </div>
              <br />
              <div className=" ms-4 me-4">
                <div className="form-group">
                  <label htmlFor="distance">Trip Fare</label>
                  <input type="text" disabled={true} value={this.state.tripBooking.bill} className="form-control" />
                </div>
              </div>
              <br />

              <div className="nav-item ms-4">
                <button
                  className="btn btn-dark fw-bold p-2"
                  disabled={
                    !this.state.disabled ||
                    !this.state.disabled2 ||
                    !this.state.but
                  }
                  onClick={this.handleRequest}
                >
                  Check Status
                </button>
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
  };
};

const mapDispatchToProps = { fetchCabs, insertTrip };

export default connect(mapStateToProps, mapDispatchToProps)(TripRequestedComponent);
