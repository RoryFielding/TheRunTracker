import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Settings extends Component {

  render() {
    return (
      <View style={styles.container}>
       <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />
          <Text style={styles.titleText}>Analytics</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupButton: {
    color: '#4CA4B0',
    fontSize: 16,
    fontWeight: '500'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 32,
    top: -35,
    borderColor: 'black'
  },
});
