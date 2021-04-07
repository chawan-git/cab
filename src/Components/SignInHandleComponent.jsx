import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";

class SignInHandleComponent extends Component {
  componentDidMount() {
    if (this.props.loginData.userType === "Admin") {
      localStorage.setItem(
        "Admin",
        JSON.stringify(this.props.loginData.admin.admin)
      );

      history.push("/admin/home");
    } else if (this.props.loginData.userType === "Driver") {
      localStorage.setItem(
        "Driver",
        JSON.stringify(this.props.loginData.driver.driver)
      );

      history.push("/driver/home");
    } else {
      localStorage.setItem(
        "Customer",
        JSON.stringify(this.props.loginData.customer.customer)
      );

      history.push("/customer/home");
    }
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.loginReducer,
  };
};

export default connect(mapStateToProps)(SignInHandleComponent);
