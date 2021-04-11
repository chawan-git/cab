/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { insertDriver, fetchCabs } from "../redux";//importing required Methods

class DriverAddComponent extends Component {
  //defining state with nested obejcts driver/cab -
  //it is an object that holds some information that may change over the lifetime of the component.
  state = {
    driverId: 999999,
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
    licenseNo: "",
    rating: "",
    status: "NotAvailable",
    cab: {
      cabId: 0,
      carType: "",
      perKmRate: 0,
    },
  };
  //handling driver Change Event
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };
  //handling cab Chnage Event
  handleCabChange = async (event) => {
    var cabObj = event.target.value.split(",");

    await this.setState({
      ...this.state,
      cab: {
        cabId: cabObj[0],
        carType: cabObj[1],
        perKmRate: cabObj[2],
      },
    });
  };
  //handling Submit Event
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.insertDriver(this.state);
    if (!this.props.driverInsertData.error.message)
      history.push("/admin/viewDrivers");//specifying puh URL
  };
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  async componentDidMount() {
    //getData() method retrieves drag data (as a DOMString ) for the specified type.
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
    await this.props.fetchCabs();
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //Rendering input text boxes to add Driver Details
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
                <label htmlFor="cab">
                  <h6>
                    Select the cab (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <select
                  type="carType"
                  name="carType"
                  id="carType"
                  className="form-control p-2"
                  placeholder="Choose Car Type"
                  onChange={this.handleCabChange}
                >
                  <option value="0" hidden>
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
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => ({
  driverInsertData: state.driverReducer.insertDriver,
  cabData: state.cabReducer.viewCabs,
});
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = { insertDriver, fetchCabs };
//Expoting component
export default connect(mapStateToProps, mapDispatchToProps)(DriverAddComponent);
