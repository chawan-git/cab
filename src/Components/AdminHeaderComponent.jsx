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

export class AdminHeaderComponent extends Component {
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
                      <a className="dropdown-item" href="/admin/addCabType">
                        Add Cab Type
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin/viewCabTypes">
                        View Cab Types
                      </a>
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
                      <a className="dropdown-item" href="/admin/addDriver">
                        Add Driver
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin/viewDrivers">
                        View Drivers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-white fs-5"
                    href="/admin/viewCustomers"
                  >
                    <EmojiPeopleOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="default"
                      className="mb-1"
                    />
                    Customers
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-white fs-5"
                    href="/admin/viewTrips"
                  >
                    <LoyaltyOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="default"
                      className="mb-1"
                    />
                    Trips
                  </a>
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
                    <a className="dropdown-item" href="/admin/profile">
                      Profile Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>

              {/* </ul> */}
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default AdminHeaderComponent;
