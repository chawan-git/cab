import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../redux";
import AdminHeaderComponent from "./AdminHeaderComponent";
import FooterComponent from "./FooterComponent";
class AdminHomeComponent extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  render() {
    const { adminData } = this.props;
    return adminData.loading ? (
      <>
        <AdminHeaderComponent />
        <div className="container">
          <h1 className="text-center"> Admins List</h1>
          <div className=" d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-grow float-right text-success ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <FooterComponent />
      </>
    ) : adminData.error ? (
      <>
        <AdminHeaderComponent />
        <div className="container">
          <h1 className="text-center"> Admins List</h1>
          <div class="alert alert-danger" role="alert">
            {adminData.error.message}
          </div>
        </div>
        <FooterComponent />
      </>
    ) : (
      <>
        <AdminHeaderComponent />
        <div className="container">
          <h1 className="text-center"> Admins List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <td> Admin Id</td>
                <td> Admin Username</td>
                <td> Admin Mobile Number</td>
                <td> Admin Email Id</td>
                <td> Admin Address</td>
              </tr>
            </thead>
            <tbody>
              {adminData &&
                adminData.admins &&
                adminData.admins.map((admin) => (
                  <tr key={admin.adminId}>
                    <td> {admin.adminId}</td>
                    <td> {admin.username}</td>
                    <td> {admin.mobileNumber}</td>
                    <td> {admin.email}</td>
                    <td> {admin.address}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <FooterComponent />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    adminData: state.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmins: () => dispatch(fetchAdmins()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeComponent);
