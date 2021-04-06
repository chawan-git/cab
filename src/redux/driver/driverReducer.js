import {
  FETCH_DRIVER_FAILURE,
  FETCH_DRIVERS_REQUEST,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE,
  INSERT_DRIVER_REQUEST,
  INSERT_DRIVER_SUCCESS,
  DELETE_DRIVER_REQUEST,
  DELETE_DRIVER_SUCCESS,
  DELETE_DRIVER_FAILURE,
  UPDATE_DRIVER_REQUEST,
  UPDATE_DRIVER_SUCCESS,
  UPDATE_DRIVER_FAILURE,
  FETCH_DRIVER_REQUEST,
  FETCH_DRIVER_SUCCESS,
  INSERT_DRIVER_FAILURE,
} from "./driverTypes";

const initialState = {
  viewDrivers: {
    loading: false,
    drivers: [],
    error: "",
  },
  insertDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  deleteDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  updateDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  fetchDriver: {
    loading: false,
    driver: "",
    error: "",
  },
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_REQUEST:
      return {
        ...state,
        viewDrivers: {
          loading: true,
          drivers: [],
          error: "",
        },
      };
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        viewDrivers: {
          loading: false,
          drivers: action.payload,
          error: "",
        },
      };
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        viewDrivers: {
          loading: false,
          drivers: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case INSERT_DRIVER_REQUEST:
      return {
        ...state,
        insertDriver: {
          loading: true,
          driver: "",
          error: "",
        },
      };
    case INSERT_DRIVER_SUCCESS:
      return {
        ...state,
        insertDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    case INSERT_DRIVER_FAILURE:
      return {
        ...state,
        insertDriver: {
          loading: false,
          driver: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_DRIVER_REQUEST:
      return {
        ...state,
        deleteDriver: {
          loading: true,
          driver: null,
          error: "",
        },
      };
    case DELETE_DRIVER_SUCCESS:
      return {
        ...state,
        viewDrivers: {
          loading: false,
          drivers: state.viewDrivers.drivers.filter(
            (driver) => driver.driverId !== action.payload.driverId
          ),
          error: "",
        },
      };

    case DELETE_DRIVER_FAILURE:
      return {
        ...state,
        deleteDriver: {
          loading: false,
          driver: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_DRIVER_REQUEST:
      return {
        ...state,
        updateDriver: {
          loading: true,
          driver: [],
          error: "",
        },
      };
    case UPDATE_DRIVER_SUCCESS:
      return {
        ...state,
        updateDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    case UPDATE_DRIVER_FAILURE:
      return {
        ...state,
        updateDriver: {
          loading: false,
          driver: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_DRIVER_REQUEST:
      return {
        ...state,
        fetchDriver: {
          loading: true,
          driver: null,
          error: "",
        },
      };
    case FETCH_DRIVER_SUCCESS:
      return {
        ...state,
        fetchDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    case FETCH_DRIVER_FAILURE:
      return {
        ...state,
        fetchDriver: {
          loading: false,
          driver: null,
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

export default driverReducer;
