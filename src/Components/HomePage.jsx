import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import history from "../history";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: "",
      dataDestination: "",
      errSource: "",
      errDestination: "",
      disabled: "",
    };

    this.handleRequestNow = this.handleRequestNow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequestNow(e) {
    e.preventDefault();
    const { dataSource, dataDestination } = this.state;
    let valid = true;

    if (dataSource === "") {
      this.setState({
        errSource: "Select a Pick Up Location",
      });
      valid = false;
    }
    if (dataDestination === "") {
      this.setState({
        errDestination: "Select a Destination",
      });
      valid = false;
    }
    if (valid) {
      this.setState({
        dataSource: "",
        dataDestination: "",
        errSource: "",
        errDestination: "",
      });
    }
  }

  handleChange(e) {
    if (e.target.name === "source") {
      this.setState({
        dataSource: e.target.value,
        errSource: "",
        dataDestination: "",
        errDestination: "",
        disabled: "not",
      });

      if (e.target.value === this.state.dataDestination) {
        this.setState({
          dataSource: e.target.value,
          errSource: "",
          dataDestination: "",
          errDestination: "To Location & From Location Cannot be same",
          disabled: "",
        });
      }
    } else if (e.target.name === "destination") {
      this.setState({
        dataSource: "",
        errSource: "",
        dataDestination: e.target.value,
        errDestination: "",
        disabled: "not",
      });

      if (e.target.value === this.state.dataSource) {
        this.setState({
          dataSource: "",
          errSource: "",
          dataDestination: "",
          errDestination: "To Location & From Location Cannot be same",
          disabled: "",
        });
      }
    }
  }

  handleRequest() {
    if (localStorage.getItem("Customer")) {
      localStorage.setItem("trip", JSON.stringify(this.state));
      history.push("/customer/home");
    } else {
      localStorage.setItem("trip", JSON.stringify(this.state));
      history.push("/login");
    }
  }

  render() {
    return (
      <div id="homepage">
        <HeaderComponent />

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
                  {/* <input
                    type="text"
                    name=""
                    id=""
                    className="form-control p-2"
                    placeholder="Enter pickup location"
                  /> */}
                  <select
                    type="source"
                    name="source"
                    id="source"
                    className="form-control p-2"
                    placeholder="Enter pickup location"
                    onChange={this.handleChange}
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

                  {/* <input
                    type="text"
                    name=""
                    id=""
                    className="form-control p-2"
                    placeholder="Enter destination"
                  /> */}

                  <select
                    type="destination"
                    name="destination"
                    id="destination"
                    className="form-control p-2"
                    placeholder="Enter destination"
                    onChange={this.handleChange}
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
                <br />
                <h5 className="text-danger">{this.state.errDestination}</h5>
              </div>
              <br />

              {/* <div className="ms-4">
                <button type="submit" className="btn btn-dark fw-bold p-2 " onSubmit={this.handleRequestNow}>
                Request now
                </button>
              </div> */}

              <div className="nav-item ms-4">
                <button
                  className="btn btn-dark fw-bold p-2"
                  disabled={!this.state.disabled}
                  onClick={this.handleRequest}
                  //onSubmit={this.handleRequestNow}
                >
                  Request now
                </button>
              </div>
              {/* <button disabled={!this.state.disabled}>
                  Request now
              </button> */}
              <br />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
