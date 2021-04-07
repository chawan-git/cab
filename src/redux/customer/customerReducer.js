import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_TRIPS_FAILURE,
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
} from "./customerTypes";

const initialState = {
  viewCustomers: {
    loading: false,
    customers: [],
    error: "",
  },
  deleteCustomer: {
    loading: false,
    customer: "",
    error: "",
  },
  updateCustomer: {
    loading: false,
    customer: "",
    error: "",
  },
  fetchCustomer: {
    loading: false,
    customer: "",
    error: "",
  },
  fetchTrips: {
    loading: false,
    trips: [],
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        viewCustomers: {
          loading: true,
          customers: [],
          error: "",
        },
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        viewCustomers: {
          loading: false,
          customers: action.payload,
          error: "",
        },
      };
    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        viewCustomers: {
          loading: false,
          customers: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        deleteCustomer: {
          loading: true,
          customer: null,
          error: "",
        },
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        viewCustomers: {
          loading: false,
          customers: state.viewCustomers.customers.filter(
            (customer) => customer.customerId !== action.payload.customerId
          ),
          error: "",
        },
      };

    case DELETE_CUSTOMER_FAILURE:
      return {
        ...state,
        deleteCustomer: {
          loading: false,
          customer: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        updateCustomer: {
          loading: true,
          customer: [],
          error: "",
        },
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomer: {
          loading: false,
          customer: action.payload,
          error: "",
        },
      };
    case UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
        updateCustomer: {
          loading: false,
          customer: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        fetchCustomer: {
          loading: true,
          customer: null,
          error: "",
        },
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        fetchCustomer: {
          loading: false,
          customer: action.payload,
          error: "",
        },
      };
    case FETCH_CUSTOMER_FAILURE:
      return {
        ...state,
        fetchCustomer: {
          loading: false,
          customer: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
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

    default:
      return state;
  }
};

export default reducer;
