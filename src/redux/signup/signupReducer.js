import {
  INSERT_CUSTOMER_FAILURE,
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
} from "./signupTypes";

const initialState = {
  loading: false,
  customer: "",
  error: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_CUSTOMER_REQUEST:
      return {
        loading: true,
        customer: "",
        error: "",
      };
    case INSERT_CUSTOMER_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
        error: "",
      };
    case INSERT_CUSTOMER_FAILURE:
      return {
        loading: false,
        customer: "",
        error: {
          message: action.payload.response
            ? action.payload.response.data
            : action.payload.message,
        },
      };

    default:
      return state;
  }
};

export default signupReducer;
