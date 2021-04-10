import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDriver, fetchDrivers } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class DriverViewComponent extends Component {
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;
    if (target.value === "")
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers,
      });
    else if (option === "username") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.username.includes(target.value)
        ),
      });
    } else if (option === "mobileNumber") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.mobileNumber.includes(target.value)
        ),
      });
    } else if (option === "email") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.email.includes(target.value)
        ),
      });
    } else if (option === "status") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.status.includes(target.value)
        ),
      });
    } else if (option === "cab") {
      this.setState({
        ...this.state,
        driverData: this.props.driverData.drivers.filter((x) =>
          x.cab.carType.includes(target.value)
        ),
      });
    } else if (option === "rating") {
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

  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  state = {
    driverData: [],
    filterOption: "",
  };

  async componentDidMount() {
    await this.props.fetchDrivers();
    await this.setState({
      ...this.state,
      driverData: this.props.driverData.drivers,
    });
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  async deleteDriver(driverId, e) {
    e.preventDefault();
    await this.props.deleteDriver(driverId);
  }

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
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
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
const mapStateToProps = (state) => {
  return {
    driverData: state.driverReducer.viewDrivers,
  };
};
// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// // searchButton.addEventListener('click', () => {
//   //  const viewCustomers = searchInput.viewCustomers;
//   //  alert(viewCustomers);
// // });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
    deleteDriver: (driverId) => dispatch(deleteDriver(driverId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverViewComponent);
