
/*
Author :BHARAT SINGH
*/

//Request For Viewing All Registered Drivers :From Admin
export const FETCH_DRIVERS_REQUEST = "FETCH_DRIVERS_REQUEST";
export const FETCH_DRIVERS_SUCCESS = "FETCH_DRIVERS_SUCCESS";
export const FETCH_DRIVERS_FAILURE = "FETCH_DRIVERS_FAILURE";

//For Inserting Drivers :Only By Admin
export const INSERT_DRIVER_REQUEST = "INSERT_DRIVER_REQUEST";
export const INSERT_DRIVER_SUCCESS = "INSERT_DRIVER_SUCCESS";
export const INSERT_DRIVER_FAILURE = "INSERT_DRIVER_FAILURE";

//For Deleting Drivers :Drivers only can be deleted when Trips related to the Driver is deleted
export const DELETE_DRIVER_REQUEST = "DELETE_DRIVER_REQUEST";
export const DELETE_DRIVER_SUCCESS = "DELETE_DRIVER_SUCCESS";
export const DELETE_DRIVER_FAILURE = "DELETE_DRIVER_FAILURE";

//For Updating Drivers : Only By admin 
export const UPDATE_DRIVER_REQUEST = "UPDATE_DRIVER_REQUEST";
export const UPDATE_DRIVER_SUCCESS = "UPDATE_DRIVER_SUCCESS";
export const UPDATE_DRIVER_FAILURE = "UPDATE_DRIVER_FAILURE";

//For Updating Driver's Profile 
export const FETCH_DRIVER_REQUEST = "FETCH_DRIVER_REQUEST";
export const FETCH_DRIVER_SUCCESS = "FETCH_DRIVER_SUCCESS";
export const FETCH_DRIVER_FAILURE = "FETCH_DRIVER_FAILURE";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_REQUEST = "FETCH_TRIPS_REQUEST";
export const FETCH_TRIPS_FAILURE = "FETCH_TRIPS_FAILURE";

//Request Constants for Fetching Wallet Revenue From Api
export const FETCH_TRIPS_WALLET_SUCCESS = "FETCH_TRIPS_WALLET_SUCCESS";
export const FETCH_TRIPS_WALLET_REQUEST = "FETCH_TRIPS_WALLET_REQUEST";
export const FETCH_TRIPS_WALLET_FAILURE = "FETCH_TRIPS_WALLET_FAILURE";