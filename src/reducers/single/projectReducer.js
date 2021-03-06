import {
  GET_PROJECTS,
  ADD_PROJECT,
  ERROR
} from '../../actions';

const initialState = {
  loading: false,
  project: {},
  projects: [],
  allProjects: [],
  err: null
}

export const projectReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        allProjects: action.payload,
        err: null
      }

    case ADD_PROJECT:
      return {
        ...state,
        project: action.payload,
        err: null
      }

    case ERROR:
      return {
        ...state,
        err: action.payload
      }

    default:
      return { ...state }
  }
}