import {
  REGISTER_DEV,
  REGISTER_ERROR,
  LOGIN_DEV,
  LOGIN_ERROR
} from '../../actions';

const initialState = {
  loading: false,
  developer: {},
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

    case REGISTER_ERROR:
        return {
          ...state,
          err: action.payload
        }

    case LOGIN_DEV:
      return {
        ...state,
        developer: action.payload,
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