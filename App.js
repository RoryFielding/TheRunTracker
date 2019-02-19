import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import firebase from 'firebase';
import Main from './src/Main';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBt3R40KsW2AijL4QoSFSFRPISO1VCEkQk",
      authDomain: "runtracker-345ae.firebaseapp.com",
      databaseURL: "https://runtracker-345ae.firebaseio.com",
      projectId: "runtracker-345ae",
      storageBucket: "runtracker-345ae.appspot.com",
      messagingSenderId: "969622388685"
    };
    firebase.initializeApp(config);
  }
  

  render() {
      return (
       <View style={styles.container}>
       <Main />
       </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
