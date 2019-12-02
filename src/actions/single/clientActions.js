import axios from 'axios';

export const REGISTER_CLIENT = "REGISTER_CLIENT";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_CLIENT = "LOGIN_CLIENT";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const registerClient = client => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/clients/register', client)
       .then(res => {
         dispatch({ type: REGISTER_CLIENT, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: REGISTER_ERROR, payload: err });
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
         dispatch({ type: LOGIN_ERROR, payload: err });
       })

}