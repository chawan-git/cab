import axios from "axios";
import history from "../../history";

/* Importing Trip Action Types From tripTypes */
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

// Base url for the back end API
const API_URL = "https://cba.rao.life/api/v1"

/* making CRUD operation calls to the backend API using Axios library using   */

export const fetchTrips = () => {
  return async (dispatch) => {
    await dispatch(fetchTripsRequest());
    await axios
      .get(API_URL + "/tripBooking/viewAllTrips")
      .then((response) => {
        const trips = response.data;
        dispatch(fetchTripsSuccess(trips));
      })
      .catch((error) => {
        dispatch(fetchTripsFailure(error));
      });
  };
};

export const insertTrip = (trip) => {
  return async (dispatch) => {
    await dispatch(insertTripRequest());
    await axios
      .post(API_URL + "/tripBooking/insertTripBooking", trip)
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
        `${API_URL}/tripBooking/deleteTripBooking/${tripBookingId}`
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
      .put(API_URL + "/tripBooking/updateTripBooking", trip)
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
        `${API_URL}/tripBooking/getTripById/${tripBookingId}`
      )
      .then((response) => {
        const trip = response.data;
        dispatch(fetchTripSuccess(trip));
      })
      .catch((error) => {
        dispatch(fetchTripFailure(error));
      });
  };
};

export const fetchDrivers1 = (carType) => {
  return async (dispatch) => {
    await dispatch(fetchDriversRequest());
    await axios
      .get(
        `${API_URL}/driver/viewAllAvailableDriversBasedOnCarType/${carType}`
      )
      .then((response) => {
        const drivers = response.data;
        dispatch(fetchDriversSuccess(drivers));
      })
      .catch((error) => {
        dispatch(fetchDriversFailure(error));
      });
  };
};


/* exporting all the action creaters for action types  */

export const fetchTripsRequest = () => {
  return {
    type: FETCH_TRIPS_REQUEST,
  };
};

export const fetchTripsSuccess = (trips) => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    payload: trips,
  };
};

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

export const fetchTripRequest = () => {
  return {
    type: FETCH_TRIP_REQUEST,
  };
};

export const fetchTripSuccess = (trip) => {
  return {
    type: FETCH_TRIP_SUCCESS,
    payload: trip,
  };
};

export const fetchTripFailure = (error) => {
  return {
    type: FETCH_TRIP_FAILURE,
    payload: error,
  };
};

export const fetchDriversRequest = () => {
  return {
    type: FETCH_DRIVERS_REQUEST,
  };
};

export const fetchDriversSuccess = (drivers) => {
  return {
    type: FETCH_DRIVERS_SUCCESS,
    payload: drivers,
  };
};

export const fetchDriversFailure = (error) => {
  return {
    type: FETCH_DRIVERS_FAILURE,
    payload: error,
  };
};
