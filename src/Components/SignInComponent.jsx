/*
Ankitha Suraksha
*/

//Import statements//
import React, { Component } from "react";
 // insert logo image 
import logo from "../logo.png"; 
// connect react to redux
import { connect } from "react-redux";  
import { fetchUser } from "../redux/";     
import FooterComponent from "./FooterComponent";  
import HeaderComponent from "./HeaderComponent";  
import { Link } from "react-router-dom";  

class SignInComponent extends Component {
  /*state is defined as  an 
  object of a set of observable properties that control the behavior of the component*/
  state = {
    username: "",
    password: "",
  };
//Handling change event
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };
//Handling submit event
 //await - used for making the code readable.
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
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    loginData: state.loginReducer,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = { fetchUser };
//export statement//
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
