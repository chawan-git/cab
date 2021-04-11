import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Logo from "../logo.png";
import { Grid } from "@material-ui/core";
import history from "../history";

// Author: Ashutosh Rao Chawan U
// This class component is used to display the unauthorized screen to the user when he / she tries to access a restricted resource of the application.
export class Unauthorized extends Component {
  // This method is called when the component loads for the first time.
  componentDidMount() {

    // Calling the localStorage.clear method will clear all the data stored in the localStorage making the logins invalid.
    localStorage.clear();

    // Setting the timeout function to redirect to the home screen after 5 seconds.
    setTimeout(function () {
      history.push("/");
    }, 5000);
  }

  // The render method to display the content on the screen.
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
          <h3> Not Authorized</h3>
          <h5>
            {" "}
            You have have either logged out or tried to access a restricted
            resource!{" "}
          </h5>
          <br />
          <h6>You'll be redirected to the home page in few seconds.</h6>
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

// Exporting the component, so that, it could be used by other components by importing it.
export default Unauthorized;
