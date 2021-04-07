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
  return (dispatch) => {
    dispatch(insertTripRequest());
    axios
      .post("https://cba.rao.life/api/v1/tripBooking/insertTripBooking", trip)
      .then((response) => {
        const trip = response.data;
        dispatch(insertTripSuccess(trip));
        history.push("/customer/tripRequested");
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
      .delete(`https://cba.rao.life/api/v1/tripBooking/deleteTripBooking/${tripBookingId}`)
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
  return (dispatch) => {
    dispatch(updateTripRequest());
    axios
      .put("https://cba.rao.life/api/v1/tripBooking/updateTripBooking", trip)
      .then((response) => {
        const trip = response.data;
        dispatch(updateTripSuccess(trip));
        history.push("/admin/viewTrips");
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
      .get(`https://cba.rao.life/api/v1/tripBooking/getTripById/${tripBookingId}`)
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
