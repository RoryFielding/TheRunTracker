import { combineReducers } from 'redux';
import auth from './AuthReducer';
import profile from './ProfileReducer';
import activity from './ActivityReducer';

export default combineReducers({
  auth: auth,
  profile: profile,
  activity: activity,
});
