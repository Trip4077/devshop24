import axios from 'axios';

export const REGISTER_CLIENT = "REGISTER_CLIENT";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerClient = client => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/clients/register', client)
       .then(res => {
         console.log(res);
         dispatch({ type: REGISTER_CLIENT, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: REGISTER_ERROR, payload: err });
       })

}