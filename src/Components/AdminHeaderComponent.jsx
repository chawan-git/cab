import React, { Component } from "react";
import logo from "../logo.png";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import LocalTaxiOutlinedIcon from "@material-ui/icons/LocalTaxiOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import history from "../history";

export class AdminHeaderComponent extends Component {
  handleLogout = () => {
    localStorage.clear();
  };
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
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

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link
                    to="/admin/home"
                    className="nav-link fw-bold text-white fs-5"
                    href="/admin"
                  >
                    <HomeOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="default"
                      className="mb-1"
                    />
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-bold text-white fs-5"
                    href="/admin"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <SupervisorAccountOutlinedIcon
                      fontSize="default"
                      className="mb-1"
                    />
                    Admin
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link to="/admin/addAdmin" className="dropdown-item">
                        Add Admin
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/viewAdmins" className="dropdown-item">
                        View Admins
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-bold text-white fs-5"
                    href="/admin"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <LocalTaxiOutlinedIcon
                      fontSize="default"
                      className="mb-1"
                    />
                    Cab
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link to="/admin/addCabType" className="dropdown-item">
                        Add Cab Type
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/viewCabTypes" className="dropdown-item">
                        View Cab Types
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-bold text-white fs-5"
                    href="/admin"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AssignmentIndOutlinedIcon
                      fontSize="default"
                      className="mb-1"
                    />
                    Driver
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link to="/admin/addDriver" className="dropdown-item">
                        Add Driver
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/viewDrivers" className="dropdown-item">
                        View Drivers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/viewCustomers"
                    className="nav-link fw-bold text-white fs-5"
                  >
                    <EmojiPeopleOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="default"
                      className="mb-1"
                    />
                    Customers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/admin/viewTrips"
                    className="nav-link fw-bold text-white fs-5"
                  >
                    <LoyaltyOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="default"
                      className="mb-1"
                    />
                    Trips
                  </Link>
                </li>
              </ul>

              {/* <ul className="nav nav-pills justify-content-end"> */}
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
                    <Link to="/admin/profile" className="dropdown-item">
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="dropdown-item"
                      href="/logout"
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

export default AdminHeaderComponent;
