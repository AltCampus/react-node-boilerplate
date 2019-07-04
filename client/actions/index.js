import axios from 'axios';

const rootUrl = 'http://localhost:3000/api/v1';

const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
}

export const getCurrentUser = () => {
  return (dispatch => {
    axios.get(`${rootUrl}/users/me`)
    .then(res => {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        data: res.data
      })
    })
    .catch(err => {
      dispatch({type: 'USER_LOGIN_FAILED'})
    })
  })
}

export const noToken = () => {
  return(dispatch => {
    dispatch({
      type: 'NO_TOKEN'
    })
  })
}