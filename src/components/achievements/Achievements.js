import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { fetchStats } from '../../actions/ActivityActions';
import { connect } from 'react-redux';

class Achievements extends Component {

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
  componentWillMount() {
    this.props.fetchStats();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log(nextProps);
      this.setState({
        activity: nextProps.activity
      });
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
            Personal Best Distance Times
        </Text>
          <Text style={styles.signupText}>
            5km:  29 mins 17 seconds
        </Text>
          <Text style={styles.signupText}>
            10km:  55 mins 43 seconds
      </Text>
          <Text style={styles.signupText}>
            15km:  0
      </Text>
      <Text style={styles.signupText}>
            20km:  0
      </Text>
      <Text style={styles.signupText}>
            Marathon:  0
      </Text>
        </View>

        <View style={styles.container} >
          <Text style={styles.title2Text}>
          Best Achievements
        </Text>
          <Text style={styles.signupText}>
          Highest calories burned:  452 kCal
        </Text>
          <Text style={styles.signupText}>
          Longest time spent running:  55 mins 43 seconds
      </Text>
          <Text style={styles.signupText}>
          Furthest distance:  10 km
      </Text>
      <Text style={styles.signupText}>
          Highest speed:  16.07 km/h
      </Text>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  activity: state.activity.activity,
});

export default connect(
  mapStateToProps,
  { fetchStats }
)(Achievements);

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
