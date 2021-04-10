import axios from "axios";
import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE,
  INSERT_ADMIN_REQUEST,
  INSERT_ADMIN_SUCCESS,
  INSERT_ADMIN_FAILURE,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_REQUEST,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  FETCH_ADMIN_REQUEST,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILURE,
} from "./adminTypes";

export const fetchAdmins = () => {
  return async (dispatch) => {
    await dispatch(fetchAdminsRequest());
    await axios
      .get("https://cba.rao.life/api/v1/admin/getAllAdmins")
      .then((response) => {
        // response.data is the users
        const admins = response.data;
        dispatch(fetchAdminsSuccess(admins));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchAdminsFailure(error));
      });
  };
};

export const insertAdmin = (admin) => {
  return async (dispatch) => {
    await dispatch(insertAdminRequest());
    await axios
      .post("https://cba.rao.life/api/v1/admin/insertAdmin", admin)
      .then((response) => {
        const admin = response.data;
        dispatch(insertAdminSuccess(admin));
      })
      .catch((error) => {
        dispatch(insertAdminFailure(error));
      });
  };
};

export const deleteAdmin = (adminId) => {
  return async (dispatch) => {
    await dispatch(deleteAdminRequest());
    await axios
      .delete(`https://cba.rao.life/api/v1/admin/deleteAdmin/${adminId}`)
      .then((response) => {
        const admin = response.data;
        dispatch(deleteAdminSuccess(admin));
      })
      .catch((error) => {
        dispatch(deleteAdminFailure(error));
      });
  };
};

export const updateAdmin = (admin) => {
  return async (dispatch) => {
    await dispatch(updateAdminRequest());
    await axios
      .put("https://cba.rao.life/api/v1/admin/updateAdmin", admin)
      .then((response) => {
        const admin = response.data;
        dispatch(updateAdminSuccess(admin));
      })
      .catch((error) => {
        dispatch(updateAdminFailure(error));
      });
  };
};

export const fetchAdmin = (adminId) => {
  return async (dispatch) => {
    await dispatch(fetchAdminRequest());
    await axios
      .get("https://cba.rao.life/api/v1/admin/getAdminById/" + adminId)
      .then((response) => {
        // response.data is the users
        const admin = response.data;
        dispatch(fetchAdminSuccess(admin));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchAdminFailure(error));
      });
  };
};

//Action Creator
export const fetchAdminsRequest = () => {
  return {
    type: FETCH_ADMINS_REQUEST,
  };
};

//Action Creator
export const fetchAdminsSuccess = (admins) => {
  return {
    type: FETCH_ADMINS_SUCCESS,
    payload: admins,
  };
};

//Action Creator
export const fetchAdminsFailure = (error) => {
  return {
    type: FETCH_ADMINS_FAILURE,
    payload: error,
  };
};

export const insertAdminRequest = () => {
  return {
    type: INSERT_ADMIN_REQUEST,
  };
};

export const insertAdminSuccess = (admin) => {
  return {
    type: INSERT_ADMIN_SUCCESS,
    payload: admin,
  };
};

export const insertAdminFailure = (error) => {
  return {
    type: INSERT_ADMIN_FAILURE,
    payload: error,
  };
};

export const deleteAdminRequest = () => {
  return {
    type: DELETE_ADMIN_REQUEST,
  };
};

export const deleteAdminSuccess = (admin) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: admin,
  };
};

export const deleteAdminFailure = (error) => {
  return {
    type: DELETE_ADMIN_FAILURE,
    payload: error,
  };
};

export const updateAdminRequest = () => {
  return {
    type: UPDATE_ADMIN_REQUEST,
  };
};

export const updateAdminSuccess = (admin) => {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    payload: admin,
  };
};

export const updateAdminFailure = (error) => {
  return {
    type: UPDATE_ADMIN_FAILURE,
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
