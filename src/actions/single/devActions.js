import axios from 'axios';

export const REGISTER_DEV  = "REGISTER_DEV";
export const REGISTER_ERROR  = "REGISTER_ERROR";

export const registerDev = developer => dispatch => {
  console.log('ACTION FILE', developer);
  axios.post('https://dev-shop-24-api.herokuapp.com/api/devs/register', developer)
       .then(res => {
         console.log(res);
         dispatch({ type: REGISTER_DEV, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: REGISTER_ERROR, payload: err });
       });
}