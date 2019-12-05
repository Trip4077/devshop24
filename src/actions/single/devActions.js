import axios from 'axios';

export const REGISTER_DEV  = "REGISTER_DEV";
export const LOGIN_DEV = "LOGIN_DEV";
export const UPDATE_DEV = "UPDATE_DEV";
export const GET_CLIENTS = "GET_CLIENTS";
export const SET_CLIENTS = "SET_CLIENTS";
export const GET_CLIENT = "GET_CLIENT";
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

export const setClients = list => dispatch => {
  dispatch({ type: SET_CLIENTS, payload: list });
}

export const getClient = id => dispatch => {
  axios.get(`https://dev-shop-24-api.herokuapp.com/api/clients/${id}`)
       .then(res => {
         console.log(res)
         dispatch({ type: GET_CLIENT, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       });
}

export const updateDev = (id, update) => dispatch => {
  axios.put(`https://dev-shop-24-api.herokuapp.com/api/devs/${id}`, update)
       .then(res => {
         dispatch({ type: UPDATE_DEV, payload: res.data });
       })
       .catch(err => {
        dispatch({ type: ERROR, payload: err });
       });
}