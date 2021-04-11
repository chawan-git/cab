/* 
D Sri Madhu Priya
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { insertCab } from "../redux/cab/cabActions";

class CabAddComponent extends Component {
  // properties that control the behavior of the component
  state = {
    //cabId is auto generated
    carType: "",
    perKmRate: "",
  };

  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  //if invalid action is chosen
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
    await this.props.insertCab(this.state);
    if (!this.props.insertCabData.error.message)
      history.push("/admin/viewCabTypes");
  };
  
// adding a new cab
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Add a new cab</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.insertCabData.error.message}</h3>
              </div>
            </div>
            <br />

{/* entering the details of a new cab */}
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
                    Enter the per km rate (required){" "}
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
                  placeholder="Per Km Rate"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Add Cab
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
// used for selecting the part of the data from the store that the connected component needs
function mapStateToProps(state) {
  return {
    insertCabData: state.cabReducer.insertCab,
  };
}
// utility which will help component to fire an action event
const mapDispatchToProps = { insertCab };

export default connect(mapStateToProps, mapDispatchToProps)(CabAddComponent);
