import React, { Component } from "react";
import logo from "../logo.png";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { Link } from "react-router-dom";

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

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              </ul>

              <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-white fs-5"
                    href="https://cab.rao.life/"
                  >
                    
                    <PersonOutlineRoundedIcon style={{ color: "white" }} className="mb-1"/> Sign
                    In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link me-2 fw-bold text-dark rounded-pill fs-5"
                    href="https://cab.rao.life/"
                    style={{ background: "#ffeb3b" }}
                  >
                    Sign Up
                  </a>
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
