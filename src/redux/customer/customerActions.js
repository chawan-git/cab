/*
Author :Arfath Pasha
*/
//Importing Axios property from Axios Library to use in the component
import axios from "axios";
//Importing Requests from customerTypes
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_REQUEST,
} from "./customerTypes";

const API_URL = "https://cba.rao.life/api/v1"
//Method Definition to Fetch List Of All Customer
export const fetchCustomers = () => {
  return async (dispatch) => {
    await dispatch(fetchCustomersRequest());
    await axios
      .get(API_URL+"/customer/getAllCustomers")
      .then((response) => {
        // response.data is the users
        const customers = response.data;
        dispatch(fetchCustomersSuccess(customers));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchCustomersFailure(error));
      });
  };
};
//Method Definition to delete a Customer By customerId
export const deleteCustomer = (customerId) => {
  return async (dispatch) => {
    await dispatch(deleteCustomerRequest());
    await axios
      .delete(
        `${API_URL}/customer/deleteCustomer/${customerId}`
      )
      .then((response) => {
        const customer = response.data;
        dispatch(deleteCustomerSuccess(customer));
      })
      .catch((error) => {
        dispatch(deleteCustomerFailure(error));
      });
  };
};
//Method Definition to Update a Customer details
export const updateCustomer1 = (customer) => {
  return async (dispatch) => {
    await dispatch(updateCustomerRequest());
    await axios
      .put(API_URL+"/customer/updateCustomer", customer)
      .then((response) => {
        const customer = response.data;
        dispatch(updateCustomerSuccess(customer));
      })
      .catch((error) => {
        dispatch(updateCustomerFailure(error));
      });
  };
};
//Method Definition to fetch customer by customerId
export const fetchCustomer = (customerId) => {
  return async (dispatch) => {
    await dispatch(fetchCustomerRequest());
    await axios
      .get(API_URL+"/customer/getCustomerById/" + customerId)
      .then((response) => {
        // response.data is the users
        const customer = response.data;
        dispatch(fetchCustomerSuccess(customer));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchCustomerFailure(error));
      });
  };
};

export const fetchTrips1 = (mobileNumber) => {
  return async (dispatch) => {
    await dispatch(fetchTripsRequest());
    await axios
      .get(
        API_URL+"/tripBooking/viewTripsByCustomerMobileNumber/" +
          mobileNumber
      )
      .then((response) => {
        // response.data is the users
        const trips = response.data;
        dispatch(fetchTripsSuccess(trips));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchTripsFailure(error));
      });
  };
};

//Action Creator
export const fetchCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

//Action Creator
export const fetchCustomersSuccess = (customers) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers,
  };
};

//Action Creator
export const fetchCustomersFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};

export const deleteCustomerRequest = () => {
  return {
    type: DELETE_CUSTOMER_REQUEST,
  };
};

export const deleteCustomerSuccess = (customer) => {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

export const deleteCustomerFailure = (error) => {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: error,
  };
};

export const updateCustomerRequest = () => {
  return {
    type: UPDATE_CUSTOMER_REQUEST,
  };
};

export const updateCustomerSuccess = (customer) => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

export const updateCustomerFailure = (error) => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const fetchCustomerSuccess = (customer) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};

export const fetchTripsRequest = () => {
  return {
    type: FETCH_TRIPS_REQUEST,
  };
};

//Action Creator
export const fetchTripsSuccess = (trips) => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    payload: trips,
  };
};

//Action Creator
export const fetchTripsFailure = (error) => {
  return {
    type: FETCH_TRIPS_FAILURE,
    payload: error,
  };
};
