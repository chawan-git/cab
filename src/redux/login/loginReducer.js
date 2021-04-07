import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_ADMIN_REQUEST,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILURE,
  FETCH_DRIVER_REQUEST,
  FETCH_DRIVER_SUCCESS,
  FETCH_DRIVER_FAILURE,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
} from "./loginTypes";

const initialState = {
  loading: false,
  userType: "",
  admin: {
    loading: false,
    admin: "",
    error: "",
  },
  driver: {
    loading: false,
    driver: "",
    error: "",
  },
  customer: {
    loading: false,
    customer: "",
    error: "",
  },
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userType: action.payload,
        error: "",
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: {
          message: action.payload.response
            ? action.payload.response.data
            : action.payload.message,
        },
      };
    }
    case FETCH_ADMIN_REQUEST: {
      return {
        ...state,
        admin: {
          ...state.admin,
          loading: true,
        },
      };
    }
    case FETCH_ADMIN_SUCCESS: {
      return {
        ...state,
        admin: {
          loading: false,
          admin: action.payload,
          error: "",
        },
        driver: {
          loading: false,
          driver: "",
          error: "",
        },
        customer: {
          loading: false,
          customer: "",
          error: "",
        },
      };
    }
    case FETCH_ADMIN_FAILURE: {
      return {
        ...state,
        admin: {
          loading: false,
          admin: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }
    case FETCH_DRIVER_REQUEST: {
      return {
        ...state,
        driver: {
          ...state.driver,
          loading: true,
        },
      };
    }
    case FETCH_DRIVER_SUCCESS: {
      return {
        ...state,
        driver: {
          loading: false,
          driver: action.payload,
          error: "",
        },
        admin: {
          loading: false,
          admin: "",
          error: "",
        },
        customer: {
          loading: false,
          customer: "",
          error: "",
        },
      };
    }
    case FETCH_DRIVER_FAILURE: {
      return {
        ...state,
        driver: {
          loading: false,
          driver: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }
    case FETCH_CUSTOMER_REQUEST: {
      return {
        ...state,
        customer: {
          ...state.customer,
          loading: true,
        },
      };
    }
    case FETCH_CUSTOMER_SUCCESS: {
      return {
        ...state,
        customer: {
          loading: false,
          customer: action.payload,
          error: "",
        },
        admin: {
          loading: false,
          admin: "",
          error: "",
        },
        driver: {
          loading: false,
          driver: "",
          error: "",
        },
      };
    }
    case FETCH_CUSTOMER_FAILURE: {
      return {
        ...state,
        customer: {
          loading: false,
          customer: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }
    case UPDATE_CUSTOMER_REQUEST: {
      return {
        ...state,
        customer: {
          ...state.customer,
          loading: true,
          error: "",
        },
      };
    }
    case UPDATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        customer: {
          loading: false,
          customer: action.payload,
          error: "",
        },
        admin: {
          loading: false,
          admin: "",
          error: "",
        },
        driver: {
          loading: false,
          driver: "",
          error: "",
        },
      };
    }
    case UPDATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        customer: {
          loading: false,
          customer: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
