/*
Author :Arfath Pasha
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { updateCustomer1, fetchCustomer } from "../redux";

class CustomerEditComponent extends Component {
  //defining state with object Customer -
  //it is an object that holds some information that may change over the lifetime of the component.

  state = {
    customerId: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    address: "",
  };
//componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  
  async componentDidMount() {
    console.log(this.props);
    await this.props.fetchCustomer(this.props.match.params.id);
    const { customerFetchData } = this.props;
    customerFetchData &&
      customerFetchData.customer &&
      (await this.setState({
        customerId: customerFetchData.customer.customerId,
        username: customerFetchData.customer.username,
        password: customerFetchData.customer.password,
        email: customerFetchData.customer.email,
        mobileNumber: customerFetchData.customer.mobileNumber,
        address: customerFetchData.customer.address,
      }));
      //getData() method retrieves drag data (as a DOMString ) for the specified type.
    
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
//handle change event for customer object
  
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateCustomer1(this.state);
    if(!this.props.customerUpdateData.error.message)
    history.push("/admin/viewCustomers");
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Edit customer {this.state.username}</h2>
            </div>
          </div>
          <hr />
          {/* Form rendering for Customer Details */}

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
  customerFetchData: state.customerReducer.fetchCustomer,
});
//mapDispatchToProps is a utility which will help your component to fire an action event 

const mapDispatchToProps = { updateCustomer1, fetchCustomer };
//exporting
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerEditComponent);
