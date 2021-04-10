import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdmin, fetchAdmins } from "../redux/admin/adminActions";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import history from "../history";

class AdminViewComponent extends Component {
  handleSearch = (e) => {
    let target = e.target;
    let option = this.state.filterOption;
    if (target.value === "")
      this.setState({
        ...this.state,
        adminData: this.props.adminData.admins,
      });
    else if (option === "username") {
      this.setState({
        ...this.state,
        adminData: this.props.adminData.admins.filter((x) =>
          x.username.includes(target.value)
        ),
      });
    } else if (option === "mobileNumber") {
      this.setState({
        ...this.state,
        adminData: this.props.adminData.admins.filter((x) =>
          x.mobileNumber.includes(target.value)
        ),
      });
    } else if (option === "email") {
      this.setState({
        ...this.state,
        adminData: this.props.adminData.admins.filter((x) =>
          x.email.includes(target.value)
        ),
      });
    } else {
      this.setState({
        ...this.state,
      });
    }
  };

  handleSelect = (e) => {
    this.setState({
      ...this.state,
      filterOption: e.target.value,
    });
  };
  state = {
    adminData: [],
    filterOption: "",
  };

  async componentDidMount() {
    await this.props.fetchAdmins();
    await this.setState({
      ...this.state,
      adminData: this.props.adminData.admins,
    });

    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  getData = () => {
    if (localStorage.getItem("Admin")) {
    } else {
      history.push("/unauthorized");
    }
  };
  async deleteAdmin(adminId, e) {
    e.preventDefault();
    await this.props.deleteAdmin(adminId);
  }

  render() {
    const { adminData } = this.props;
    return adminData.loading ? (
      <>
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
      </>
    ) : adminData.error ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of admins</h2>
          <div className="alert alert-danger" role="alert">
            {adminData.error.message}
          </div>
        </div>
      </>
    ) : adminData.admins.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of admins</h2>
          <div className="alert alert-danger" role="alert">
            No Admins Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />
          <h2 className="text-center">List of admins</h2>
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
          {this.state &&
            this.state.adminData &&
            this.state.adminData.map((admin) => (
              <Fragment key={admin.adminId}>
                <div className="card" key={admin.adminId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">Admin ID</span> :{" "}
                          {admin.adminId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Username </span>:{" "}
                          {admin.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">Password </span> :{" "}
                          {admin.password}
                        </h5>
                        <h5>
                          <span className="fw-bold">Email address </span> :{" "}
                          {admin.email}
                        </h5>
                        <h5>
                          <span className="fw-bold">Mobile number </span>:{" "}
                          {admin.mobileNumber}
                        </h5>
                        <h5>
                          <span className="fw-bold">Address </span> :{" "}
                          {admin.address}
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-primary col-md-12 mb-2 mt-4">
                          <EditOutlinedIcon />
                          <Link to={"/admin/editAdmin/" + admin.adminId}>
                            <h5 className="text-white">Edit details</h5>
                          </Link>
                        </button>

                        <button
                          className="btn btn-danger col-md-12"
                          // data-toggle="modal"
                          // data-target="#staticBackdrop"
                          onClick={(e) => this.deleteAdmin(admin.adminId, e)}
                        >
                          <DeleteOutlineOutlinedIcon />
                          <h5>Delete admin</h5>
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
    adminData: state.adminReducer.viewAdmins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmins: () => dispatch(fetchAdmins()),
    deleteAdmin: (adminId) => dispatch(deleteAdmin(adminId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminViewComponent);
