/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import history from "../history";
import { connect } from "react-redux";
import { fetchCabs, insertTrip, updateTrip, updateDriver } from "../redux";//feching required methods
import SockJsClient from "react-stomp"; //importing SockJS-client is a browser JavaScript library that provides a WebSocket-like object
import TripHeaderComponent from "./TripHeaderComponent";
import FooterComponent from "./FooterComponent";

class DriverTripComponent extends Component {
  //defining state with nested obejcts driver/cab/trip_booking-
  //it is an object that holds some information that may change over the lifetime of the component.
  state = {
    driver: {
      driverId: "",
      username: "",
      password: "",
      address: "",
      mobileNumber: "",
      email: "",
      licenseNo: "",
      rating: "",
      status: "",
      cab: {
        cabId: "",
        carType: "",
        perKmRate: "",
      },
    },
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
  };
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  async componentDidMount() {
    await this.setState({
      ...this.state,
      driver: JSON.parse(localStorage.getItem("Driver")),
    });
    //getData() method retrieves drag data (as a DOMString ) for the specified type.
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //socket sending message to customer when driver is avialble and takes up on trip
  sendMessage = (msg) => {
    this.clientRef.sendMessage("/app/webSocket", JSON.stringify(msg));
  };
  //handling Trip-Accept Event
  handleAccept = async () => {
    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "DriverAssigned",  //when Driver accepts the trip request-driver is assigned to that teip ID
      },
    });
    localStorage.setItem("trip", JSON.stringify(this.state.tripBooking));
    await this.props.updateTrip(this.state.tripBooking);//update trip status
    this.sendMessage(this.state.tripBooking);//sends state message to trip
  };
  //handling trip duration event
  handleStartTrip = async () => {
    var tempDate = new Date(),
      date =
        tempDate.getFullYear() +
        "-" +
        ("0" + (tempDate.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + tempDate.getDate()).slice(-2) +
        " " +
        tempDate.getHours() +
        ":" +
        tempDate.getMinutes() +
        ":" +
        tempDate.getSeconds();

    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "TripStarted",
        fromDateTime: date,
      },
    });
    localStorage.setItem("trip", JSON.stringify(this.state.tripBooking));
    await this.props.updateTrip(this.state.tripBooking);
    this.sendMessage(this.state.tripBooking);
  };
  //handling end Trip event
  handleEndTrip = async () => {
    var tempDate = new Date(),
      date =
        tempDate.getFullYear() +
        "-" +
        ("0" + (tempDate.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + tempDate.getDate()).slice(-2) +
        " " +
        tempDate.getHours() +
        ":" +
        tempDate.getMinutes() +
        ":" +
        tempDate.getSeconds();
    //setting trip status
    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "TripEnded",
        toDateTime: date,
      },
    });
    localStorage.setItem("trip", JSON.stringify(this.state.tripBooking));
    await this.props.updateTrip(this.state.tripBooking);

    this.sendMessage(this.state.tripBooking);
  };
  //handling Trip rejected event when driver rejects the trip
  handleReject = async () => {
    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "Rejected",
      },
    });
    localStorage.setItem("trip", JSON.stringify(this.state.tripBooking));
    await this.props.updateTrip(this.state.tripBooking);
    this.sendMessage(this.state.tripBooking);
  };

  //Handle driver Availablity event
  handleAvailability = async (e) => {
    if (!e.target.checked) {
      await this.setState({
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "NotAvailable",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    } else {
      await this.setState({
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "Available",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    }
    await this.props.updateDriver(this.state.driver);
    if (!e.target.checked) {
      history.push("/driver/home");
    }
  };
  //handling GoBack event when payments are done
  handleGoBack = () => {
    localStorage.removeItem("trip");
    history.push("/driver/home");//pushing driver back to the home page
  };
  //rendering all the Trip booking 
  render() {
    return this.state.tripBooking.status ? (
      <>
        {" "}
        <>
          <div>
            <TripHeaderComponent />
            <div className="container">
              {/*Socket URL */}
              <SockJsClient
                url="https://cba.rao.life/ws"
                topics={[
                  "/trip/" +
                  JSON.parse(localStorage.getItem("Driver")).username +
                  "/driver",
                ]}
                onConnect={() => {
                }}
                onDisconnect={() => {
                }}
                onMessage={async (msg) => {
                  await this.setState({
                    tripBooking: msg,
                  });
                  localStorage.setItem("trip", this.state.tripBooking);
                }}
                ref={(client) => {
                  this.clientRef = client;
                }}
              />
              <div className="row mt-4 ms-4">
                <div className="col border border-light ms-4 bg-white">
                  <div className="text-center mt-4">
                    <DirectionsCarIcon fontSize="large" />
                    <h5>Ride</h5>
                  </div>
                  <hr />
                  <div className=" ms-4 me-4">
                    <div className="mt-4">
                      <h1 className="display-5 fw-bold">
                        Your trip booking #
                        {this.state.tripBooking.tripBookingId}
                      </h1>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <div className="ms-4 me-4">
                        <h4>
                          <span className="fw-bold">Pickup Location </span>
                        </h4>
                        <h4> {this.state.tripBooking.fromLocation}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">Car </h4>
                        <h4>{this.state.tripBooking.driver.cab.carType}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">Customer name </h4>
                        <h4>{this.state.tripBooking.customer.username}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">Distance in Km </h4>
                        <h4>{this.state.tripBooking.distanceInKm}</h4>
                      </div>
                      <br />
                      {this.state.tripBooking.status === "TripEnded" ||
                        this.state.tripBooking.status === "TripStarted" ? (
                        <>
                          <div className="ms-4 me-4">
                            <h4 className="fw-bold">
                              Trip start date and time{" "}
                            </h4>
                            <h4>{this.state.tripBooking.fromDateTime}</h4>
                          </div>
                          <br />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="col">
                      <div className="ms-4 me-4">
                        <h4>
                          <span className="fw-bold">Destination Location </span>
                        </h4>
                        <h4> {this.state.tripBooking.toLocation}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">License number </h4>
                        <h4>{this.state.tripBooking.driver.licenseNo}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">Customer mobile number </h4>
                        <h4>{this.state.tripBooking.customer.mobileNumber}</h4>
                      </div>
                      <br />
                      <div className="ms-4 me-4">
                        <h4 className="fw-bold">Trip Fare </h4>
                        <h4>{this.state.tripBooking.bill}</h4>
                      </div>
                      <br />
                      {this.state.tripBooking.status === "TripEnded" ? (
                        <>
                          <div className="ms-4 me-4">
                            <h4 className="fw-bold">Trip end date and time </h4>
                            <h4>{this.state.tripBooking.toDateTime}</h4>
                          </div>
                          <br />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="ms-4 me-4 text-center border p-3 border-dark">
                    {
                      <>
                        {this.state.tripBooking.status === "Requested" ? (
                          <>
                            <h2 className="fw-bold">
                              New Trip from{" "}
                              {this.state.tripBooking.fromLocation} to{" "}
                              {this.state.tripBooking.toLocation}
                            </h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleAccept()}
                            >
                              Accept
                            </button>
                            &nbsp;
                            <button
                              className="btn btn-danger"
                              onClick={() => this.handleReject()}
                            >
                              Reject
                            </button>
                          </>
                        ) : this.state.tripBooking.status ===
                          "DriverAssigned" ? (
                          <>
                            <h2 className="fw-bold">
                              Trip accepted from{" "}
                              {this.state.tripBooking.fromLocation} to{" "}
                              {this.state.tripBooking.toLocation}
                            </h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleStartTrip()}
                            >
                              Start trip
                            </button>
                          </>
                        ) : this.state.tripBooking.status === "TripStarted" ? (
                          <>
                            <h2 className="fw-bold">
                              Trip started from{" "}
                              {this.state.tripBooking.fromLocation}
                            </h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleEndTrip()}
                            >
                              End trip
                            </button>
                          </>
                        ) : this.state.tripBooking.status === "Rejected" ? (
                          <>
                            <h2 className="fw-bold">Trip rejected!</h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleGoBack()}
                            >
                              Go back
                            </button>
                          </>
                        ) : this.state.tripBooking.status === "TripEnded" ? (
                          <>
                            <h2 className="fw-bold">
                              {" "}
                              Waiting for payment ...
                            </h2>
                          </>
                        ) : this.state.tripBooking.status === "Paid" ? (
                          <>
                            <h2 className="fw-bold">Trip Paid!</h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleGoBack()}
                            >
                              Go back
                            </button>
                          </>
                        ) : (
                          <>
                            <h2 className="fw-bold">
                              New Trip from{" "}
                              {this.state.tripBooking.fromLocation} to{" "}
                              {this.state.tripBooking.toLocation}
                            </h2>
                            <button
                              className="btn btn-success"
                              onClick={() => this.handleAccept()}
                            >
                              Accept
                            </button>
                            &nbsp;
                            <button
                              className="btn btn-danger"
                              onClick={() => this.handleReject()}
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
            <FooterComponent />
          </div>
        </>
      </>
    ) : (
      <>
        <div>
          <TripHeaderComponent />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container ">
            {/* Socket URL */}
            <SockJsClient
              url="https://cba.rao.life/ws"
              topics={[
                "/trip/" +
                JSON.parse(localStorage.getItem("Driver")).username +
                "/driver",
              ]}
              onConnect={() => {
              }}
              onDisconnect={() => {
              }}
              onMessage={async (msg) => {
                await this.setState({
                  tripBooking: msg,
                });
                localStorage.setItem("trip", this.state.tripBooking);
              }}
              ref={(client) => {
                this.clientRef = client;
              }}
            />
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">
                  Welcome to the Driver Dashboard
                </h2>
                <hr />
                <div className="row ">
                  <div className="col offset-5">
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onChange={this.handleAvailability}
                        checked={
                          this.state.driver.status === "Available"
                            ? true
                            : false
                        }
                      />
                      <label
                        className="form-check-label fw-bold"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Availability
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <h2 className="text-center fw-bold">
                  Waiting for customers ...
                </h2>
              </div>
            </div>
          </div>
          <FooterComponent />
        </div>
      </>
    );
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    cabData: state.cabReducer.viewCabs,
    loginData: state.loginReducer,
    insertData: state.tripReducer.insertTrip,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = { fetchCabs, insertTrip, updateTrip, updateDriver };
//exporting component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverTripComponent);
