import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { insertAdmin } from "../redux/admin/adminActions";

// Author: Ashutosh Rao Chawan U
// Using a react class component for inserting a new admin to the cab application.
class AdminAddComponent extends Component {
  // The initial state of the admin entity.
  state = {
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };

  //This function runs when the component loads for the first time.
  componentDidMount() {
    //This call to the getData method makes sure only an admin can access this page, by checking the localStorage for an admin record.
    this.getData();
    //This line of code will listen to the change in the localStorage, if made any on any other tab on the same machine.
    window.addEventListener("storage", (e) => this.getData());
  }

  // This method is used to check the localStorage for the "Admin" record, if it's not there, we redirect the user to the unauthorized page.
  getData = () => {
    //localStorage.getItem is the method to get the record from the localStorage.
    if (localStorage.getItem("Admin")) {
    } else {
      //history.push will redirect to the url specified without refreshing the page.
      history.push("/unauthorized");
    }
  };

  //This method will be called when any change is made by the input tags in the page.
  handleChange = async (event) => {
    //async and await makes sure that the following method completes successfully and proceeds further.
    //this.setState is used to set the value of the input element to the state. This method will also re-render the component internally.
    await this.setState({ [event.target.name]: event.target.value });
  };

  //This method is called when the admin clicks on the insert admin button.
  handleSubmit = async (event) => {
    event.preventDefault();
    //this.props.insertAdmin is a mapDispatchToProps property written outside the class at the bottom of this file, which is used to call the insertAdmin method in the adminActions.js file, which is part of the redux framework.
    await this.props.insertAdmin(this.state);
    //This condition is to check if there are no errors while inserting and to redirect the screen to the viewAdmins component.
    if (!this.props.adminInsertData.error.message) {
      history.push("/admin/viewAdmins");
    }
  };

  //This method is used to render the below code on to the user screen
  render() {
    return (
      <>
        {/* We have used HTML, CSS, JS & Bootstrap to design the screen */}
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Add a new admin</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.adminInsertData.error.message}</h3>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the admin username (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  pattern="[A-Za-z0-9_-*]+"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="password">
                  <h6>
                    Enter the admin password (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  pattern=".{6}.*"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="email">
                  <h6>
                    Enter the admin email address (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="email"
                  name="email"
                  required={true}
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="mobile">
                  <h6>
                    Enter the admin mobile number (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="number"
                  name="mobileNumber"
                  pattern="(0/91)?[7-9][0-9]{9}"
                  required
                  value={this.state.mobileNumber}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="address">
                  <h6>
                    Enter the admin address (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <textarea
                  name="address"
                  rows="5"
                  required={true}
                  value={this.state.address}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <button type="submit" className="btn btn-dark">
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

// This mapStateToProps arrow function will map the insertAdmin state from the adminReducer of the redux store to adminInsertData to use in our code.
const mapStateToProps = (state) => ({
  adminInsertData: state.adminReducer.insertAdmin,
});

//This mapDispatchToProps is used to call the insertAdmin of the adminActions.js file in the redux folder.
const mapDispatchToProps = { insertAdmin };

//In the following line, we are connecting the mapStateToProps & mapDispatchToProps to the AdminAddComponent and th react store and exporting it, so that, it could be imported by the other reactJS files.
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddComponent);
