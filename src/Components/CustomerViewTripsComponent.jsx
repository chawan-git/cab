/*
Author :Arfath Pasha
*/

//imports statemets to use the exported requests/methods in this components
//Fragments let  group a list of children without adding extra nodes to the DOM.
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import history from "../history";

import { fetchTrips1 } from "../redux";

class CustomerViewTripsComponent extends Component {
//handling serach event
  handleSearch= e =>{
    let target = e.target;
    let option = this.state.filterOption;
    if(target.value === "")
    this.setState({
      ...this.state,
         tripData:this.props.tripData.trips
    })
//search based on customer username
    else if(option === "username"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.driver.username.includes(target.value))
      })
    }
    //search based on trip from Location
    else if(option === "fromLocation"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.fromLocation.includes(target.value))
      })
    }
    //search based on trip to Location
    else if(option === "toLocation"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.toLocation.includes(target.value))
      })
    }
  //search based on trip from start time
    else if(option === "fromDateTime"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.fromDateTime.includes(target.value))
      })
    }
    //search based on trip from End Time
    else if(option === "toDateTime"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.toDateTime.includes(target.value))
      })
    }
    //search based on trip status
    else if(option === "status"){
      this.setState({
        ...this.state,
        tripData:this.props.tripData.trips.filter(x => x.status.includes(target.value))
      })
    }
  //if not match retuen original state
    else{
      this.setState({
        ...this.state
      })
    }
  }

//Handling Select Event
  handleSelect = e => {
    this.setState({
      ...this.state,
      filterOption: e.target.value
    })
  }
  state={
    tripData:[],
    filterOption: ""
  }
  
  customer;
  //componentDidMount is executed after the first render only on the client side. 
  //This is where AJAX requests and DOM or state updates occurs
  //async/await -It makes code cleaner and readable.
  
  async componentDidMount() {
    this.customer = JSON.parse(localStorage.getItem("Customer"));
    console.log(this.customer.mobileNumber);
    await this.props.fetchTrips1(this.customer.mobileNumber);
    await this.setState({
      tripData:this.props.tripData.trips
    })
    //getData() method retrieves drag data (as a DOMString ) for the specified type
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }
  getData = () => {
    if (localStorage.getItem("Customer")) {
    } else {
      history.push("/unauthorized");
    }
  };
//rendering trip Details
  render() {
    const { tripData } = this.props;
    return tripData.loading ? (
      <>
        <div className="container">
          <h1 className="text-center"> Trips List</h1>
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
    ) : tripData.error ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of Trips</h2>
          <div className="alert alert-danger" role="alert">
            {tripData.error.message}
          </div>
        </div>
      </>
    ) : tripData.trips.length === 0 ? (
      <>
        <div className="container">
          <br />
          <h2 className="text-center"> List of trips</h2>
          <div className="alert alert-danger" role="alert">
            No trips Found
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container">
          <br />
          <h2 className="text-center">List of trips</h2>
          <form >
            <div className="row">
              <div className="col-md-3">
              <select name="" id="select" className="form-control" onChange={this.handleSelect}>
              <option value="select" >Search based on ...</option>
              <option value="username">Driver Name</option>
              <option value="fromLocation">From Location</option>
              <option value="toLocation">To Location</option>
              <option value="fromDateTime">From Date</option>
              <option value="toDateTime">To Date</option>
              <option value="status">Status</option>
            </select>
              </div>
              <div className="col-md-9">
              <input className="form-control me-2" type="search" placeholder="Search" onChange={this.handleSearch} aria-label="Search"/>

              </div>
            </div>   
      
    </form>
          <br />
          {this.state &&
            this.state.tripData &&
            this.state.tripData.map((trip) => (
              <Fragment key={trip.tripBookingId}>
                <div className="card" key={trip.tripBookingId}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <h5>
                          <span className="fw-bold">TripBooking ID</span> :{" "}
                          {trip.tripBookingId}
                        </h5>
                        <h5>
                          <span className="fw-bold">Customer </span>:{" "}
                          {trip.customer.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">Driver </span> :{" "}
                          {trip.driver.username}
                        </h5>
                        <h5>
                          <span className="fw-bold">From Location </span> :{" "}
                          {trip.fromLocation}
                        </h5>
                        <h5>
                          <span className="fw-bold">To Location </span>:{" "}
                          {trip.toLocation}
                        </h5>
                        <h5>
                          <span className="fw-bold">Distance In KM </span> :{" "}
                          {trip.distanceInKm}
                        </h5>
                        <h5>
                          <span className="fw-bold">From Date </span> :{" "}
                          {trip.fromDateTime}
                        </h5>
                        <h5>
                          <span className="fw-bold">To Date </span> :{" "}
                          {trip.toDateTime}
                        </h5>
                        <h5>
                          <span className="fw-bold">status </span> :{" "}
                          {trip.status}
                        </h5>
                        <h5>
                          <span className="fw-bold">bill </span> : {trip.bill}
                        </h5>
                      </div>
                      <div className="col-md-2"></div>
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
    tripData: state.customerReducer.fetchTrips,
  };
};
//mapDispatchToProps is a utility which will help your component to fire an action event 

const mapDispatchToProps = { fetchTrips1 };
//Exporting
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerViewTripsComponent);
