import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCustomer, fetchCustomers } from "../redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

class CustomerViewComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }
  async deleteCustomer(customerId, e) {
    e.preventDefault();
    this.props.deleteCustomer(customerId);
  }

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
          <br />
          {customerData &&
            customerData.customers &&
            customerData.customers.map((customer) => (
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
                          <Link to={"/admin/editCustomer/" + customer.customerId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>

                        <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) => this.deleteCustomer(customer.customerId, e)}
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
const mapStateToProps = (state) => {
  return {
    customerData: state.customerReducer.viewCustomers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers()),
    deleteCustomer: (customerId) => dispatch(deleteCustomer(customerId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerViewComponent);
