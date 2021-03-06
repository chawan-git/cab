/* 
D Sri Madhu Priya
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateCab, fetchCab } from "../redux";

class CabEditComponent extends Component {
  // properties that control the behavior of the component
  state = {
    cabId: "",
    carType: "",
    perKmRate: "",
  };

  async componentDidMount() {
    await this.props.fetchCab(this.props.match.params.id);
    const { cabFetchData } = this.props;
    cabFetchData &&
      cabFetchData.cab &&
      (await this.setState({
        cabId: cabFetchData.cab.cabId,
        carType: cabFetchData.cab.carType,
        perKmRate: cabFetchData.cab.perKmRate,
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

  //Handling change event
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  //Handling submit event
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateCab(this.state);
    history.push("/admin/viewCabTypes");
  };

// updating cab details
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit Cab {this.state.carType}</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.cabUpdateData.error.message}</h3>
              </div>
            </div>
            <br />

          {/* entering the cab details for updating*/}
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="cabId">
                  <h6>
                    Enter the cab Id (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="cabId"
                  pattern="[0-9]"
                  required
                  value={this.state.cabId}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Cab Id"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="carType">
                  <h6>
                    Enter the car type (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="carType"
                  pattern="[a-zA-Z0-9 ]+"
                  required
                  value={this.state.carType}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Car Type"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="perKmRate">
                  <h6>
                    Enter the per km rate for cab (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="perKmRate"
                  pattern="^(\\d+(\\.\\d{0,2})?|\\.?\\d{1,2})$"
                  required
                  value={this.state.perKmRate}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Per Km Rate"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Update Cab
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
// used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = (state) => ({
  cabUpdateData: state.cabReducer.updateCab,
  cabFetchData: state.cabReducer.fetchCab,
});
// utility which will help component to fire an action event
const mapDispatchToProps = { updateCab, fetchCab };

export default connect(mapStateToProps, mapDispatchToProps)(CabEditComponent);
