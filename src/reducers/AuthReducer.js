import {
  AUTH_LOGIN_USER,
  AUTH_LOGIN_USER_FAIL,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_CREATE_USER,
  AUTH_CREATE_USER_FAIL,
  AUTH_CREATE_USER_SUCCESS,
  NAME_INFO_ADD
} from '../actions/types';

const INITIAL_STATE = {
  errorLoging: '',
  errorCreating: '',
  loading: false,
  user: null
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CREATE_USER:
      return { ...state, ...INITIAL_STATE, loading: true, user: action.payload };
    case AUTH_CREATE_USER_FAIL:
      return { ...state, errorCreating: 'Creation failed! Please enter a valid email and an eight character alphanumeric password!', loading: false };
    case AUTH_CREATE_USER_SUCCESS:
      return { ...state, loading: false, error: '' };
    case AUTH_LOGIN_USER:
      return { ...state, ...INITIAL_STATE, loading: true, user: action.payload };
    case AUTH_LOGIN_USER_FAIL:
      return { ...state, errorLoging: 'Login failed! Please check the credentials!', loading: false };
    case AUTH_LOGIN_USER_SUCCESS:
      return { ...state, loading: false, error: '' };
      case NAME_INFO_ADD:
      return { ...state, ...INITIAL_STATE, loading: true, user: action.payload };
    default:
      return state;
  }
};

export default auth;
