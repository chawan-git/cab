/**
 * Ankitha Suraksha
 */

// Import statements //
import React, { Component } from "react";
import { connect } from "react-redux";
import { insertCustomer } from "../redux";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import logo from "../logo.png";

class CustomerAddComponent extends Component {
  /*state is defined as  an 
  object of a set of observable properties that control the behavior of the component*/
  state = {
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };
  //Handling change event//
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };
  //Handling submit event//
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.insertCustomer(this.state);
  };
  // Rendering input text boxes
  render() {
    return (
      <div>
        <HeaderComponent />

        <div className="container h-100 d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <br />
              <div className="text-center">
                <img // Insertion of the logo
                  src={logo}
                  alt="logo"
                  style={{ height: 130, width: 130 }}
                  className="d-inline-block me-2 ms-1"
                />
              </div>
              <br />
              <h3>Get moving with Kaali Peeli</h3>
              <br />

              <form>
                <div className="row">
                  <div className="col">
                    <h3>{this.props.customerInsertData.error.message}</h3>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">
                    <h5>
                      Enter your username<span className="text-danger">*</span>{" "}
                      (required)
                    </h5>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password">
                    <h5>
                      Enter your password<span className="text-danger">*</span>{" "}
                      (required)
                    </h5>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="email">
                    <h5>
                      Enter your email address
                      <span className="text-danger">*</span> (required)
                    </h5>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="mobileNumber">
                    <h5>
                      Enter your mobile number
                      <span className="text-danger">*</span> (required)
                    </h5>
                  </label>
                  <input
                    type="number"
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Mobile number"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="address">
                    <h5>
                      Enter your address<span className="text-danger">*</span>{" "}
                      (required)
                    </h5>
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
                <br />
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-dark col-12 fw-bold"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterComponent />
      </div>
    );
  }
}
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => ({
  customerInsertData: state.signupReducer,
});
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = { insertCustomer };
//Export statements
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerAddComponent);
