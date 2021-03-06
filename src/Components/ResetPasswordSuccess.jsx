/*
Ankitha Suraksha
*/

//Import statements//
import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Logo from "../logo.png";
import { Grid } from "@material-ui/core";
import history from "../history";
export class ResetPasswordSuccess extends Component {
  //componentDidMount is executed after the first render only on the client side. 
  /*setTimeout function sets a timer which executes a function or 
    specified piece of code once the timer expires*/
  componentDidMount() {
    localStorage.clear();
    setTimeout(function () {
      history.push("/login");
    }, 5000);
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid align="center">
          <img src={Logo} width="130" alt="logo" />
          <br />
          <br />
          <h3> Password Reset Successfully!</h3>
          <h5> Your password was reset successfully! </h5>
          <br />
          <h6>You'll be redirected to the login page in few seconds.</h6>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <FooterComponent />
      </div>
    );
  }
}
//export statement //
export default ResetPasswordSuccess;
