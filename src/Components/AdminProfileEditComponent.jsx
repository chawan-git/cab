import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateAdmin } from "../redux";

// Author: Ashutosh Rao Chawan U
// This class component of react is used to edit the individual profile settings of the admin.
class AdminProfileEditComponent extends Component {

  // This is the initialState of the admin entity.
  state = {
    adminId: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };

  // This componentDidMount() method is called once the react component loads for the first time.
  adminFetchData = {};
  async componentDidMount() {
    this.adminFetchData = JSON.parse(localStorage.getItem("Admin"));

    this.adminFetchData &&
      (await this.setState({
        adminId: this.adminFetchData.adminId,
        username: this.adminFetchData.username,
        password: this.adminFetchData.password,
        email: this.adminFetchData.email,
        mobileNumber: this.adminFetchData.mobileNumber,
        address: this.adminFetchData.address,
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

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateAdmin(this.state);
    localStorage.setItem("Admin", JSON.stringify(this.state));
    if(!this.props.adminUpdateData.error.message){
      history.push("/admin/home");
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit admin {this.adminFetchData.username}</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.adminUpdateData.error.message}</h3>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the admin username (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  pattern="[A-Za-z0-9_-*]+"
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
                    Enter the admin password (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="password"
                  name="password"
                  pattern=".{6}.*"
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
                    Enter the admin email address (required){" "}
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
                    Enter the admin mobile number (required){" "}
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
                <label htmlFor="address">
                  <h6>
                    Enter the admin address (required){" "}
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
                  Update Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  adminUpdateData: state.adminReducer.updateAdmin,
});
const mapDispatchToProps = { updateAdmin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProfileEditComponent);
