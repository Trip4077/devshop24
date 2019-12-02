import axios from 'axios';

export const REGISTER_DEV  = "REGISTER_DEV";
export const REGISTER_ERROR  = "REGISTER_ERROR";
export const LOGIN_DEV = "LOGIN_DEV";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const registerDev = developer => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/devs/register', developer)
       .then(res => {
         dispatch({ type: REGISTER_DEV, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: REGISTER_ERROR, payload: err });
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
         dispatch({ type: LOGIN_ERROR, payload: err })
       })

}