/* 
Ankitha Suraksha
*/
//  Axios helps to make http request
import axios from "axios";
// History is a tool to manage session history in react.
import history from "../../history";  
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

const API_URL = "https://cba.rao.life/api/v1"
//Asynchronous state 
export const fetchUser = (user) => {
  return async (dispatch) => {   
    await dispatch(fetchUserRequest());

    await axios  // Http request
      .post(API_URL+"/login/signIn", user)
      .then(async (response) => {
        await dispatch(fetchUserSuccess(response.data));
        if (response.data === "Admin") {
          await dispatch(fetchAdminRequest());
          await axios   //htttp request
            .get(
              API_URL+"/admin/getAdminByUsername/" +
                user.username
            )
            .then((response1) => {
              dispatch(fetchAdminSuccess(response1.data));
              history.push("/signInHandle");
            })
            .catch((error) => {
              dispatch(fetchAdminFailure(error));
            });
        } else if (response.data === "Driver") {
          await dispatch(fetchDriverRequest());
          await axios
            .get(           // htttp request
              API_URL+"/driver/viewDriverByUsername/" +
                user.username
            )
            .then((response1) => {
              dispatch(fetchDriverSuccess(response1.data));
              history.push("/signInHandle");
            })
            .catch((error) => {
              dispatch(fetchDriverFailure(error));
            });
        } else {
          await dispatch(fetchCustomerRequest());
          await axios  // http request
            .get(
              API_URL+"/customer/getCustomerByUsername/" +
                user.username
            )
            .then((response1) => {
              dispatch(fetchCustomerSuccess(response1.data));
              history.push("/signInHandle");
            })
            .catch((error) => {
              dispatch(fetchCustomerFailure(error));
            });
        }
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

export const fetchCustomerByUsername = (username) => {
  return async (dispatch) => {           
    await dispatch(fetchCustomerRequest());
    await axios   // http request 
      .get(
        API_URL+"/customer/getCustomerByUsername/" + username
      )
      .then((response) => {
        dispatch(fetchCustomerSuccess(response.data));
        history.push("/resetPassword1/" + username);
      })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error));
      });
  };
};

export const fetchCustomerByUsername1 = (username) => {
  return async (dispatch) => {
    await dispatch(fetchCustomerRequest());
    await axios  // http request
      .get(
        API_URL+"/customer/getCustomerByUsername/" + username
      )
      .then((response) => {
        dispatch(fetchCustomerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error));
      });
  };
};

export const fetchCustomerByEmail = (email) => {
  return async (dispatch) => {
    await dispatch(fetchCustomerRequest());
    await axios  // http request
      .get(API_URL+"/customer/getCustomerByEmail/" + email)
      .then((response) => {
        dispatch(fetchCustomerSuccess(response.data));
        history.push("/resetPassword1/" + response.data.username);
      })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error));
      });
  };
};

export const fetchCustomerByMobileNumber = (mobileNumber) => {
  return async (dispatch) => {
    await dispatch(fetchCustomerRequest());
    await axios
      .get(   // http request
        API_URL+"/customer/getCustomerByMobileNumber/" +
          mobileNumber
      )
      .then((response) => {
        dispatch(fetchCustomerSuccess(response.data));
        history.push("/resetPassword1/" + response.data.username);
      })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error));
      });
  };
};

export const updateCustomer = (customer) => {
  return (dispatch) => {
    dispatch(updateCustomerRequest());
    axios   // http request
      .put(API_URL+"/customer/updateCustomer", customer)
      .then((response) => {
        const customer = response.data;
        dispatch(updateCustomerSuccess(customer));
        history.push("/resetPasswordSuccess");
      })
      .catch((error) => {
        dispatch(updateCustomerFailure(error));
      });
  };
};

//Action Creator
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

//Action Creator
export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

//Action Creator
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchAdminRequest = () => {
  return {
    type: FETCH_ADMIN_REQUEST,
  };
};

//Action Creator
export const fetchAdminSuccess = (admin) => {
  return {
    type: FETCH_ADMIN_SUCCESS,
    payload: admin,
  };
};

//Action Creator
export const fetchAdminFailure = (error) => {
  return {
    type: FETCH_ADMIN_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchDriverRequest = () => {
  return {
    type: FETCH_DRIVER_REQUEST,
  };
};

//Action Creator
export const fetchDriverSuccess = (driver) => {
  return {
    type: FETCH_DRIVER_SUCCESS,
    payload: driver,
  };
};

//Action Creator
export const fetchDriverFailure = (error) => {
  return {
    type: FETCH_DRIVER_FAILURE,
    payload: error,
  };
};
//Action Creator
export const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const fetchCustomerSuccess = (customer) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};
//Action Creator
export const updateCustomerRequest = () => {
  return {
    type: UPDATE_CUSTOMER_REQUEST,
  };
};

//Action Creator
export const updateCustomerSuccess = (customer) => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

//Action Creator
export const updateCustomerFailure = (error) => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error,
  };
};
