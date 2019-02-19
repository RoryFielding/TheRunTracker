import {
  AUTH_CREATE_USER,
  AUTH_CREATE_USER_FAIL,
  AUTH_CREATE_USER_SUCCESS,
  AUTH_LOGIN_USER,
  AUTH_LOGIN_USER_FAIL,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_NAME_INFO_ADD,
  AUTH_CONSENT_INFO_ADD,
  AUTH_HEIGHT_INFO_ADD,
  AUTH_WEIGHT_INFO_ADD,
  AUTH_GOAL_INFO_ADD
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const createUser = (email, password) => {
  return dispatch => {
    dispatch({ type: AUTH_CREATE_USER });

    const tmpString = email.split('@');
    const username = tmpString[0];

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .then(() => {
        const { currentUser } = firebase.auth();
        try {
          firebase
            .database()
            .ref(`/users/${currentUser.uid}/`)
            .set({
              profile: {
                email,
                password,
              }
            });
        } catch (error) {
          alert(error);
        }
      })
      .catch(() => createUserFail(dispatch));
  };
};

export const addUserNameInfo = (firstName, lastName, age, date) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/name`)
      .set({
        firstName: firstName,
        lastName: lastName,
        age: age,
        date: date
      })
      .then(() => {
        dispatch({ type: AUTH_NAME_INFO_ADD });
        Actions.signup2()
      });
  };
};

export const addUserConsentInfo = (dpConsent, dtocConsent, locAccess) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/consent`)
      .set({
        dpConsent: dpConsent,
        dtocConsent: dtocConsent,
        locAccess: locAccess,
      })
      .then(() => {
        dispatch({ type: AUTH_CONSENT_INFO_ADD });
        Actions.signup3()
      });
  };
};

export const addUserHeightInfo = (height) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/height`)
      .set({
        height: height,
      })
      .then(() => {
        dispatch({ type: AUTH_HEIGHT_INFO_ADD });
        Actions.signup4()
      });
  };
};

export const addUserWeightInfo = (weight) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/weight`)
      .set({
        weight: weight,
      })
      .then(() => {
        dispatch({ type: AUTH_WEIGHT_INFO_ADD });
        Actions.signup5()
      });
  };
};

export const addUserGoalInfo = (loseChecked, maintainChecked, gainChecked) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/goal`)
      .set({
        loseChecked: loseChecked,
        maintainChecked: maintainChecked,
        gainChecked: gainChecked
      })
      .then(() => {
        dispatch({ type: AUTH_GOAL_INFO_ADD });
        Actions.signup6()
      });
  };
};

const createUserFail = dispatch => {
  dispatch({ type: AUTH_CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_CREATE_USER_SUCCESS,
    payload: user
  });

  Actions.signup1();
};

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({ type: AUTH_LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: AUTH_LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.app();
};
