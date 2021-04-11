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
  FETCH_DRIVERS_REQUEST,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE,
} from "./tripTypes";


/* Defining the initial states of actions */
const initialState = {
  viewTrips: {
    loading: false,
    trips: [],
    error: "",
  },
  insertTrip: {
    loading: false,
    trip: "",
    error: "",
  },
  deleteTrip: {
    loading: false,
    trip: "",
    error: "",
  },
  updateTrip: {
    loading: false,
    trip: "",
    error: "",
  },
  fetchTrip: {
    loading: false,
    trip: "",
    error: "",
  },
  fetchDrivers: {
    loading: false,
    drivers: [],
    error: "",
  },
};

/* implementing a trip reducer using switch statement and defining all the cases of action types returning the corresponding states */

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_REQUEST:
      return {
        ...state,
        viewTrips: {
          loading: true,
          trips: [],
          error: "",
        },
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        viewTrips: {
          loading: false,
          trips: action.payload,
          error: "",
        },
      };
    case FETCH_TRIPS_FAILURE:
      return {
        ...state,
        viewTrips: {
          loading: false,
          trips: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case INSERT_TRIP_REQUEST:
      return {
        ...state,
        insertTrip: {
          loading: true,
          trip: [],
          error: "",
        },
      };
    case INSERT_TRIP_SUCCESS:
      return {
        ...state,
        insertTrip: {
          loading: false,
          trip: action.payload,
          error: "",
        },
      };
    case INSERT_TRIP_FAILURE:
      return {
        ...state,
        insertTrip: {
          loading: false,
          trip: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_TRIP_REQUEST:
      return {
        ...state,
        deleteTrip: {
          loading: true,
          trip: null,
          error: "",
        },
      };
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        viewTrips: {
          loading: false,
          trips: state.viewTrips.trips.filter(
            (trip) => trip.tripBookingId !== action.payload.tripBookingId
          ),
          error: "",
        },
      };

    case DELETE_TRIP_FAILURE:
      return {
        ...state,
        deleteTrip: {
          loading: false,
          trip: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_TRIP_REQUEST:
      return {
        ...state,
        updateTrip: {
          loading: true,
          trip: [],
          error: "",
        },
      };
    case UPDATE_TRIP_SUCCESS:
      return {
        ...state,
        updateTrip: {
          loading: false,
          trip: action.payload,
          error: "",
        },
      };
    case UPDATE_TRIP_FAILURE:
      return {
        ...state,
        updateTrip: {
          loading: false,
          trip: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_TRIP_REQUEST:
      return {
        ...state,
        fetchTrip: {
          loading: true,
          trip: null,
          error: "",
        },
      };
    case FETCH_TRIP_SUCCESS:
      return {
        ...state,
        fetchTrip: {
          loading: false,
          trip: action.payload,
          error: "",
        },
      };
    case FETCH_TRIP_FAILURE:
      return {
        ...state,
        fetchTrip: {
          loading: false,
          trip: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_DRIVERS_REQUEST:
      return {
        ...state,
        fetchDrivers: {
          loading: true,
          drivers: null,
          error: "",
        },
      };
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        fetchDrivers: {
          loading: false,
          drivers: action.payload,
          error: "",
        },
      };
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        fetchDrivers: {
          loading: false,
          drivers: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    default:
      return state;
  }
};

// Exporting tripReducer in order to make it available to access in other components
export default tripReducer;
