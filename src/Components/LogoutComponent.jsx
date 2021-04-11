/*
Ankitha Suraksha
*/

//Import statements//
import React, { Component } from "react";
import Logo from "../logo.png";
import { Grid } from "@material-ui/core";
import history from "../history";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class LogoutComponent extends Component {
  componentDidMount() {
    localStorage.clear();
  /*setTimeout function sets a timer which executes a function or 
    specified piece of code once the timer expires*/
    setTimeout(function () {
      history.push("/");
    }, 5000);
  }
  render() {
    return (
      <>
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
          <h3> Thank you for visiting KaaliPeeli</h3>
          <h5> You have been successfully logged out! </h5>
          <br />
          <h6>You'll be redirected to the home page in few seconds.</h6>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <FooterComponent />
      </>
    );
  }
}
//export statement//
export default LogoutComponent;
