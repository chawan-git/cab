import {
  FETCH_CABS_REQUEST,
  FETCH_CABS_SUCCESS,
  FETCH_CABS_FAILURE,
  INSERT_CAB_REQUEST,
  INSERT_CAB_SUCCESS,
  INSERT_CAB_FAILURE,
  DELETE_CAB_REQUEST,
  DELETE_CAB_SUCCESS,
  DELETE_CAB_FAILURE,
  UPDATE_CAB_REQUEST,
  UPDATE_CAB_SUCCESS,
  UPDATE_CAB_FAILURE,
  FETCH_CAB_REQUEST,
  FETCH_CAB_SUCCESS,
  FETCH_CAB_FAILURE,
} from "./cabTypes";

const initialState = {
  viewCabs: {
    loading: false,
    cabs: [],
    error: "",
  },
  insertCab: {
    loading: false,
    cab: "",
    error: "",
  },
  deleteCab: {
    loading: false,
    cab: "",
    error: "",
  },
  updateCab: {
    loading: false,
    cab: "",
    error: "",
  },
  fetchCab: {
    loading: false,
    cab: "",
    error: "",
  },
};

const cabReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CABS_REQUEST:
      return {
        ...state,
        viewCabs: {
          loading: true,
          cabs: [],
          error: "",
        },
      };
    case FETCH_CABS_SUCCESS:
      return {
        ...state,
        viewCabs: {
          loading: false,
          cabs: action.payload,
          error: "",
        },
      };
    case FETCH_CABS_FAILURE:
      return {
        ...state,
        viewCabs: {
          loading: false,
          cabs: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case INSERT_CAB_REQUEST:
      return {
        ...state,
        insertCab: {
          loading: true,
          cab: [],
          error: "",
        },
      };
    case INSERT_CAB_SUCCESS:
      return {
        ...state,
        insertCab: {
          loading: false,
          cab: action.payload,
          error: "",
        },
      };
    case INSERT_CAB_FAILURE:
      return {
        ...state,
        insertCab: {
          loading: false,
          cab: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_CAB_REQUEST:
      return {
        ...state,
        deleteCab: {
          loading: true,
          cab: null,
          error: "",
        },
      };
    case DELETE_CAB_SUCCESS:
      return {
        ...state,
        viewCabs: {
          loading: false,
          cabs: state.viewCabs.cabs.filter(
            (cab) => cab.cabId !== action.payload.cabId
          ),
          error: "",
        },
      };

    case DELETE_CAB_FAILURE:
      return {
        ...state,
        deleteCab: {
          loading: false,
          cab: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_CAB_REQUEST:
      return {
        ...state,
        updateCab: {
          loading: true,
          cab: [],
          error: "",
        },
      };
    case UPDATE_CAB_SUCCESS:
      return {
        ...state,
        updateCab: {
          loading: false,
          cab: action.payload,
          error: "",
        },
      };
    case UPDATE_CAB_FAILURE:
      return {
        ...state,
        updateCab: {
          loading: false,
          cab: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_CAB_REQUEST:
      return {
        ...state,
        fetchCab: {
          loading: true,
          cab: null,
          error: "",
        },
      };
    case FETCH_CAB_SUCCESS:
      return {
        ...state,
        fetchCab: {
          loading: false,
          cab: action.payload,
          error: "",
        },
      };
    case FETCH_CAB_FAILURE:
      return {
        ...state,
        fetchCab: {
          loading: false,
          cab: null,
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

export default cabReducer;
