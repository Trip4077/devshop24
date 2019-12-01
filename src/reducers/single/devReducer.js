import {
  REGISTER_DEV
} from '../../actions';

const initialState = {
  loading: false,
  developer: {}
}

export const devReducer = (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_DEV:
      return {
        ...state,
        developer: action.payload
      }

    default:
      return { ...state }
  }
}