import React, { Component } from "react";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import history from "../history";

class HomePage extends Component {
  

    state = {
      fromLocation: "",
      toLocation: "",
      errSource: "",
      errDestination: "",
      disabled: "",
      disabled2: "",
      but:""

    }

  handleChange = (e) => {
    if (e.target.name === "source") 
    {
      this.setState({
        fromLocation: e.target.value,
        errDestination: "",
        disabled: "not",
        but:"not"
        //disabled2: ""
      });

      if (e.target.value === this.state.toLocation) {
        this.setState({
          fromLocation: e.target.value,
          errDestination: "To Location & From Location Cannot be same",
          but : ""
          //disabled: "",
          //disabled2: ""
        });
      }
    } 
    
    if (e.target.name === "destination") 
    {
      this.setState({
        toLocation: e.target.value,
        errDestination: "",
        //disabled:"",
        disabled2: "not",
        but : "not"
      });

      if (e.target.value === this.state.fromLocation) 
      {
        this.setState({
          toLocation: e.target.value,
          errDestination: "To Location & From Location Cannot be same",
          but:""
          //disabled:"",
          //disabled2: ""
        });
      }
    }

    
}

  handleRequest = () => {
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

              <div className="nav-item ms-4">
                <button
                  className="btn btn-dark fw-bold p-2"
                  disabled={!this.state.disabled || !this.state.disabled2 || !this.state.but}
                  onClick={this.handleRequest}
                >
                  Request now
                </button>
              </div>
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
