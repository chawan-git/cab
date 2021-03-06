/*
Author :Arfath Pasha
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateCustomer1 } from "../redux";

class CustomerProfileEditComponent extends Component {
  //defining state with nested obejcts  -
  //it is an object that holds some information that may change over the lifetime of the component.
  
  state = {
    customerId: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };

  customerFetchData = {};
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  
  async componentDidMount() {
    this.customerFetchData = JSON.parse(localStorage.getItem("Customer"));

    this.customerFetchData &&
    //setState will accept an Object that will be eventually merged into Components current state.
      
      (await this.setState({
        customerId: this.customerFetchData.customerId,
        username: this.customerFetchData.username,
        password: this.customerFetchData.password,
        email: this.customerFetchData.email,
        mobileNumber: this.customerFetchData.mobileNumber,
        address: this.customerFetchData.address,
      }));

    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateCustomer1(this.state);
    if(!this.props.customerUpdateData.error.message){
    localStorage.setItem("Customer", JSON.stringify(this.state));
    history.push("/customer/home");
    }
  };
//rendering Customer Profile Details
  
  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit customer {this.customerFetchData.username}</h2>
            </div>
          </div>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>{this.props.customerUpdateData.error.message}</h3>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-6 offset-md-3 form-group">
                <label htmlFor="username">
                  <h6>
                    Enter the customer username (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="text"
                  name="username"
                  required
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
                    Enter the customer password (required){" "}
                    <span className="text-danger">*</span>
                  </h6>
                </label>
                <input
                  type="password"
                  name="password"
                  required
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
                    Enter the customer email address (required){" "}
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
                    Enter the customer mobile number (required){" "}
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
                    Enter the customer address (required){" "}
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
                  Update Customer
                </button>
              </div>
            </div>
          </form>
        </div>
        )
      </>
    );
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.

const mapStateToProps = (state) => ({
  customerUpdateData: state.customerReducer.updateCustomer,
});
//mapDispatchToProps is a utility which will help your component to fire an action event 

const mapDispatchToProps = { updateCustomer1 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerProfileEditComponent);
