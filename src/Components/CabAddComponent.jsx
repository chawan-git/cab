import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { insertCab } from "../redux/cab/cabActions";

class CabAddComponent extends Component {
  state = {
    carType: "",
    perKmRate: "",
  };

  componentDidMount() {
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

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.insertCab(this.state);
    history.push("/admin/viewCabTypes");
  };

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
                {/* <h3>{this.props.cabInsertData.error.message}</h3> */}
              </div>
            </div>
            <br />

            {/* <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="cabId">
                  <h6>
                    Enter the cab Id (required){" "}
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
                  placeholder="Cab Id"
                />
              </div>
            </div> */}
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
function mapStateToProps(state) {
  return {
    insertCabData: state.cabReducer.insertCab,
  };
}
const mapDispatchToProps = { insertCab };

export default connect(mapStateToProps, mapDispatchToProps)(CabAddComponent);
