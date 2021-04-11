import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateAdmin, fetchAdmin } from "../redux/admin/adminActions";

// Author: Ashutosh Rao Chawan U
// Using a react class component for editing / updating an admin to the cab application.
class AdminEditComponent extends Component {
  // The initial state of the admin entity.
  state = {
    adminId: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };

  //This method is called when the component is rendered for the first time. 
  async componentDidMount() {
    //This call is made to the adminActions.js file which fetches the admin details from the API by the adminId.
    await this.props.fetchAdmin(this.props.match.params.id);
    const { adminFetchData } = this.props;
    //Here, we are setting the state based on the data we fetched from the API.
    adminFetchData &&
      adminFetchData.admin &&
      (await this.setState({
        adminId: adminFetchData.admin.adminId,
        username: adminFetchData.admin.username,
        password: adminFetchData.admin.password,
        email: adminFetchData.admin.email,
        mobileNumber: adminFetchData.admin.mobileNumber,
        address: adminFetchData.admin.address,
      }));

    //This method call is used to check for the authorization of an admin, if not registered in the localStorage, it redirects to the unauthorized page. 
    this.getData();
    //This line of code is used to listen to any change in the localStorage, which when called, calls the getData method again to check if the admin had logged out in an another tab or not and redirect him/her accordingly.
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

  //This method is called when the admin clicks on the update admin button.
  handleSubmit = async (event) => {
    event.preventDefault();

    //this.props.updateAdmin is a mapDispatchToProps property written outside the class at the bottom of this file, which is used to call the updateAdmin method in the adminActions.js file, which is part of the redux framework.
    await this.props.updateAdmin(this.state);
    //This condition is to check if there are no errors while inserting and to redirect the screen to the viewAdmins component.
    if(!this.props.adminUpdateData.error.message){
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
              <h2>Edit admin {this.state.username}</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.adminUpdateData.error.message}</h3>
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
                  required
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
                  pattern="(0/91)?[6-9][0-9]{9}"
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
                  required
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
                  Update Admin
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </>
    );
  }
}

// This mapStateToProps arrow function will map the updateAdmin state from the adminReducer of the redux store to adminUpdateData to use in our code.
const mapStateToProps = (state) => ({
  adminUpdateData: state.adminReducer.updateAdmin,
  adminFetchData: state.adminReducer.fetchAdmin,
});

//This mapDispatchToProps is used to call the updateAdmin & fetchAdmin of the adminActions.js file in the redux folder.
const mapDispatchToProps = { updateAdmin, fetchAdmin };

//In the following line, we are connecting the mapStateToProps & mapDispatchToProps to the AdminAddComponent and exporting it, so that, it could be imported by the other reactJS files.
export default connect(mapStateToProps, mapDispatchToProps)(AdminEditComponent);
