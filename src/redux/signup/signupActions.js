import axios from "axios";
import history from "../../history";
import {
  INSERT_CUSTOMER_FAILURE,
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
} from "./signupTypes";

export const insertCustomer = (customer) => {
  return (dispatch) => {
    dispatch(insertCustomerRequest());
    axios
      .post("https://cba.rao.life/api/v1/customer/insertCustomer", customer)
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

export const insertCustomerFailure = (error) => {
  return {
    type: INSERT_CUSTOMER_FAILURE,
    payload: error,
  };
};
