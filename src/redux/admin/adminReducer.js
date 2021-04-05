import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE,
  INSERT_ADMIN_REQUEST,
  INSERT_ADMIN_SUCCESS,
  INSERT_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  FETCH_ADMIN_REQUEST,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILURE,
} from "./adminTypes";

const initialState = {
  viewAdmins: {
    loading: false,
    admins: [],
    error: "",
  },
  insertAdmin: {
    loading: false,
    admin: "",
    error: "",
  },
  deleteAdmin: {
    loading: false,
    admin: "",
    error: "",
  },
  updateAdmin: {
    loading: false,
    admin: "",
    error: "",
  },
  fetchAdmin: {
    loading: false,
    admin: "",
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS_REQUEST:
      return {
        ...state,
        viewAdmins: {
          loading: true,
          admins: [],
          error: "",
        },
      };
    case FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        viewAdmins: {
          loading: false,
          admins: action.payload,
          error: "",
        },
      };
    case FETCH_ADMINS_FAILURE:
      return {
        ...state,
        viewAdmins: {
          loading: false,
          admins: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case INSERT_ADMIN_REQUEST:
      return {
        ...state,
        insertAdmin: {
          loading: true,
          admin: [],
          error: "",
        },
      };
    case INSERT_ADMIN_SUCCESS:
      return {
        ...state,
        insertAdmin: {
          loading: false,
          admin: action.payload,
          error: "",
        },
      };
    case INSERT_ADMIN_FAILURE:
      return {
        ...state,
        insertAdmin: {
          loading: false,
          admin: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_ADMIN_REQUEST:
      return {
        ...state,
        deleteAdmin: {
          loading: true,
          admin: null,
          error: "",
        },
      };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        viewAdmins: {
          loading: false,
          admins: state.viewAdmins.admins.filter(
            (admin) => admin.adminId !== action.payload.adminId
          ),
          error: "",
        },
      };

    case DELETE_ADMIN_FAILURE:
      return {
        ...state,
        deleteAdmin: {
          loading: false,
          admin: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_ADMIN_REQUEST:
      return {
        ...state,
        updateAdmin: {
          loading: true,
          admin: [],
          error: "",
        },
      };
    case UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        updateAdmin: {
          loading: false,
          admin: action.payload,
          error: "",
        },
      };
    case UPDATE_ADMIN_FAILURE:
      return {
        ...state,
        updateAdmin: {
          loading: false,
          admin: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FETCH_ADMIN_REQUEST:
      return {
        ...state,
        fetchAdmin: {
          loading: true,
          admin: null,
          error: "",
        },
      };
    case FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        fetchAdmin: {
          loading: false,
          admin: action.payload,
          error: "",
        },
      };
    case FETCH_ADMIN_FAILURE:
      return {
        ...state,
        fetchAdmin: {
          loading: false,
          admin: null,
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

export default reducer;
