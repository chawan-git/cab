import React, { Component } from "react";
import { connect } from "react-redux";
import { insertDriver } from "../redux";

class DriverAddComponent extends Component {
  state = {
    driverId: 0,
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
    licenseNo: "",
    rating: "",
    status: "",
    cab: {
      cabId: 1,
      carType: "SUV",
      perKmRate: "11",
    },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleCabCabIdChange=(event)=>{
  //   console.log(event)
  //   console.log(event.target)

  //   this.setState({cabId: event.target.value});
  //    }
  handleCabchange = (event) => {
    console.log(this.state);
    const { cab } = { ...this.state.cab };
    const currentState = cab;
    const { name, value } = event.target;
    currentState[name] = value;
    this.setState({ cab: currentState });
    console.log(this.state);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.insertDriver(this.state);
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Add a new Driver</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.driverInsertData.error.message}</h3>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the driver userID (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="driverId"
                  value={this.state.driverId}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="User-id"
                />
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
                <label htmlFor="email">
                  <h6>
                    Enter the driver License No (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="licenseNo"
                  name="licenseNo"
                  required
                  value={this.state.licenseNo}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="License Number"
                />
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="email">
                  <h6>
                    Enter the driver's Rating (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="rating"
                  name="rating"
                  required
                  value={this.state.rating}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Rating"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="email">
                  <h6>
                    Enter the driver Status (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="status"
                  name="status"
                  required
                  value={this.state.status}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Available/Not-Available"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="cabId">
                  <h6>
                    Enter the Cab-Id (required){" "}
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
                  placeholder="Cab ID"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="CarType">
                  <h6>
                    Enter the driver's Car Type (required){" "}
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
                  placeholder="SUVs/SEDAN/COUPE"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="perKmRate">
                  <h6>
                    Enter the Rate Per Km (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="perkmRate"
                  name="perKmRate"
                  disabled={true}
                  value={this.state.cab.perKmRate}
                  onChange={this.handleCabChange}
                  className="form-control"
                  placeholder="Enter Fare Per Km"
                />
              </div>
            </div>
            <br />
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

            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Add Driver
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  driverInsertData: state.driverReducer.insertDriver,
});
const mapDispatchToProps = { insertDriver };

export default connect(mapStateToProps, mapDispatchToProps)(DriverAddComponent);
