import {
  GET_TEAMS,
  ADD_TEAM,
  ERROR
} from '../../actions';

const initialState = {
  loading: false,
  team: {},
  teams: [],
  allTeams: [],
  err: null
}

export const teamReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
        allTeams: action.payload,
        err: null
      }

    case ADD_TEAM:
      return {
        ...state,
        team: action.payload,
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