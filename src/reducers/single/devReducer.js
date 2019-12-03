import {
  REGISTER_DEV,
  LOGIN_DEV,
  ERROR,
  GET_CLIENTS,
  SET_CLIENTS
} from '../../actions';

const initialState = {
  loading: false,
  developer: {},
  clients: [],
  allClients: [],
  err: null
}

export const devReducer = (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_DEV:
      return {
        ...state,
        developer: action.payload,
        err: null
      }

    case LOGIN_DEV:
      return {
        ...state,
        developer: action.payload,
        err: null
      }

    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        allClients: action.payload,
        err: null
      }

    case SET_CLIENTS:
      return {
        ...state,
        clients: action.payload
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