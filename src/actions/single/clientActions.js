import axios from 'axios';

export const REGISTER_CLIENT = "REGISTER_CLIENT";
export const LOGIN_CLIENT = "LOGIN_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const GET_DEVS = "GET_DEVS";
export const SET_DEVS = "SET_DEVS";
export const GET_DEV = "GET_DEV";
export const LOGOUT = "LOGUT";
export const ERROR = "ERROR";

export const registerClient = client => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/clients/register', client)
       .then(res => {
         dispatch({ type: REGISTER_CLIENT, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const loginClient = login => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/clients/login', login)
       .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', 'client');

        dispatch({ type: LOGIN_CLIENT, payload: res.data.client });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const getAllDevs = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/devs')
       .then(res => {
         dispatch({ type: GET_DEVS, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const setDevs = list => dispatch => {
  dispatch({ type: SET_DEVS, payload: list });
}

export const getDev = id => dispatch => {

  axios.get(`https://dev-shop-24-api.herokuapp.com/api/devs/${id}`)
       .then(res => {
         dispatch({ type: GET_DEV, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       });

}

export const updateClient = (id, update) => dispatch => {
  axios.put(`https://dev-shop-24-api.herokuapp.com/api/clients/${id}`, update)
       .then(res => {
         dispatch({ type: UPDATE_CLIENT, payload: res.data });
       })
       .catch(err => {
        dispatch({ type: ERROR, payload: err });
       });
}

export const deleteClient = id => dispatch => {
  axios.delete(`https://dev-shop-24-api.herokuapp.com/api/clients/${id}`)
       .then(res => {
         dispatch({ type: LOGOUT, payload: res.data });
       })
       .catch(err => {
        dispatch({ type: ERROR, payload: err });
       });
}