import {
  REGISTER_CLIENT,
  REGISTER_ERROR,
  LOGIN_CLIENT,
  LOGIN_ERROR
} from '../../actions';

const initialState = {
  loading: false,
  client: {},
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

    case REGISTER_ERROR:
      return {
        ...state,
        err: action.payload
      }

    case LOGIN_CLIENT:
      return {
        ...state,
        client: action.payload,
        err: null
      }

    case LOGIN_ERROR:
        return {
          ...state,
          err: action.payload
        }

    default:
      return { ...state }
  }
}