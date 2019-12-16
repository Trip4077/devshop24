import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const ERROR = "ERROR";

export const getAllProjects = () => dispatch => {

  axios.get('https://dev-shop-24-api.herokuapp.com/api/projects/')
       .then(res => {
          dispatch({ type: GET_PROJECTS, payload: res.data });
       })
       .catch(err => {
          dispatch({ type: ERROR, payload: err });
       })

}

export const addProject = (project, props) => dispatch => {
   
   axios.post('https://dev-shop-24-api.herokuapp.com/api/projects/', project)
         .then(res => {
            console.log(res);
            dispatch({ type: ADD_PROJECT, payload: res.data });
            props.history.push('/team-builder');
         })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
         })

}