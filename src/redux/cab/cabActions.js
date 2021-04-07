import axios from "axios";
import history from "../../history";
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

export const fetchCabs = () => {
  return async (dispatch) => {
    await dispatch(fetchCabsRequest());
    await axios
      .get("https://cba.rao.life/api/v1/cab/viewAllCabs")
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
  return (dispatch) => {
    dispatch(insertCabRequest());
    axios
      .post("https://cba.rao.life/api/v1/cab/insertCab", cab)
      .then((response) => {
        const cab = response.data;
        dispatch(insertCabSuccess(cab));
        history.push("/admin/viewCabTypes");
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
      .delete(`https://cba.rao.life/api/v1/cab/deleteCab/${cabId}`)
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
  return (dispatch) => {
    dispatch(updateCabRequest());
    axios
      .put("https://cba.rao.life/api/v1/cab/updateCab", cab)
      .then((response) => {
        const cab = response.data;
        dispatch(updateCabSuccess(cab));
        history.push("/admin/viewCabTypes");
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
      .get("https://cba.rao.life/api/v1/cab/getCabById/" + cabId)
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

export const insertCabRequest = () => {
  return {
    type: INSERT_CAB_REQUEST,
  };
};

export const insertCabSuccess = (cab) => {
  return {
    type: INSERT_CAB_SUCCESS,
    payload: cab,
  };
};

export const insertCabFailure = (error) => {
  return {
    type: INSERT_CAB_FAILURE,
    payload: error,
  };
};

export const deleteCabRequest = () => {
  return {
    type: DELETE_CAB_REQUEST,
  };
};

export const deleteCabSuccess = (cab) => {
  return {
    type: DELETE_CAB_SUCCESS,
    payload: cab,
  };
};

export const deleteCabFailure = (error) => {
  return {
    type: DELETE_CAB_FAILURE,
    payload: error,
  };
};

export const updateCabRequest = () => {
  return {
    type: UPDATE_CAB_REQUEST,
  };
};

export const updateCabSuccess = (cab) => {
  return {
    type: UPDATE_CAB_SUCCESS,
    payload: cab,
  };
};

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
