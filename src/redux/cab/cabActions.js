/*
D Sri Madhu Priya
*/

//  Axios helps to make http request
import axios from "axios";
import {
  FETCH_CABS_REQUEST,
  FETCH_CABS_SUCCESS,
  FETCH_CABS_FAILURE,
  INSERT_CAB_REQUEST,
  INSERT_CAB_SUCCESS,
  INSERT_CAB_FAILURE,
  DELETE_CAB_FAILURE,
  DELETE_CAB_SUCCESS,
  DELETE_CAB_REQUEST,
  UPDATE_CAB_REQUEST,
  UPDATE_CAB_SUCCESS,
  UPDATE_CAB_FAILURE,
  FETCH_CAB_REQUEST,
  FETCH_CAB_SUCCESS,
  FETCH_CAB_FAILURE,
} from "./cabTypes";

const API_URL = "https://cba.rao.life/api/v1"

export const fetchCabs = () => {
  return async (dispatch) => {
    await dispatch(fetchCabsRequest());
    await axios
    //http request to get all cabs
      .get(API_URL+"/cab/viewAllCabs")
      .then((response) => {
        // response.data is the users
        const cabs = response.data;
        dispatch(fetchCabsSuccess(cabs));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchCabsFailure(error));
      });
  };
};

export const insertCab = (cab) => {
  return async (dispatch) => {
    await dispatch(insertCabRequest());
    await axios
    //http post request - to insert a cab
      .post(API_URL+"/cab/insertCab", cab)
      .then((response) => {
        const cab = response.data;
        dispatch(insertCabSuccess(cab));
      })
      .catch((error) => {
        dispatch(insertCabFailure(error));
      });
  };
};

export const deleteCab = (cabId) => {
  return async (dispatch) => {
    await dispatch(deleteCabRequest());
    await axios
    //http delete request -  to delete a cab
      .delete(`${API_URL}/cab/deleteCab/${cabId}`)
      .then((response) => {
        const cab = response.data;
        dispatch(deleteCabSuccess(cab));
      })
      .catch((error) => {
        dispatch(deleteCabFailure(error));
      });
  };
};

export const updateCab = (cab) => {
  return async (dispatch) => {
    await dispatch(updateCabRequest());
    await axios
    //http put request -  to update a cab
      .put(API_URL+"/cab/updateCab", cab)
      .then((response) => {
        const cab = response.data;
        dispatch(updateCabSuccess(cab));
      })
      .catch((error) => {
        dispatch(updateCabFailure(error));
      });
  };
};

export const fetchCab = (cabId) => {
  return async (dispatch) => {
    await dispatch(fetchCabRequest());
    await axios
    // get request -  to get a cab by Id
      .get(API_URL+"/cab/getCabById/" + cabId)
      .then((response) => {
        // response.data is the users
        const cab = response.data;
        dispatch(fetchCabSuccess(cab));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(fetchCabFailure(error));
      });
  };
};

//Action Creator
export const fetchCabsRequest = () => {
  return {
    type: FETCH_CABS_REQUEST,
  };
};

//Action Creator
export const fetchCabsSuccess = (cabs) => {
  return {
    type: FETCH_CABS_SUCCESS,
    payload: cabs,
  };
};

//Action Creator
export const fetchCabsFailure = (error) => {
  return {
    type: FETCH_CABS_FAILURE,
    payload: error,
  };
};

//Action Creator
export const insertCabRequest = () => {
  return {
    type: INSERT_CAB_REQUEST,
  };
};

//Action Creator
export const insertCabSuccess = (cab) => {
  return {
    type: INSERT_CAB_SUCCESS,
    payload: cab,
  };
};

//Action Creator
export const insertCabFailure = (error) => {
  return {
    type: INSERT_CAB_FAILURE,
    payload: error,
  };
};

//Action Creator
export const deleteCabRequest = () => {
  return {
    type: DELETE_CAB_REQUEST,
  };
};

//Action Creator
export const deleteCabSuccess = (cab) => {
  return {
    type: DELETE_CAB_SUCCESS,
    payload: cab,
  };
};

//Action Creator
export const deleteCabFailure = (error) => {
  return {
    type: DELETE_CAB_FAILURE,
    payload: error,
  };
};

//Action Creator
export const updateCabRequest = () => {
  return {
    type: UPDATE_CAB_REQUEST,
  };
};

//Action Creator
export const updateCabSuccess = (cab) => {
  return {
    type: UPDATE_CAB_SUCCESS,
    payload: cab,
  };
};

//Action Creator
export const updateCabFailure = (error) => {
  return {
    type: UPDATE_CAB_FAILURE,
    payload: error,
  };
};

//Action Creator
export const fetchCabRequest = () => {
  return {
    type: FETCH_CAB_REQUEST,
  };
};

//Action Creator
export const fetchCabSuccess = (cab) => {
  return {
    type: FETCH_CAB_SUCCESS,
    payload: cab,
  };
};

//Action Creator
export const fetchCabFailure = (error) => {
  return {
    type: FETCH_CAB_FAILURE,
    payload: error,
  };
};
