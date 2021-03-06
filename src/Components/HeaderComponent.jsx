import React, { Component } from "react";
import logo from "../logo.png";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { Link } from "react-router-dom";

// Author: Ashutosh Rao Chawan U
// This is used to render the Bootstrap header and the navigation bar on the home page
export class HeaderComponent extends Component {
  render() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-md-top">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: 50, width: 50 }}
                  className="d-inline-block me-2 ms-1"
                />
                <span className="text-white h2 fw-bolder align-middle">
                  Kaali
                </span>
                <span
                  className=" h2  fw-bolder align-middle"
                  style={{ color: "#ffeb3b" }}
                >
                  Peeli
                </span>
              </Link>

              <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link fw-bold text-white fs-5"
                    onClick={this.handleLogin}
                  >
                    <PersonOutlineRoundedIcon
                      style={{ color: "white" }}
                      className="mb-1"
                    />{" "}
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signUp"
                    className="nav-link me-2 fw-bold text-dark rounded-pill fs-5"
                    style={{ background: "#ffeb3b" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default HeaderComponent;
