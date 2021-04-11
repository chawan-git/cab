/*
Ankitha Suraksha
*/

//Import statements//
import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import logo from "../logo.png";
import FooterComponent from "./FooterComponent";
import { fetchCustomerByUsername1, updateCustomer } from "../redux";

class ResetPasswordComponent1 extends Component {
  state = {
    customerId: 0,
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };
//componentDidMount is executed after the first render only on the client side. 
  async componentDidMount() {
    await this.props.fetchCustomerByUsername1(this.props.match.params.username);

    const { userData } = this.props;

    userData &&
      userData.customer &&
      //await - used for making the code readable.
      (await this.setState({
        customerId: userData.customer.customerId,
        username: userData.customer.username,
        password: userData.customer.password,
        email: userData.customer.email,
        mobileNumber: userData.customer.mobileNumber,
        address: userData.customer.address,
      }));
  }
 // Handling Change event
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };
// Handling submit event
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateCustomer(this.state);
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
              <h3 className="text-center">
                Hi, {this.props.userData.customer.username}!
              </h3>
              <br />
              <form>
                <div className="form-group">
                  <label htmlFor="password">
                    <h5>
                      Enter your new password
                      <span className="text-danger">*</span> (required)
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
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-dark col-12 fw-bold"
                >
                  Reset Password
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
    userData: state.loginReducer.customer,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event
const mapDispatchToProps = { fetchCustomerByUsername1, updateCustomer };
//export statement//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordComponent1);
