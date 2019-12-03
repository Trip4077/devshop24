import axios from 'axios';

export const GET_TEAMS = "GET_TEAMS";
export const ERROR = "ERROR";

export const getAllTeams = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/teams/')
       .then(res => {
        console.log(res);
        dispatch({ type: GET_TEAMS, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const getDevTeams = devID => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/teams/')
       .then(res => {
         console.log(res);
       })
       .catch(err => {
        console.log(err);
       });

}