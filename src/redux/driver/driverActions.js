/*
Author :BHARAT SINGH
*/

//Importing Axios property from Axios Library to use in the component
import axios from "axios";
//Importing Requests from driverTypes
import {
  FETCH_DRIVER_FAILURE,
  FETCH_DRIVERS_REQUEST,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE,
  INSERT_DRIVER_REQUEST,
  INSERT_DRIVER_SUCCESS,
  INSERT_DRIVER_FAILURE,
  DELETE_DRIVER_REQUEST,
  DELETE_DRIVER_SUCCESS,
  DELETE_DRIVER_FAILURE,
  UPDATE_DRIVER_REQUEST,
  UPDATE_DRIVER_SUCCESS,
  UPDATE_DRIVER_FAILURE,
  FETCH_DRIVER_REQUEST,
  FETCH_DRIVER_SUCCESS,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_WALLET_SUCCESS,
  FETCH_TRIPS_WALLET_REQUEST,
  FETCH_TRIPS_WALLET_FAILURE,
} from "./driverTypes";

const API_URL = "https://cba.rao.life/api/v1"

//Method Definition to Fetch List Of All Driver
export const fetchDrivers = () => {
  return async (dispatch) => {
    await dispatch(fetchDriversRequest());
    await axios
      .get(API_URL+"/driver/viewAllDrivers")//API URL
      .then((response) => {
        // response.data is the users
        const drivers = response.data;
        dispatch(fetchDriversSuccess(drivers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchDriversFailure(error));
      });
  };
};

//Method Definition to insert a Driver
export const insertDriver = (driver) => {
  return async (dispatch) => {
    await dispatch(insertDriverRequest());
    await axios
      .post(API_URL+"/driver/insertDriver", driver)//API URL
      .then((response) => {
        // response.data is the users
        const driver = response.data;
        dispatch(insertDriverSuccess(driver));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(insertDriverFailure(error));
      });
  };
};

//Method Definition to delete a Driver By driverId
export const deleteDriver = (driverId) => {
  return async (dispatch) => {
    await dispatch(deleteDriverRequest());
    await axios
      .delete(`${API_URL}/driver/deleteDriver/${driverId}`)//API URL
      .then((response) => {
        // response.data is the users
        const driver = response.data;
        dispatch(deleteDriverSuccess(driver));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(deleteDriverFailure(error));
      });
  };
};

//Method Definition to Update a Driver details
export const updateDriver = (driver) => {
  return async (dispatch) => {
    await dispatch(updateDriverRequest());
    await axios
      .put(API_URL+"/driver/updateDriver", driver)//ApI URL
      .then((response) => {
        // response.data is the users
        const driver = response.data;
        dispatch(updateDriverSuccess(driver));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(updateDriverFailure(error));
      });
  };
};

//Method Definition to fetch a Driver details-Driver Profile using mobileNumber
export const fetchTrips2 = (mobileNumber) => {
  return async (dispatch) => {
    await dispatch(fetchTripsRequest());
    await axios
      .get(API_URL+"/tripBooking/viewTripsByDriverMobileNumber/" +mobileNumber)//API URL
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

//Method For Fetching Wallet Revenue of a Driver-using driverId
export const fetchWallet = (driverId) => {
  return async (dispatch) => {
    await dispatch(fetchWalletRequest());
    await axios
      .get(API_URL+"/tripBooking/getTotalRevenueByDriverId/" +driverId)//API URL
      .then((response) => {
        // response.data is the users
        const balance = response.data;
        dispatch(fetchWalletSuccess(balance));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchWalletFailure(error));
      });
  };
};

//Method Definition to Fetch a Driver details using driverId
export const fetchDriver = (driverId) => {
  return async (dispatch) => {
    await dispatch(fetchDriverRequest());
    await axios
      .get(API_URL+"/driver/driverById/" + driverId)
      .then((response) => {
        // response.data is the users
        const driver = response.data;
        dispatch(fetchDriverSuccess(driver));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchDriverFailure(error));
      });
  };
};

//Action Creators For Driver Details Fetching
//Request
export const fetchDriversRequest = () => {
  return {
    type: FETCH_DRIVERS_REQUEST,
  };
};
//Success
export const fetchDriversSuccess = (drivers) => {
  return {
    type: FETCH_DRIVERS_SUCCESS,
    payload: drivers,
  };
};

//Failure
export const fetchDriversFailure = (error) => {
  return {
    type: FETCH_DRIVERS_FAILURE,
    payload: error,
  };
};

//Action Creators For inserting Driver Details
//Request
export const insertDriverRequest = () => {
  return {
    type: INSERT_DRIVER_REQUEST,
  };
};
//Success
export const insertDriverSuccess = (driver) => {
  return {
    type: INSERT_DRIVER_SUCCESS,
    payload: driver,
  };
};
//Failure
export const insertDriverFailure = (error) => {
  return {
    type: INSERT_DRIVER_FAILURE,
    payload: error,
  };
};

//Action Creator For Deleting Driver
//Request
export const deleteDriverRequest = () => {
  return {
    type: DELETE_DRIVER_REQUEST,
  };
};
//Success
export const deleteDriverSuccess = (driver) => {
  return {
    type: DELETE_DRIVER_SUCCESS,
    payload: driver,
  };
};
//Failure
export const deleteDriverFailure = (error) => {
  return {
    type: DELETE_DRIVER_FAILURE,
    payload: error,
  };
};

//Action Creator For Updating Driver Details
//Request
export const updateDriverRequest = () => {
  return {
    type: UPDATE_DRIVER_REQUEST,
  };
};
//Success
export const updateDriverSuccess = (driver) => {
  return {
    type: UPDATE_DRIVER_SUCCESS,
    payload: driver,
  };
};
//Failure
export const updateDriverFailure = (error) => {
  return {
    type: UPDATE_DRIVER_FAILURE,
    payload: error,
  };
};

//Action Creators For Driver Profile Details Fetching
//Request
export const fetchDriverRequest = () => {
  return {
    type: FETCH_DRIVER_REQUEST,
  };
};
//Success
export const fetchDriverSuccess = (driver) => {
  return {
    type: FETCH_DRIVER_SUCCESS,
    payload: driver,
  };
};

//Failure
export const fetchDriverFailure = (error) => {
  return {
    type: FETCH_DRIVER_FAILURE,
    payload: error,
  };
};

//Action Creators For Trip Details Fetching
//Request
export const fetchTripsRequest = () => {
  return {
    type: FETCH_TRIPS_REQUEST,
  };
};
//Success
export const fetchTripsSuccess = (trips) => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    payload: trips,
  };
};
//Failure
export const fetchTripsFailure = (error) => {
  return {
    type: FETCH_TRIPS_FAILURE,
    payload: error,
  };
};

//Action Creator For Fetching Driver Wallet Details
//Request
export const fetchWalletRequest = () => {
  return {
    type: FETCH_TRIPS_WALLET_REQUEST,
  };
};
//Success
export const fetchWalletSuccess = (balance) => {
  return {
    type: FETCH_TRIPS_WALLET_SUCCESS,
    payload: balance,
  };
};
//Failure
export const fetchWalletFailure = (error) => {
  return {
    type: FETCH_TRIPS_WALLET_FAILURE,
    payload: error,
  };
};
