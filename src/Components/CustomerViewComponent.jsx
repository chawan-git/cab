/*
Author :Arfath Pasha
*/

//imports statemets to use the exported requests/methods in this components
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCustomer, fetchCustomers } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class CustomerViewComponent extends Component {
  //Handling Search Event
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;
    if (target.value === "")
      this.setState({
        ...this.state,
        customerData: this.props.customerData.customers,
      });
      // search based on username
    else if (option === "username") {
      this.setState({
        ...this.state,
        customerData: this.props.customerData.customers.filter((x) =>
          x.username.includes(target.value)
        ),
      });
      // search based on mobile number
    } else if (option === "mobileNumber") {
      this.setState({
        ...this.state,
        customerData: this.props.customerData.customers.filter((x) =>
          x.mobileNumber.includes(target.value)
        ),
      });
      // search based on email
    } else if (option === "email") {
      this.setState({
        ...this.state,
        customerData: this.props.customerData.customers.filter((x) =>
          x.email.includes(target.value)
        ),
      });
    } else {
      this.setState({
        ...this.state,
      });
    }
  };
//handling select event
  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  //defining state 
  state = {
    customerData: [],
    filterOption: "",
  };

  async componentDidMount() {
    //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  
    await this.props.fetchCustomers();
    await this.setState({
      ...this.state,
      customerData: this.props.customerData.customers,
    });
    //getData() method retrieves drag data (as a DOMString ) for the specified type.
    
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };//delete customer method-by id
  async deleteCustomer(customerId, e) {
    e.preventDefault();
    await this.props.deleteCustomer(customerId);
    if (!this.props.deleteData.error.message) {
      await this.setState({
        ...this.state,
        customerData: this.props.customerData.customers.filter(
          (customer) => customer.customerId !== customerId
        ),
      });
    }
  }
//rendring Customer details
  render() {
    const { customerData } = this.props;
    return customerData.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Customers List</h1>
          <div className=" d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-grow float-right text-success ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </>
    ) : customerData.error ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of customers</h2>
          <div className="alert alert-danger" role="alert">
            {customerData.error.message}
          </div>
        </div>
      </>
    ) : customerData.customers.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of customers</h2>
          <div className="alert alert-danger" role="alert">
            No Customers Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />
          <h2 className="text-center">List of customers</h2>
          <form>
            <div className="row">
              <div className="col-md-3">
                <select
                  name=""
                  id="select"
                  className="form-control"
                  onChange={this.handleSelect}
                >
                  <option value="select">Search based on ...</option>
                  <option value="username">Username</option>
                  <option value="email">Email</option>
                  <option value="mobileNumber">Mobile number</option>
                </select>
              </div>
              <div className="col-md-9">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={this.handleSearch}
                  aria-label="Search"
                />
              </div>
            </div>
          </form>
          <br />
          <h3>{this.props.deleteData.error.message}</h3>

          <br />
          {this.state &&
            this.state.customerData &&
            this.state.customerData.map((customer) => (
              <Fragment key={customer.customerId}>
                <div className="card" key={customer.customerId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">customer ID</span> :{" "}
                          {customer.customerId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Username </span>:{" "}
                          {customer.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">Password </span> :{" "}
                          {customer.password}
                        </h5>
                        <h5>
                          <span className="fw-bold">Email address </span> :{" "}
                          {customer.email}
                        </h5>
                        <h5>
                          <span className="fw-bold">Mobile number </span>:{" "}
                          {customer.mobileNumber}
                        </h5>
                        <h5>
                          <span className="fw-bold">Address </span> :{" "}
                          {customer.address}
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link
                            to={"/admin/editCustomer/" + customer.customerId}
                          >
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>

                        <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) =>
                            this.deleteCustomer(customer.customerId, e)
                          }
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete customer</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
              </Fragment>
            ))}
        </div>
      </>
    );
  }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.

const mapStateToProps = (state) => {
  return {
    customerData: state.customerReducer.viewCustomers,
    deleteData: state.customerReducer.deleteCustomer,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers()),
    deleteCustomer: (customerId) => dispatch(deleteCustomer(customerId)),
  };
};
//exporting Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerViewComponent);
