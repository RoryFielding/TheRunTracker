import {
    ACTIVITY_ADD_INFO
  } from './types';
  import { Actions } from 'react-native-router-flux';
  import firebase from 'firebase';

  export const addActivityInfo = (distanceTravelled, speed, kCal, mainTimer, mapSnapshot) => {
    const { currentUser } = firebase.auth();

    return dispatch => {

      firebase
      .database()
      .ref(`/activity/${currentUser.uid}`)
      .push({
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