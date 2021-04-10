import React, { Component } from "react";
import logo from "../logo.png";

import { connect } from "react-redux";
import {
  fetchCustomerByUsername,
  fetchCustomerByEmail,
  fetchCustomerByMobileNumber,
} from "../redux/";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

class ResetPasswordComponent extends Component {
  state = {
    username: "",
    choiceState: {
      choice: "Username",
    },
  };

  handleChoice = async (event) => {
    var choiceState = {
      ...this.state.choiceState,
    };

    choiceState.choice = event.target.value;
    await this.setState({ choiceState });
  };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.choiceState.choice === "Username") {
      await this.props.fetchCustomerByUsername(this.state.username);
    } else if (this.state.choiceState.choice === "Email address") {
      await this.props.fetchCustomerByEmail(this.state.username);
    } else {
      await this.props.fetchCustomerByMobileNumber(this.state.username);
    }
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <br />
        <br />
        <br />
        <br />
        <div className="container h-100 d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: 130, width: 130 }}
                  className="d-inline-block me-2 ms-1"
                />
              </div>
              <br />
              <h3 className="text-center">Reset Password</h3>
              <br />

              <div className="form-group">
                <label htmlFor="username">
                  <h5>
                    How would you like to reset your password?
                    <span className="text-danger">*</span> (required)
                  </h5>
                </label>
                <select
                  name="choice"
                  value={this.state.choiceState.choice}
                  onChange={this.handleChoice}
                  className="form-control"
                  required
                >
                  <option value="Username">Username</option>
                  <option value="Email address">Email address</option>
                  <option value="Mobile Number">Mobile Number</option>
                </select>
              </div>
              <br />

              <form>
                <div className="row">
                  <div className="col">
                    <h3>{this.props.loginData.error.message}</h3>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">
                    <h5>
                      Enter your {this.state.choiceState.choice}
                      <span className="text-danger">*</span> (required)
                    </h5>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder={this.state.choiceState.choice}
                    required="required"
                  />
                </div>
                <br />

                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-dark col-12 fw-bold"
                >
                  Next
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

const mapStateToProps = (state) => {
  return {
    loginData: state.loginReducer.customer,
  };
};

const mapDispatchToProps = {
  fetchCustomerByUsername,
  fetchCustomerByEmail,
  fetchCustomerByMobileNumber,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordComponent);
