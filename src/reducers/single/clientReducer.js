import {
  REGISTER_CLIENT,
  LOGIN_CLIENT,
  GET_DEVS,
  ERROR
} from '../../actions';

const initialState = {
  loading: false,
  client: {},
  devs: [],
  err: null
}

export const clientReducer = (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_CLIENT:
      return {
        ...state,
        client: action.payload,
        err: null
      }

    case LOGIN_CLIENT:
      return {
        ...state,
        client: action.payload,
        err: null
      }
    
    case GET_DEVS:
        return {
          ...state,
          devs: action.payload,
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