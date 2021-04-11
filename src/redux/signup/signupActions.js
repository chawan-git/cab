/*
   Ankitha Suraksha
*/

//Import statement//
import axios from "axios";
import history from "../../history";
import {
  INSERT_CUSTOMER_FAILURE,
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
} from "./signupTypes";

const API_URL = "https://cba.rao.life/api/v1"
export const insertCustomer = (customer) => {
  return async (dispatch) => {
    await dispatch(insertCustomerRequest());
    //axios is used to send http request
    await axios
      .post(API_URL+"/customer/insertCustomer", customer)
      .then((response) => {
        const customer = response.data;
        dispatch(insertCustomerSuccess(customer));
        history.push("/login");
      })
      .catch((error) => {
        dispatch(insertCustomerFailure(error));
      });
  };
};

export const insertCustomerRequest = () => {
  return {
    type: INSERT_CUSTOMER_REQUEST,
  };
};

export const insertCustomerSuccess = (customer) => {
  return {
    type: INSERT_CUSTOMER_SUCCESS,
    payload: customer,
  };
};
//Export statement
export const insertCustomerFailure = (error) => {
  return {
    type: INSERT_CUSTOMER_FAILURE,
    payload: error,
  };
};
