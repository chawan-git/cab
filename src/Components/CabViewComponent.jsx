/* 
D Sri Madhu Priya
*/

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCab, fetchCabs } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class CabViewComponent extends Component {
  //Handling search event
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;
    if (target.value === "")
      this.setState({
        ...this.state,
        cabData: this.props.cabData.cabs,
      });
    else if (option === "carType") {
      this.setState({
        ...this.state,
        cabData: this.props.cabData.cabs.filter((x) => //to filter cabs based on cab types
          x.carType.includes(target.value)
        ),
      });
    } else if (option === "perKmRate") {
      this.setState({
        ...this.state,
        cabData: this.props.cabData.cabs.filter((x) => x.perKmRate < 8), //to filter cabs based on per km rate
      });
    } else {
      this.setState({
        ...this.state,
      });
    }
  };
//Handling select event
  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  state = {
    cabData: [],
    filterOption: "",
  };

  async componentDidMount() {
    await this.props.fetchCabs();
    await this.setState({
      ...this.state,
      cabData: this.props.cabData.cabs,
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
  async deleteCab(cabId, e) {
    e.preventDefault();
    await this.props.deleteCab(cabId);
    if (!this.props.deleteData.error.message) {
      await this.setState({
        ...this.state,
        cabData: this.props.cabData.cabs.filter((cab) => cab.cabId !== cabId),
      });
    }
  }

  render() {
    const { cabData } = this.props;

    return cabData.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Cabs List</h1>
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
    ) : cabData.error ? (
      <> 
      {/* To view the list of cabs */}
        <div className="container">
          <br />
          <h2 className="text-center"> List of cabs</h2>
          <div className="alert alert-danger" role="alert">
            {cabData.error.message}
          </div>
        </div>
      </>
    ) : cabData.cabs.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of cabs</h2>
          <div className="alert alert-danger" role="alert">
            No Cabs Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />
          <h2 className="text-center">List of cabs</h2>
          <form>
            <div className="row">
              <div className="col-md-3">
                <select
                  name=""
                  id="select"
                  className="form-control"
                  onChange={this.handleSelect}
                >
                  {/* filter based on car type and perkm rate */}
                  <option value="select">Search based on ...</option>
                  <option value="carType">Car Type</option>
                  <option value="perKmRate">Cheaper Cabs</option>
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
            this.state.cabData &&
            this.state.cabData.map((cab) => (
              <Fragment key={cab.cabId}>
                <div className="card" key={cab.cabId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">Cab ID</span>: {cab.cabId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Car Type</span>:{" "}
                          {cab.carType}
                        </h5>
                        <h5>
                          <span className="fw-bold">Per Km Rate</span>:{" "}
                          {cab.perKmRate}
                        </h5>
                      </div>

                      {/* editing cab details */}
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link to={"/admin/editCabType/" + cab.cabId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>
                      {/* deleting the cab */}
                        <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) => this.deleteCab(cab.cabId, e)}
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete cab</h5>
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
    cabData: state.cabReducer.viewCabs,
    deleteData: state.cabReducer.deleteCab,
  };
};

// used for selecting the part of the data from the store that the connected component needs
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCabs: () => dispatch(fetchCabs()),
    deleteCab: (cabId) => dispatch(deleteCab(cabId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CabViewComponent);
