/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateDriver } from "../redux/driver/driverActions";//importing method update Driver

class DriverProfileEditComponent extends Component {
  //defining state with nested obejcts driver/cab -
  //it is an object that holds some information that may change over the lifetime of the component.
  state = {
    driverId: 0,
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
    licenseNo: "",
    status: "",
    rating: 0,
    cab: {
      cabId: 0,
      carType: "",
      perKmRate: "",
    },
  };

  driverFetchData = {};
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  async componentDidMount() {
    this.driverFetchData = JSON.parse(localStorage.getItem("Driver"));

    this.driverFetchData &&
      //setState will accept an Object that will be eventually merged into Components current state.
      (await this.setState({
        driverId: this.driverFetchData.driverId,
        username: this.driverFetchData.username,
        password: this.driverFetchData.password,
        email: this.driverFetchData.email,
        mobileNumber: this.driverFetchData.mobileNumber,
        address: this.driverFetchData.address,
        licenseNo: this.driverFetchData.licenseNo,
        status: this.driverFetchData.status,
        rating: this.driverFetchData.rating,
        cab: {
          cabId: this.driverFetchData.cab.cabId,
          carType: this.driverFetchData.cab.carType,
          perKmRate: this.driverFetchData.cab.perKmRate,
        },
      }));
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
 //handle change event for driver object
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };
  //handle change event for cab object in driver object
  handleCabChange = async (event) => {
    const { cab } = { ...this.state.cab };
    const currentState = cab;
    const { name, value } = event.target;
    currentState[name] = value;
    await this.setState({ cab: currentState });
  };
  //handling submit event
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateDriver(this.state);
    if (!this.props.driverUpdateData.error.message) {
      localStorage.setItem("Driver", JSON.stringify(this.state));
      history.push("/driver/home");
    }
  };
  //rendering Driver Profile Details
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit driver {this.driverFetchData.username}</h2>
            </div>
          </div>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.driverUpdateData.error.message}</h3>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the driver username (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="password">
                  <h6>
                    Enter the driver password (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="email">
                  <h6>
                    Enter the driver email address (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="mobile">
                  <h6>
                    Enter the driver mobile number (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="mobileNumber"
                  pattern="(0/91)?[6-9][0-9]{9}"
                  required
                  value={this.state.mobileNumber}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the driver License Number (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="licenseNo"
                  required
                  value={this.state.licenseNo}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="License No"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the driver Rating (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  required
                  value={this.state.rating}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="rating"
                  disabled={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the driver Status (required){" "}
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
                  disabled={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the Cab Id (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="cabId"
                  disabled={true}
                  value={this.state.cab.cabId}
                  onChange={this.handleCabChange}
                  className="form-control"
                  placeholder="cabId"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the Cab Type (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="carType"
                  disabled={true}
                  value={this.state.cab.carType}
                  onChange={this.handleCabChange}
                  className="form-control"
                  placeholder="cabType"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the Rate Per km (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="perKmRate"
                  disabled={true}
                  value={this.state.cab.perKmRate}
                  onChange={this.handleCabChange}
                  className="form-control"
                  placeholder="perKmRate"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="address">
                  <h6>
                    Enter the driver address (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <textarea
                  name="address"
                  rows="5"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
        )
      </>
    )
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => ({
  driverUpdateData: state.driverReducer.updateDriver,
});
//mapDispatchToProps is a utility which will help your component to fire an action event 
const mapDispatchToProps = { updateDriver };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverProfileEditComponent);
