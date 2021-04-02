import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../redux";

export function AdminHomeComponent({ adminData, fetchAdmins }) {
  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  return adminData.loading ? (
    <div>
        <div className="container">
      <h1 className="text-center"> Admins List</h1>
      <h2>Loading</h2>
      </div>
    </div>
  ) : adminData.error ? (
    <div className="container">
    <h1 className="text-center"> Admins List</h1>
    <h2>{adminData.error}</h2>
    </div>
  ) : (
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
  );
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
