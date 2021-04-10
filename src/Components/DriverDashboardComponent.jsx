import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateDriver } from "../redux";

class DriverDashboardComponent extends Component {
  state = {
    driver: {
      driverId: "",
      username: "",
      password: "",
      address: "",
      mobileNumber: "",
      email: "",
      licenseNo: "",
      rating: "",
      status: "",
      cab: {
        cabId: "",
        carType: "",
        perKmRate: "",
      },
    },
  };

  async componentDidMount() {
    await this.setState({
      driver: JSON.parse(localStorage.getItem("Driver")),
    });
    console.log(this.state);
    if (this.state.driver.status === "Available") {
      history.push("/trip/" + this.state.driver.username + "/driver");
    }
    // await this.setState({
    //   driver: {
    //     ...this.state.driver,
    //     status: "NotAvailable"
    //   }
    // })
    // localStorage.setItem("Driver",JSON.stringify(this.state.driver))
    // await this.props.updateDriver(this.state.driver);
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };
  handleAvailability = async (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      await this.setState({
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "Available",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    } else {
      await this.setState({
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "NotAvailable",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    }
    console.log(this.state);
    await this.props.updateDriver(this.state.driver);
    if (e.target.checked === true) {
      history.push("/trip/" + this.state.driver.username + "/driver");
    }
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                Welcome to the Driver Dashboard
              </h2>
              <hr />
              <div className="row ">
                <div className="col offset-5">
                  <div className="form-check form-switch ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={this.handleAvailability}
                      checked={
                        this.state.driver.status === "Available" ? true : false
                      }
                    />

                    <label
                      className="form-check-label fw-bold"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Availability
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { updateDriver };

export default connect(null, mapDispatchToProps)(DriverDashboardComponent);
