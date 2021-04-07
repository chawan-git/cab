import axios from "axios";
import history from "../../history";

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
} from "./driverTypes";

export const fetchDrivers = () => {
  return async (dispatch) => {
    await dispatch(fetchDriversRequest());
    await axios
      .get("https://cba.rao.life/api/v1/driver/viewAllDrivers")
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

export const insertDriver = (driver) => {
  return (dispatch) => {
    dispatch(insertDriverRequest());
    axios
      .post("https://cba.rao.life/api/v1/driver/insertDriver", driver)
      .then((response) => {
        const driver = response.data;
        dispatch(insertDriverSuccess(driver));
        history.push("/admin/viewDrivers");
      })
      .catch((error) => {
        dispatch(insertDriverFailure(error));
      });
  };
};

export const deleteDriver = (driverId) => {
  return async (dispatch) => {
    await dispatch(deleteDriverRequest());
    await axios
      .delete(`https://cba.rao.life/api/v1/driver/deleteDriver/${driverId}`)
      .then((response) => {
        const driver = response.data;
        dispatch(deleteDriverSuccess(driver));
      })
      .catch((error) => {
        dispatch(deleteDriverFailure(error));
      });
  };
};

export const updateDriver = (driver) => {
  return (dispatch) => {
    dispatch(updateDriverRequest());
    axios
      .put("https://cba.rao.life/api/v1/driver/updateDriver", driver)
      .then((response) => {
        const driver = response.data;
        dispatch(updateDriverSuccess(driver));
        history.push("/admin/viewDrivers");
      })
      .catch((error) => {
        dispatch(updateDriverFailure(error));
      });
  };
};

export const updateDriver1 = (driver) => {
  return (dispatch) => {
    dispatch(updateDriverRequest());
    axios
      .put("https://cba.rao.life/api/v1/driver/updateDriver", driver)
      .then((response) => {
        const driver = response.data;
        dispatch(updateDriverSuccess(driver));
        history.push("/driver/home");
      })
      .catch((error) => {
        dispatch(updateDriverFailure(error));
      });
  };
};

export const fetchTrips2 = (mobileNumber) => {
  return async (dispatch) => {
    await dispatch(fetchTripsRequest());
    await axios
      .get(
        "https://cba.rao.life/api/v1/tripBooking/viewTripsByDriverMobileNumber/" +
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

export const fetchDriver = (driverId) => {
  return async (dispatch) => {
    await dispatch(fetchDriverRequest());
    await axios
      .get("https://cba.rao.life/api/v1/driver/driverById/" + driverId)
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

//Action Creator
export const fetchDriversRequest = () => {
  return {
    type: FETCH_DRIVERS_REQUEST,
  };
};

//Action Creator
export const fetchDriversSuccess = (drivers) => {
  return {
    type: FETCH_DRIVERS_SUCCESS,
    payload: drivers,
  };
};

//Action Creator
export const fetchDriversFailure = (error) => {
  return {
    type: FETCH_DRIVERS_FAILURE,
    payload: error,
  };
};

export const insertDriverRequest = () => {
  return {
    type: INSERT_DRIVER_REQUEST,
  };
};

export const insertDriverSuccess = (driver) => {
  return {
    type: INSERT_DRIVER_SUCCESS,
    payload: driver,
  };
};

export const insertDriverFailure = (error) => {
  return {
    type: INSERT_DRIVER_FAILURE,
    payload: error,
  };
};

export const deleteDriverRequest = () => {
  return {
    type: DELETE_DRIVER_REQUEST,
  };
};

export const deleteDriverSuccess = (driver) => {
  return {
    type: DELETE_DRIVER_SUCCESS,
    payload: driver,
  };
};

export const deleteDriverFailure = (error) => {
  return {
    type: DELETE_DRIVER_FAILURE,
    payload: error,
  };
};

export const updateDriverRequest = () => {
  return {
    type: UPDATE_DRIVER_REQUEST,
  };
};

export const updateDriverSuccess = (driver) => {
  return {
    type: UPDATE_DRIVER_SUCCESS,
    payload: driver,
  };
};

export const updateDriverFailure = (error) => {
  return {
    type: UPDATE_DRIVER_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchDriverRequest = () => {
  return {
    type: FETCH_DRIVER_REQUEST,
  };
};

//Action Creator
export const fetchDriverSuccess = (driver) => {
  return {
    type: FETCH_DRIVER_SUCCESS,
    payload: driver,
  };
};

//Action Creator
export const fetchDriverFailure = (error) => {
  return {
    type: FETCH_DRIVER_FAILURE,
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
