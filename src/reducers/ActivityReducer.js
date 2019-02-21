import { ACTIVITY_ADD_INFO, ACTIVITY_FETCH, ACTIVITY_COMPLETE_INFO } from '../actions/types';

const INITIAL_STATE = [];

const activity = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVITY_ADD_INFO:
    return { ...state, ...INITIAL_STATE, loading: true, user: action.payload };
    case ACTIVITY_FETCH:
    return { ...state, activity: action.payload };
    case ACTIVITY_COMPLETE_INFO:
    return { ...state };
    default:
      return state;
  }
};

export default activity;
