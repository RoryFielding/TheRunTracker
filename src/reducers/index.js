import { combineReducers } from 'redux';
import auth from './AuthReducer';
import post from './PostReducer';
import profile from './ProfileReducer';
import highlight from './HighlightReducer';
import activity from './ActivityReducer';

export default combineReducers({
  auth: auth,
  post: post,
  profile: profile,
  highlight: highlight,
  activity: activity
});
