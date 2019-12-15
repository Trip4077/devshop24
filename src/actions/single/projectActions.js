import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';
export const ERROR = "ERROR";

export const getAllProjects = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/projects/')
       .then(res => {
          console.log(res);
          dispatch({ type: GET_PROJECTS, payload: res.data });
       })
       .catch(err => {
          dispatch({ type: ERROR, payload: err });
       })

}