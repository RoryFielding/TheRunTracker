import {
    ACTIVITY_ADD_INFO,
    ACTIVITY_FETCH,
    ACTIVITY_COMPLETE_INFO,
    ACTIVITY_FETCH_STATS,
    ACTIVITY_GOAL_INFO_KCAL
  } from './types';
  import { Actions } from 'react-native-router-flux';
  import firebase from 'firebase';
  import moment from 'moment';
  

  export const addActivityInfo = (distanceTravelled, speed, kCal, mainTimer, mapSnapshot) => {
    const { currentUser } = firebase.auth();

    return dispatch => {

      firebase
      .database()
      .ref(`/new_activity/${currentUser.uid}/new_activity`)
      .set({
        distanceTravelled: distanceTravelled,
        speed: speed,
        kCal: kCal,
        mainTimer: mainTimer,
        mapSnapshot: mapSnapshot
      })
      .then(() => {
        dispatch({ type: ACTIVITY_ADD_INFO });
          Actions.activityComplete()
      });
    };
  };

  export const fetchActivity = () => {
    const { currentUser } = firebase.auth();
  
    return dispatch => {
      firebase
        .database()
        .ref(`/new_activity/${currentUser.uid}/new_activity`)
        .on('value', snapshot => {
          dispatch({
            type: ACTIVITY_FETCH,
            payload: snapshot.val()
          });
        });
    };
  };

  export const completeActivityInfo = (distanceTravelled, speed, kCal, mainTimer, notes, date) => {
    const { currentUser } = firebase.auth();
    return dispatch => {

      firebase
      .database()
      .ref(`/activity/${currentUser.uid}/activity`)
      .push({
        distanceTravelled: distanceTravelled,
        speed: speed,
        kCal: kCal,
        mainTimer: mainTimer,
        notes: notes,
        date: date
      })
      .then(() => {
        dispatch({ type: ACTIVITY_COMPLETE_INFO });
          Actions.stats()
      });
    };
  };

  export const setGoalInfo = (date, kCal) => {
    const { currentUser } = firebase.auth();
    return dispatch => {

      firebase
      .database()
      .ref(`/users/${currentUser.uid}/profile/goal/`)
      .push({
        kCal: kCal,
        date: date
      })
      .then(() => {
        dispatch({ type: ACTIVITY_GOAL_INFO_KCAL });
      });
    };
  };

  export const fetchStats = () => {
    const { currentUser } = firebase.auth();
  
    return dispatch => {
      firebase
        .database()
        .ref(`/activity/${currentUser.uid}/activity`)
        .on('value', snapshot => {
          dispatch({
            type: ACTIVITY_FETCH_STATS,
            payload: snapshot.val()
          });
        });
    };
  };