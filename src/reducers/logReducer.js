import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../action/types";

const intialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = intialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
} 
