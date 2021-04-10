import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import history from "../history";
import { connect } from "react-redux";
import { fetchCabs, insertTrip, updateTrip } from "../redux";
import SockJsClient from "react-stomp";
import TripHeaderComponent from "./TripHeaderComponent";
import FooterComponent from "./FooterComponent";

class TripRequestedComponent extends Component {
  state = {
    tripBooking: {
      fromLocation: "",
      toLocation: "",
      distanceInKm: "",
      bill: "",
      status: "",
      fromDateTime: "2021-4-08 1:49:00",
      toDateTime: "2021-4-08 1:50:00",
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

  async componentDidMount() {
    await this.setState({
      tripBooking: JSON.parse(localStorage.getItem("trip")),
    });
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };

  sendMessage = (msg) => {
    this.clientRef.sendMessage("/app/webSocket", JSON.stringify(msg));
    console.log(msg);
    console.log("Customer to Driver");
  };

  handleOnClick = async () => {
    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "Paid",
      },
    });

    await this.props.updateTrip(this.state.tripBooking);

    this.sendMessage(this.state.tripBooking);
  };

  handleGoBack = async () => {
    await this.setState({
      ...this.state,
      tripBooking: {
        ...this.state.tripBooking,
        status: "Rejected",
      },
    });

    history.push("/customer/home");
  };
  render() {
    return (
      <div>
        <TripHeaderComponent />
        <div className="container">
          <SockJsClient
            url="https://cba.rao.life/ws"
            topics={[
              "/trip/" +
                JSON.parse(localStorage.getItem("Customer")).username +
                "/customer",
            ]}
            onConnect={() => {
              console.log("connected   ");
              // console.log(this.props)
              this.sendMessage(this.props.insertData.trip);
              // console.log("Inserted tripBooking")
            }}
            onDisconnect={() => {
              console.log("Disconnected   ");
            }}
            onMessage={async (msg) => {
              console.log(msg);
              await this.setState({
                tripBooking: msg,
              });
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
                    {JSON.parse(localStorage.getItem("trip")).tripBookingId}
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
                    <h4 className="fw-bold">Driver name </h4>
                    <h4>{this.state.tripBooking.driver.username}</h4>
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
                        <h4 className="fw-bold">Trip start date and time </h4>
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
                    <h4 className="fw-bold">Driver mobile number </h4>
                    <h4>{this.state.tripBooking.driver.mobileNumber}</h4>
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
                <h2 className="fw-bold">
                  {" "}
                  {this.state.tripBooking.status === "Requested" ? (
                    <>Requesting ...</>
                  ) : this.state.tripBooking.status === "DriverAssigned" ? (
                    <>Trip accepted. Driver will be arriving soon ...</>
                  ) : this.state.tripBooking.status === "TripStarted" ? (
                    <>Bon voyage! Your trip has started ...</>
                  ) : this.state.tripBooking.status === "Rejected" ? (
                    <>
                      <h2 className="fw-bold">Trip Rejected by driver!</h2>
                      <button
                        className="btn btn-success"
                        onClick={() => this.handleGoBack()}
                      >
                        Go Back
                      </button>{" "}
                    </>
                  ) : this.state.tripBooking.status === "TripEnded" ? (
                    <>
                      <h2 className="fw-bold">
                        Trip ended! Hope you enjoyed the ride! Your trip fare is
                        : {this.state.tripBooking.bill}
                      </h2>
                      <button
                        className="btn btn-success"
                        onClick={() => this.handleOnClick()}
                      >
                        Pay
                      </button>
                    </>
                  ) : this.state.tripBooking.status === "Paid" ? (
                    <>
                      <h2 className="fw-bold">Trip paid!</h2>
                      <button
                        className="btn btn-success"
                        onClick={() => this.handleGoBack()}
                      >
                        Go back
                      </button>
                    </>
                  ) : (
                    <>Waiting for status ...</>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cabData: state.cabReducer.viewCabs,
    loginData: state.loginReducer,
    insertData: state.tripReducer.insertTrip,
  };
};

const mapDispatchToProps = { fetchCabs, insertTrip, updateTrip };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripRequestedComponent);
