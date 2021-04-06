import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import history from "../history";
import { fetchAdmins } from "../redux/admin/adminActions";
import AdminAddComponent from "./AdminAddComponent";
import AdminDashboardComponent from "./AdminDashboardComponent";
import AdminEditComponent from "./AdminEditComponent";
import AdminHeaderComponent from "./AdminHeaderComponent";
import AdminViewComponent from "./AdminViewComponent";
import CabAddComponent from "./CabAddComponent";
import CabEditComponent from "./CabEditComponent";
import CabViewComponent from "./CabViewComponent";
import FooterComponent from "./FooterComponent";
class AdminHomeComponent extends Component {
  adminData;
  componentDidMount(){
    // this.adminData = JSON.parse(localStorage.getItem('admin'));
    // this.getData();
    // window.addEventListener('storage',e => this.getData());

  }
  getData = () => {
    if(localStorage.getItem('admin')){

    }
    else{
      history.push("/unauthorized");
    }
  }
  render() {
    return (
      <>
        <AdminHeaderComponent />
        
        <Route path="/admin/home" component={AdminDashboardComponent} />
        <Route path="/admin/viewAdmins" component={AdminViewComponent} />
        <Route path="/admin/addAdmin" component={AdminAddComponent} />
        <Route path="/admin/editAdmin/:id" component={AdminEditComponent} />
        <Route path="/admin/addCabType" component={CabAddComponent} />
        <Route path="/admin/viewCabTypes" component={CabViewComponent} />
        <Route path="/admin/editCabType/:id" component={CabEditComponent} />
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
