import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCab, fetchCabs } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

class CabViewComponent extends Component {
  componentDidMount() {
    this.props.fetchCabs();
  }
  async deleteCab(cabId, e) {
    e.preventDefault();
    this.props.deleteCab(cabId);
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
          <br />
          {cabData &&
            cabData.cabs &&
            cabData.cabs.map((cab) => (
              <Fragment key={cab.cabId}>
                <div className="card" key={cab.cabId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">Cab ID</span> :{" "}
                          {cab.cabId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Car Type</span>:{" "}
                          {cab.carType}
                        </h5>
                        <h5>
                          <span className="fw-bold">perKmRate</span> :{" "}
                          {cab.perKmRate}
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link to={"/admin/editCabType/" + cab.cabId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCabs: () => dispatch(fetchCabs()),
    deleteCab: (cabId) => dispatch(deleteCab(cabId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CabViewComponent);
