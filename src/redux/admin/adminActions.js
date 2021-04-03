import axios from 'axios'
import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE
} from './adminTypes'

export const fetchAdmins = () => {
  return (dispatch)=>  {
    dispatch(fetchAdminsRequest())
    axios
      .get('https://cab.rao.life/api/v1/admin/getAllAdmins')
      .then(response => {
        // response.data is the users
        const admins = response.data
        dispatch(fetchAdminsSuccess(admins))
      })
      .catch(error => {
        // error.message is the error message
        
        dispatch(fetchAdminsFailure(error))
      })
  }
}

//Action Creator
export const fetchAdminsRequest = () => {
  return {
    type: FETCH_ADMINS_REQUEST
  }
}

//Action Creator
export const fetchAdminsSuccess = admins => {
  return {
    type: FETCH_ADMINS_SUCCESS,
    payload: admins
  }
}

//Action Creator
export const fetchAdminsFailure = error => {
  return {
    type: FETCH_ADMINS_FAILURE,
    payload: error
  }
}