/*
Author :Arfath Pasha
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import logo from "../logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import history from "../history";

export class CustomerHeaderComponent extends Component {
  //componentDidMount is executed after the first render only on the client side. 
  
  componentDidMount(){
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //client-side Logout session
  handleLogout = () => {
    localStorage.clear();
  };
  //redering Customer's Header elements
  
  render() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-top">
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

              <li className="nav-item text-center">
                <Link
                  to="/customer/home"
                  className="nav-link fw-bold text-white fs-5"
                >
                  Dashboard
                </Link>
              </li>

  
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold text-white fs-5"
                  href="/admin"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AccountCircleOutlinedIcon
                    fontSize="large"
                    className="mb-1"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link to="/customer/profile" className="dropdown-item">
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer/viewTrips" className="dropdown-item">
                      View Trips
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="dropdown-item"
                      onClick={this.handleLogout}
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default CustomerHeaderComponent;
