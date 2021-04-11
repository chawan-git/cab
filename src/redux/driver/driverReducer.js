/*
Author :BHARAT SINGH
*/

//Importing Requests from driverTypes
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
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_WALLET_SUCCESS,
  FETCH_TRIPS_WALLET_REQUEST,
  FETCH_TRIPS_WALLET_FAILURE,

} from "./driverTypes";

//Defining initial States
const initialState = {  
  //initial State for viewing Driver
  viewDrivers: {
    loading: false,//loading will be false as its single page application
    drivers: [],//defining a blank array
    error: "",// printing Error Messages
  },

  //initial State for Adding/Inserting Driver
  insertDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  //initial State for deleting a Driver
  deleteDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  //initial State for Updating Driver
  updateDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  //initial State for fetching Driver to update profile
  fetchDriver: {
    loading: false,
    driver: "",
    error: "",
  },
  //initial State for  Driver Trip History
  fetchTrips: {
    loading: false,
    trips: [],//Array to Load all the Trip components
    error: "",
  },
  //initial State for fetching Wallet Balance from Total Revenue generated API
  fetchWallet: {
    loading: false,
    balance: "",
    error: "",
  },
};

//defining a constant reducer that defines the actions Requests imported from driverTypes
const driverReducer = (state = initialState, action) => {
  switch (action.type) {//switch case to select case based on actions
    //Request Definition For-Viewing All Drivers
    //Case definition when feching Driver Request Request
    case FETCH_DRIVERS_REQUEST:
      return {
        ...state,
        viewDrivers: {//viewDriver-method to view all present driver
          loading: true,
          drivers: [],
          error: "",
        },
      };
    //Case definition when feching Driver Success Request
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        viewDrivers: {
          loading: false,
          drivers: action.payload,//loads the driver details
          error: "",
        },
      };
    //Case definition when feching Driver Failure Request
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        viewDrivers: {
          loading: false,
          drivers: [],
          //when request fails the cooresponding failure message is loaded
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    //Request Definition For -Adding Drivers
    //Case definition for inserting driver Request Request
    case INSERT_DRIVER_REQUEST:
      return {
        ...state,
        insertDriver: {
          loading: true,
          driver: "",
          error: "",
        },
      };
    //Case definition for inserting driver success Request
    case INSERT_DRIVER_SUCCESS:
      return {
        ...state,
        insertDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    //Case definition for inserting driver failure Request
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
    //Request Definition For-Deleting Drivers
    //Case definition for Delete driver Request Request
    case DELETE_DRIVER_REQUEST:
      return {
        ...state,
        deleteDriver: {
          loading: true,
          driver: null,
          error: "",
        },
      };
    //Case definition for delete driver success Request
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
    //Case definition for delete driver failure Request
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

    //Request Definition For-Updating Drivers
    //Case definition for Updating driver Request Request
    case UPDATE_DRIVER_REQUEST:
      return {
        ...state,
        updateDriver: {
          loading: true,
          driver: [],
          error: "",
        },
      };
    //Case definition for Updating driver Success Request
    case UPDATE_DRIVER_SUCCESS:
      return {
        ...state,
        updateDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    //Case definition for Updating driver Failure Request
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

    //Request Definition For-Fecthing Driver's Profile Details
    //Case definition for Fetching driver Request-For Driver Profile
    case FETCH_DRIVER_REQUEST:
      return {
        ...state,
        fetchDriver: {
          loading: true,
          driver: null,
          error: "",
        },
      };
    //Case definition for Fetching driver Success Request-For Driver Profile
    case FETCH_DRIVER_SUCCESS:
      return {
        ...state,
        fetchDriver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
      };
    //Case definition for Fetching driver failure Request-For Driver Profile
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
     //Request Definition For-Viewing Trip Details of Drivers
    //Case definition for Fetching Trips Request-For Trip History
    case FETCH_TRIPS_REQUEST: {
      return {
        ...state,
        fetchTrips: {
          loading: true,
          trips: [],
          error: "",
        },
      };
    }
    //Case definition for Fetching Trips Success Request-For Trip History
    case FETCH_TRIPS_SUCCESS: {
      return {
        ...state,
        fetchTrips: {
          loading: false,
          trips: action.payload,
          error: "",
        },
      };
    }
    //Case definition for Fetching Trips Failure Request-For Trip History
    case FETCH_TRIPS_FAILURE: {
      return {
        ...state,
        fetchTrips: {
          loading: false,
          trips: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }

    //Request Definition For-Wallet Details of All Drivers
    //Case definition for Fetching Wallet Request-For Wallet Summery
    case FETCH_TRIPS_WALLET_REQUEST: {
      return {
        ...state,
        fetchWallet: {
          loading: true,
          balance: "",
          error: "",
        },
      };
    }
    //Case definition for Fetching Wallet Success Request-For Wallet Summery
    case FETCH_TRIPS_WALLET_SUCCESS: {
      return {
        ...state,
        fetchWallet: {
          loading: false,
          balance: action.payload,
          error: "",
        },
      };
    }
    //Case definition for Fetching Wallet Failure Request-For Wallet Summery
    case FETCH_TRIPS_WALLET_FAILURE: {
      return {
        ...state,
        fetchWallet: {
          loading: false,
          balance: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }
    //Default Case
    default:
      return state;
  }
};

export default driverReducer;
