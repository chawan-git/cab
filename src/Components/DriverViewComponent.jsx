/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDriver, fetchDrivers } from "../redux";//importing required methods
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class DriverViewComponent extends Component {
  //Handling Search Event
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;//filtering select option from multiple searching option
    if (target.value === "")
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers,
      });
    // search based on username
    else if (option === "username") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.username.includes(target.value)
        ),
      });
    }
    // search based on mobile number 
    else if (option === "mobileNumber") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.mobileNumber.includes(target.value)
        ),
      });
    }
    // search based on email
    else if (option === "email") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.email.includes(target.value)
        ),
      });
    }
    // search based on driver's status 
    else if (option === "status") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.status.includes(target.value)
        ),
      });
    }
    // search based on driver's cab 
    else if (option === "cab") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.cab.carType.includes(target.value)
        ),
      });
    }
    // search based on driver's rating 
    else if (option === "rating") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) => x.rating > 4.5),
      });
    } else {
      this.setState({
        ...this.state,
      });
    }
  };
  //handling select event
  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  //defining state 
  state = {
    driverData: [],
    filterOption: "",
  };
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  async componentDidMount() {
    await this.props.fetchDrivers();
    await this.setState({
      ...this.state,
      driverData: this.props.driverData.drivers,
    });
    //getData() method retrieves drag data (as a DOMString ) for the specified type.
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //delete driver method-by id
  async deleteDriver(driverId, e) {
    e.preventDefault();
    await this.props.deleteDriver(driverId);
    if (!this.props.deleteData.error.message) {
      await this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter(
          (driver) => driver.driverId !== driverId
        ),
      });
    }
  }
  //rendring Driver details
  render() {
    const { driverData } = this.props;

    return driverData.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Drivers List</h1>
          <div className=" d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-grow float-right text-success ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </>
    ) : driverData.error ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of Drivers</h2>
          <div className="alert alert-danger" role="alert">
            {driverData.error.message}
          </div>
        </div>
      </>
    ) : driverData.drivers.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of Drivers</h2>
          <div className="alert alert-danger" role="alert">
            No drivers Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />

          <h2 className="text-center">List of Drivers</h2>
          <form>
            <div className="row">
              <div className="col-md-3">
                <select
                  name=""
                  id="select"
                  className="form-control"
                  onChange={this.handleSelect}
                >
                  <option value="select">Search based on ...</option>
                  <option value="username">Username</option>
                  <option value="email">Email</option>
                  <option value="mobileNumber">Mobile number</option>
                  <option value="cab">Cab</option>
                  <option value="status">Status</option>
                  <option value="rating">Best drivers</option>
                </select>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={this.handleSearch}
                  aria-label="Search"
                />
              </div>
            </div>
          </form>
          <br />
          <h3>{this.props.deleteData.error.message}</h3>
          <br />
          {this.state &&
            this.state.driverData &&
            this.state.driverData.map((driver) => (
              <Fragment key={driver.driverId}>
                <div className="card" key={driver.driverId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">ID</span> :{" "}
                          {driver.driverId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Username </span>:{" "}
                          {driver.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">Password </span>:{" "}
                          {driver.password}
                        </h5>
                        <h5>
                          <span className="fw-bold">Email address </span> :{" "}
                          {driver.email}
                        </h5>
                        <h5>
                          <span className="fw-bold">Mobile number </span>:{" "}
                          {driver.mobileNumber}
                        </h5>
                        <h5>
                          <span className="fw-bold">Address </span> :{" "}
                          {driver.address}
                        </h5>
                        <h5>
                          <span className="fw-bold">License Number </span> :{" "}
                          {driver.licenseNo}
                        </h5>
                        <h5>
                          <span className="fw-bold">Rating </span> :{" "}
                          {driver.rating}
                        </h5>
                        <h5>
                          <span className="fw-bold">Status </span> :{" "}
                          {driver.status}
                        </h5>
                        <h5>
                          <span className="fw-bold">Cab Id </span> :{" "}
                          {driver.cab.cabId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Car Type </span> :{" "}
                          {driver.cab.carType}
                        </h5>
                        <h5>
                          <span className="fw-bold">Price Per Km </span> :{" "}
                          {driver.cab.perKmRate}
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link to={"/admin/editDriver/" + driver.driverId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>
                        <button
                          className="btn btn-danger col-md-12"                          
                          onClick={(e) => this.deleteDriver(driver.driverId, e)}
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete driver</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </Fragment>
            ))}
        </div>
      </>
    );
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    driverData: state.driverReducer.viewDrivers,
    deleteData: state.driverReducer.deleteDriver,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
    deleteDriver: (driverId) => dispatch(deleteDriver(driverId)),
  };
};
//exporting Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverViewComponent);
