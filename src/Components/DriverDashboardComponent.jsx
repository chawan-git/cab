/*
Author :BHARAT SINGH
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";//connet react-redux
import history from "../history";
import { updateDriver } from "../redux";

class DriverDashboardComponent extends Component {
  //defining state with nested obejcts driver/cab-
  //it is an object that holds some information that may change over the lifetime of the component.
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
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  async componentDidMount() { //async/await -It makes code cleaner and readable.
    await this.setState({
      driver: JSON.parse(localStorage.getItem("Driver")),
    });
    if (this.state.driver.status === "Available") {
      history.push("/trip/" + this.state.driver.username + "/driver");
    }
    //getData() method retrieves drag data (as a DOMString ) for the specified type.
    //If the drag operation does not include data, this method returns an empty string.
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Driver")) {
    } else {
      history.push("/unauthorized");
    }
  };
  //method definition to find the status of driver-avialable/Not-available through toggle switch 
  handleAvailability = async (e) => {    
    if (e.target.checked === true) {                 //if toggle switch is clicked it says driver is available
      await this.setState({
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "Available",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    } else {
      await this.setState({                          // else driver not Available
        ...this.state,
        driver: {
          ...this.state.driver,
          status: "NotAvailable",
        },
      });
      localStorage.setItem("Driver", JSON.stringify(this.state.driver));
    }
    //based on toggle switch driver status will be updated to available/Not available
    //and Driver available will be sent to trip component
    await this.props.updateDriver(this.state.driver);
    if (e.target.checked === true) {
      history.push("/trip/" + this.state.driver.username + "/driver");
    }
  };
  render() { //responsible for describing the view to be rendered to the browser window.
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
                      onChange={this.handleAvailability}//driver availability method calling
                      checked={
                        this.state.driver.status === "Available" ? true : false //checking if available or not
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

const mapDispatchToProps = { updateDriver };// mapDispatchToProps is a utility which will help your component to fire an action event 

export default connect(null, mapDispatchToProps)(DriverDashboardComponent);//exporting component
