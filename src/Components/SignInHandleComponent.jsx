/*
Ankitha Suraksha
*/

//Import statements//
import { Component } from "react";
import { connect } from "react-redux";
// History is a tool to manage session history in react.
import history from "../history";

class SignInHandleComponent extends Component {
  //componentDidMount is executed after the first render only on the client side.
  componentDidMount() {
    if (this.props.loginData.userType === "Admin") {
      localStorage.setItem(
        "Admin",
        //The JSON.stringify() method converts a JavaScript object or value to a JSON
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
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    loginData: state.loginReducer,
  };
};
//export statement
export default connect(mapStateToProps)(SignInHandleComponent);
