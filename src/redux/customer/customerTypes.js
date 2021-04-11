/*
Author :Arfath Pasha
*/
//Request For Viewing All Registered Customers :From Admin
export const FETCH_CUSTOMERS_REQUEST = "FETCH_CUSTOMERS_REQUEST";
export const FETCH_CUSTOMERS_SUCCESS = "FETCH_CUSTOMERS_SUCCESS";
export const FETCH_CUSTOMERS_FAILURE = "FETCH_CUSTOMERS_FAILURE";

//For Deleting Customers :Customers only can be deleted when Trips related to the Customer is deleted
export const DELETE_CUSTOMER_REQUEST = "DELETE_CUSTOMER_REQUEST";
export const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
export const DELETE_CUSTOMER_FAILURE = "DELETE_CUSTOMER_FAILURE";

//For Updating Customer : Only By admin 
export const UPDATE_CUSTOMER_REQUEST = "UPDATE_CUSTOMER_REQUEST";
export const UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS";
export const UPDATE_CUSTOMER_FAILURE = "UPDATE_CUSTOMER_FAILURE";

//For Updating Customer's Profile 
export const FETCH_CUSTOMER_REQUEST = "FETCH_CUSTOMER_REQUEST";
export const FETCH_CUSTOMER_SUCCESS = "FETCH_CUSTOMER_SUCCESS";
export const FETCH_CUSTOMER_FAILURE = "FETCH_CUSTOMER_FAILURE";

//Request Constants for Fetching Wallet Revenue From Api
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_REQUEST = "FETCH_TRIPS_REQUEST";
export const FETCH_TRIPS_FAILURE = "FETCH_TRIPS_FAILURE";
