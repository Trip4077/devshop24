import axios from 'axios';

export const GET_TEAMS = "GET_TEAMS";
export const ADD_TEAM = "ADD_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const ERROR = "ERROR";

export const getAllTeams = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/teams/')
       .then(res => {
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

export const addTeam = newTeam => dispatch => {

  axios.post('https://dev-shop-24-api.herokuapp.com/api/teams/', newTeam)
       .then(res => {
          dispatch({ type: ADD_TEAM, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}

export const deleteTeam = id => dispatch => {

  axios.delete(`https://dev-shop-24-api.herokuapp.com/api/teams/${id}`)
       .then(res => {
         console.log(res)
         dispatch({ type: DELETE_TEAM, payload: res.data });
       })
       .catch(err => {
         dispatch({ type: ERROR, payload: err });
       })

}