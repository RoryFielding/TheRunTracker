import { ACTIVITY_ADD_INFO } from '../actions/types';

const INITIAL_STATE = [];

const activity = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVITY_ADD_INFO:
    return { ...state, ...INITIAL_STATE, loading: true, user: action.payload };
    default:
      return state;
  }
};

export default activity;
