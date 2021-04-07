import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDriver, fetchDriver } from "../redux";

class DriverEditComponent extends Component {
  state = {
    driverId: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
    licenseNo: " ",
    status: " ",
    rating: "",
    cabId: "",
    carType: "",
    perKmRate: "",
  };

  async componentDidMount() {
    await this.props.fetchDriver(this.props.match.params.id);
    const { driverFetchData } = this.props;
    driverFetchData &&
      driverFetchData.driver &&
      this.setState({
        userId: driverFetchData.driver.driverId,
        username: driverFetchData.driver.username,
        password: driverFetchData.driver.password,
        email: driverFetchData.driver.email,
        mobileNumber: driverFetchData.driver.mobileNumber,
        address: driverFetchData.driver.address,
        licenseNo: driverFetchData.driver.licenseNo,
        status: driverFetchData.driver.status,
        rating: driverFetchData.driver.rating,
        cabId: driverFetchData.driver.cab.cabId,
        carType: driverFetchData.driver.cab.carType,
        perKmRate: driverFetchData.driver.cab.perKmRate,
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateDriver(this.state);
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit driver {this.props.match.params.id}</h2>
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
                    Enter the driver UserId (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="userId"
                  required
                  value={this.state.userId}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="UserId"
                />
              </div>
            </div>
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
                  type="text"
                  name="rating"
                  required
                  value={this.state.rating}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="rating"
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
                  type="text"
                  name="cabId"
                  required
                  value={this.state.cabId}
                  onChange={this.handleChange}
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
                  required
                  value={this.state.carType}
                  onChange={this.handleChange}
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
                  type="text"
                  name="perKmRate"
                  required
                  value={this.state.perKmRate}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="perKmRate"
                />
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Update Driver
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
  driverUpdateData: state.driverReducer.updateDriver,
  driverFetchData: state.driverReducer.fetchDriver,
});
const mapDispatchToProps = { updateDriver, fetchDriver };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverEditComponent);
