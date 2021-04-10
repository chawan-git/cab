import React, { Component } from "react";
import logo from "../logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWallet } from "../redux";

export class DriverHeaderComponent extends Component {
  handleLogout = () => {
    localStorage.clear();
  };
  async componentDidMount() {
    await this.props.fetchWallet(
      JSON.parse(localStorage.getItem("Driver")).driverId
    );
  }
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
                  to="/driver/home"
                  className="nav-link fw-bold text-white fs-5"
                >
                  Dashboard
                </Link>
              </li>

              {/* <ul className="nav nav-pills justify-content-end"> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold text-white fs-5"
                  href="/driver"
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
                    <Link to="/driver/profile" className="dropdown-item">
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/driver/tripHistory" className="dropdown-item">
                      Trip History
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
                  <hr />
                  <li>
                    <div className="dropdown-item">
                      <b>Balance: </b> {this.props.fetchWalletData.balance}
                    </div>
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
const mapStateToProps = (state) => {
  return {
    fetchWalletData: state.driverReducer.fetchWallet,
  };
};
const mapDispatchToProps = { fetchWallet };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverHeaderComponent);
