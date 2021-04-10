import axios from "axios";
import history from "../../history";

import {
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
  INSERT_TRIP_REQUEST,
  INSERT_TRIP_SUCCESS,
  INSERT_TRIP_FAILURE,
  DELETE_TRIP_REQUEST,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILURE,
  UPDATE_TRIP_REQUEST,
  UPDATE_TRIP_SUCCESS,
  UPDATE_TRIP_FAILURE,
  FETCH_TRIP_REQUEST,
  FETCH_TRIP_SUCCESS,
  FETCH_TRIP_FAILURE,
  FETCH_DRIVERS_FAILURE,
  FETCH_DRIVERS_REQUEST,
  FETCH_DRIVERS_SUCCESS,
} from "./tripTypes";

export const fetchTrips = () => {
  return async (dispatch) => {
    await dispatch(fetchTripsRequest());
    await axios
      .get("https://cba.rao.life/api/v1/tripBooking/viewAllTrips")
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

export const insertTrip = (trip) => {
  return async (dispatch) => {
    await dispatch(insertTripRequest());
    await axios
      .post("https://cba.rao.life/api/v1/tripBooking/insertTripBooking", trip)
      .then((response) => {
        const trip = response.data;
        dispatch(insertTripSuccess(trip));
        localStorage.setItem("trip", JSON.stringify(trip));
        history.push("/trip/" + trip.customer.username + "/customer");
      })
      .catch((error) => {
        dispatch(insertTripFailure(error));
      });
  };
};

export const deleteTrip = (tripBookingId) => {
  return async (dispatch) => {
    await dispatch(deleteTripRequest());
    await axios
      .delete(
        `https://cba.rao.life/api/v1/tripBooking/deleteTripBooking/${tripBookingId}`
      )
      .then((response) => {
        const trip = response.data;
        dispatch(deleteTripSuccess(trip));
      })
      .catch((error) => {
        dispatch(deleteTripFailure(error));
      });
  };
};

export const updateTrip = (trip) => {
  return async (dispatch) => {
    await dispatch(updateTripRequest());
    await axios
      .put("https://cba.rao.life/api/v1/tripBooking/updateTripBooking", trip)
      .then((response) => {
        const trip = response.data;
        dispatch(updateTripSuccess(trip));
      })
      .catch((error) => {
        dispatch(updateTripFailure(error));
      });
  };
};

export const fetchTrip = (tripBookingId) => {
  return async (dispatch) => {
    await dispatch(fetchTripRequest());
    await axios
      .get(
        `https://cba.rao.life/api/v1/tripBooking/getTripById/${tripBookingId}`
      )
      .then((response) => {
        // response.data is the users
        const trip = response.data;
        dispatch(fetchTripSuccess(trip));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchTripFailure(error));
      });
  };
};

export const fetchDrivers1 = (carType) => {
  return async (dispatch) => {
    await dispatch(fetchDriversRequest());
    await axios
      .get(
        `https://cba.rao.life/api/v1/driver/viewAllAvailableDriversBasedOnCarType/${carType}`
      )
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

//Action Creator
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

export const insertTripRequest = () => {
  return {
    type: INSERT_TRIP_REQUEST,
  };
};

export const insertTripSuccess = (trip) => {
  return {
    type: INSERT_TRIP_SUCCESS,
    payload: trip,
  };
};

export const insertTripFailure = (error) => {
  return {
    type: INSERT_TRIP_FAILURE,
    payload: error,
  };
};

export const deleteTripRequest = () => {
  return {
    type: DELETE_TRIP_REQUEST,
  };
};

export const deleteTripSuccess = (trip) => {
  return {
    type: DELETE_TRIP_SUCCESS,
    payload: trip,
  };
};

export const deleteTripFailure = (error) => {
  return {
    type: DELETE_TRIP_FAILURE,
    payload: error,
  };
};

export const updateTripRequest = () => {
  return {
    type: UPDATE_TRIP_REQUEST,
  };
};

export const updateTripSuccess = (trip) => {
  return {
    type: UPDATE_TRIP_SUCCESS,
    payload: trip,
  };
};

export const updateTripFailure = (error) => {
  return {
    type: UPDATE_TRIP_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchTripRequest = () => {
  return {
    type: FETCH_TRIP_REQUEST,
  };
};

//Action Creator
export const fetchTripSuccess = (trip) => {
  return {
    type: FETCH_TRIP_SUCCESS,
    payload: trip,
  };
};

//Action Creator
export const fetchTripFailure = (error) => {
  return {
    type: FETCH_TRIP_FAILURE,
    payload: error,
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
