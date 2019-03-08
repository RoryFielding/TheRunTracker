import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Picker
} from 'react-native';
import { fetchStats } from '../../actions/ActivityActions';
import { connect } from 'react-redux';
import Button from '../common/Button';
import {
  LineChart
} from 'react-native-chart-kit'
import TimeFormatter from 'minutes-seconds-milliseconds';
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

class Stats extends Component {
  state = {
    stats: {},
    x: 'date',
    y: 'dist'
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

  renderChart(y) {
    //when data loaded from firebase
    if (this.state.activity) {

      const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#1C272A',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2 // optional, default 3
      }

      var dataArray = [];

      for (var key in this.state.activity) {
        if (this.state.activity.hasOwnProperty(key)) {
          var obj = this.state.activity[key];
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              console.log(prop + " = " + obj[prop]);
              dataArray.push(obj[prop]);
            }
          }
        }
      }

      var activityNumber = dataArray.length;
      var dateData = [];
      var distanceData = [];
      var timeData = [];
      var speedData = [];
      var kCalData = [];

      for (var i = 0; i < activityNumber; i++) {
        if (i % 6 == 0) {
          dateData.push(dataArray[i]);
        }
        if (i % 6 == 1) {
          distanceData.push(dataArray[i]);
        }
        if (i % 6 == 2) {
          kCalData.push(dataArray[i]);
        }
        if (i % 6 == 3) {
          timeData.push(dataArray[i]);
        }
        if (i % 6 == 5) {
          speedData.push(dataArray[i]);
        }
      }

      let data = {
        labels: dateData,
        datasets: [{
          data: distanceData,
          color: (opacity = 1) => '#4CA4B0', // optional
          strokeWidth: 2 // optional
        }]
      }

      if(y == 'speed'){
         data = {
          labels: dateData,
          datasets: [{
            data: speedData,
            color: (opacity = 1) => '#4CA4B0', // optional
            strokeWidth: 2 // optional
          }]
        }
      }
      if(y == 'dist'){
        data = {
          labels: dateData,
          datasets: [{
            data: distanceData,
            color: (opacity = 1) => '#4CA4B0', // optional
            strokeWidth: 2 // optional
          }]
        }
      }
      if(y == 'kcal'){
        data = {
          labels: dateData,
          datasets: [{
            data: kCalData,
            color: (opacity = 1) => '#4CA4B0', // optional
            strokeWidth: 2 // optional
          }]
        }
      }
      // if(y == 'time'){
      //   data = {
      //     labels: dateData,
      //     datasets: [{
      //       data: timeData,
      //     }]
      //   }
    
      // }

      return (

        <View style={styles.container}>
        <View style={styles.container}>
        <Picker
          selectedValue={this.state.y}
          style={{ height: 50, width: 100, top: -100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ y: itemValue })
          }>
          <Picker.Item label="Distance" value="dist" />
          <Picker.Item label="kCal" value="kcal" />
          <Picker.Item label="Speed" value="speed" />
        </Picker>
        </View>
          {this.renderText()}
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      );
    }
    else {
      return <ActivityIndicator />;
    }
  }

  onPress = () => {
    console.log(this.state.x)
    console.log(this.state.y)
  };

  renderText() {
    if(this.state.y == 'dist'){
      return <Text style={styles.signupText2}> Distance Data: </Text>
    }
    if(this.state.y == 'kcal'){
      return <Text style={styles.signupText2}> kCal Data: </Text>
    }
    if(this.state.y == 'speed'){
      return <Text style={styles.signupText2}> Speed Data: </Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />
        <Text style={styles.titleText}>Analytics</Text>
        <Text style={styles.signupText}>
        View your activity data over the last week.
        </Text>
        <Text style={styles.signupText}>
            Select a value to plot data below.
        </Text>
        {this.renderChart(this.state.y)}
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
)(Stats);

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
    fontSize: 16,
    top: -35
  },
  signupText2: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 32,
    top: -35,
    borderColor: 'black'
  },
});
