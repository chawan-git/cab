import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateDriver1} from "../redux/driver/driverActions";

class DriverProfileEditComponent extends Component {
    state = {
        driverId: 0,
        username: "",
        password:"",
        email: "",
        mobileNumber: "",
        address: "",
        licenseNo:"",
        status:"",
        rating:0,
        cab: {cabId:1,
        carType:"SUV",
        perKmRate:11}
    
      };

  driverFetchData = {};
  componentDidMount() {
    this.driverFetchData = JSON.parse(localStorage.getItem("Driver"));

    this.driverFetchData &&
      this.setState({
        driverId: this.driverFetchData.driverId,
        username: this.driverFetchData.username,
        password: this.driverFetchData.password,
        email: this.driverFetchData.email,
        mobileNumber: this.driverFetchData.mobileNumber,
        address: this.driverFetchData.address,
        licenseNo:this.driverFetchData.licenseNo,
        status:this.driverFetchData.status,
        rating: this.driverFetchData.rating
      });

    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCabChange = (event) => {
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
    this.props.updateDriver1(this.state);
    localStorage.setItem('Driver',JSON.stringify(this.state))
  };

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
            <br/>
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
    );
  }
}
const mapStateToProps = (state) => ({
  driverUpdateData: state.driverReducer.updateDriver,
});
const mapDispatchToProps = { updateDriver1 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverProfileEditComponent);
