import {
  REGISTER_DEV,
  LOGIN_DEV,
  ERROR,
  GET_CLIENTS,
  SET_CLIENTS,
  GET_CLIENT
} from '../../actions';

const initialState = {
  loading: false,
  developer: {},
  client: {},
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

    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
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