import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchAdmins } from "../redux";
import AdminAddComponent from "./AdminAddComponent";
import AdminDashboardComponent from "./AdminDashboardComponent";
import AdminEditComponent from "./AdminEditComponent";
import AdminHeaderComponent from "./AdminHeaderComponent";
import AdminViewComponent from "./AdminViewComponent";
import FooterComponent from "./FooterComponent";
class AdminHomeComponent extends Component {
  render() {
    return (
      <>
        <AdminHeaderComponent />
        
        <Route path="/admin/home" component={AdminDashboardComponent} />
        <Route path="/admin/viewAdmins" component={AdminViewComponent} />
        <Route path="/admin/addAdmin" component={AdminAddComponent} />
        <Route path="/admin/editAdmin/:id" component={AdminEditComponent} />
        <br />

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
