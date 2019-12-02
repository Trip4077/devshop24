import axios from 'axios';

export const REGISTER_DEV  = "REGISTER_DEV";
export const LOGIN_DEV = "LOGIN_DEV";
export const GET_CLIENTS = "GET_CLIENTS";
export const ERROR  = "ERROR";

export const registerDev = developer => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/devs/register', developer)
       .then(res => {
         dispatch({ type: REGISTER_DEV, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       });

}

export const loginDev = login => dispatch => {
  
  axios.post('https://dev-shop-24-api.herokuapp.com/api/devs/login', login)
       .then(res => {
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('role', 'dev');
         
         dispatch({ type: LOGIN_DEV, payload: res.data.user });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const getAllClients = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/clients')
       .then(res => {
         dispatch({ type: GET_CLIENTS, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: GET_CLIENTS, payload: err });
       })

}