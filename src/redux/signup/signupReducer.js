/* 
Ankitha Suraksha
*/
//Import statement//
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
/* Desc
  A reducer is a function that determines changes to an application's state. 
  It uses the action it receives to determine this change. We have tools, like Redux, that
   help manage an application's state changes in a single store so that they behave consistently.
  */
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
//export statement//
export default signupReducer;
