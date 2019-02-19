import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Achievements extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pbTimeMin: 18,
      pbTimeSec: 5,
      pbDist: 5,
      pbCal: 456,
      overTime: 1231,
      overDist: 332,
      overCal: 1432
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />
        <Text style={styles.titleText}>Achievements</Text>

        <View style={styles.container} >
          <Text style={styles.title2Text}>
            Personal Best
        </Text>
          <Text style={styles.signupText}>
            Time:  {this.state.pbTimeMin} mins {this.state.pbTimeSec} seconds
        </Text>
          <Text style={styles.signupText}>
            Distance:  {this.state.pbDist} km
      </Text>
          <Text style={styles.signupText}>
            Calories Burned:  {this.state.pbCal} kCal
      </Text>
        </View>

        <View style={styles.container} >
          <Text style={styles.title2Text}>
            Overall
        </Text>
          <Text style={styles.signupText}>
            Time:  {this.state.overTime} mins
        </Text>
          <Text style={styles.signupText}>
            Distance:  {this.state.overDist} km
      </Text>
          <Text style={styles.signupText}>
            Calories Burned:  {this.state.overCal} kCal
      </Text>
        </View>
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
  title2Text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 22,
    borderColor: 'black'
  },
});
