import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateDriver, fetchDriver } from "../redux";

class DriverEditComponent extends Component {
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
      cabId: 0,
      carType: "",
      perKmRate: "",
    },
  };

  async componentDidMount() {
    await this.props.fetchDriver(this.props.match.params.id);
    const { driverFetchData } = this.props;
    driverFetchData &&
      driverFetchData.driver &&
      (await this.setState({
        driverId: driverFetchData.driver.driverId,
        username: driverFetchData.driver.username,
        password: driverFetchData.driver.password,
        email: driverFetchData.driver.email,
        mobileNumber: driverFetchData.driver.mobileNumber,
        address: driverFetchData.driver.address,
        licenseNo: driverFetchData.driver.licenseNo,
        status: driverFetchData.driver.status,
        rating: driverFetchData.driver.rating,
        cab: driverFetchData.driver.cab,
      }));
      this.getData();
      window.addEventListener("storage", (e) => this.getData());
    }
    getData = () => {
      if (localStorage.getItem("Admin")) {
      } else {
        history.push("/unauthorized");
      }
    };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  handleCabChange = async (event) => {
    var cab = {
      ...this.state.cab,
    };

    cab[event.target.name] = event.target.value;
    await this.setState({ cab });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateDriver(this.state);
    if(!this.props.driverUpdateData.error.message)
    history.push("/admin/viewDrivers");
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit driver {this.state.username}</h2>
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
                <label htmlFor="cabId">
                  <h6>
                    Enter the Cab-Id (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="cabId"
                  // disabled={true}
                  value={this.state.cab.cabId}
                  onChange={this.handleCabChange}
                  className="form-control"
                  placeholder="Cab ID"
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
                  // disabled={true}
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
                  // disabled={true}
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
