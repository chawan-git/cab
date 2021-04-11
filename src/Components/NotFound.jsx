import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Logo from "../logo.png";
import { Grid } from "@material-ui/core";
import history from "../history";

// Author: Ashutosh Rao Chawan U
// This component is called when the url does not match with any of the routes or links.
export class NotFound extends Component {
  componentDidMount() {
    localStorage.clear();
    setTimeout(function () {
      history.push("/");
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
          <h3> Not Found</h3>
          <h5> Your requested resource was not found! </h5>
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

export default NotFound;
