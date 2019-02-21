import {
    ACTIVITY_ADD_INFO,
    ACTIVITY_FETCH,
    ACTIVITY_COMPLETE_INFO
  } from './types';
  import { Actions } from 'react-native-router-flux';
  import firebase from 'firebase';

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

  export const completeActivityInfo = (distanceTravelled, speed, kCal, mainTimer, notes) => {
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
        notes: notes
      })
      .then(() => {
        dispatch({ type: ACTIVITY_COMPLETE_INFO });
          Actions.stats()
      });
    };
  };