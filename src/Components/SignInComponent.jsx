import React, { Component } from "react";
import logo from "../logo.png";

import { connect } from "react-redux";
import { fetchUser } from "../redux/";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { Link } from "react-router-dom";

class SignInComponent extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.fetchUser(this.state);
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
              <h3>Get moving with Kaali Peeli</h3>
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
                <div>
                  <Link to="/resetPassword">
                    <h5>Reset Password?</h5>
                  </Link>
                </div>
                <br />
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-dark col-12 fw-bold"
                >
                  Sign In
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
    loginData: state.loginReducer,
  };
};

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
