import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Location, Permissions } from 'expo';
import TimeFormatter from 'minutes-seconds-milliseconds';
import pick from 'object.pick';
import { addActivityInfo } from '../../actions/ActivityActions';
import { connect } from 'react-redux';

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const latDelta = 0.009;
const lngDelta = 0.009;
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
var geo = require('node-geo-distance');

class Record extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    routeCoordinates: [],
    lineCoordinates: [],
    prevLatLng: {},
    distanceTravelled: 0,
    location: { coords: { latitude: 0, longitude: 0 } },
    changeCount: 0,
    speed: 0,
    kCal: 0,
    sRunning: false,
    mainTimer: null,
    LapTimer: null,
    mainTimerStart: null,
    LapTimerStart: null,
    latitude: '',
    longitude: '',
    latDelta: latDelta,
    lngDelta: lngDelta,
    mapSnapshot: ''
  };

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    this._getLocationAsync();
  }

  calcDistance = newLatLng => {
    distanceTravelled = this.state.distanceTravelled;
    var arridx = this.state.lineCoordinates.length;


    if (arridx < 1) {
      return;
    }

    var coord1 = {
      latitude: newLatLng.latitude,
      longitude: newLatLng.longitude
    }

    if (arridx > 1) {
      let coord2 = this.state.prevLatLng;

      var haversineDist = geo.haversineSync(coord1, coord2);

      this.setState({
        distanceTravelled: distanceTravelled + (haversineDist / 1000)
      })
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  locationChanged = (location) => {

    //delcarations
    const { routeCoordinates } = this.state
    const { lineCoordinates } = this.state
    const { distanceTravelled } = this.state
    const positionLatLngs = pick(location.coords, ['latitude', 'longitude'])
    const newCoordinate = this.state.location.coords;
    isRunning = this.state.isRunning;

    //when user presses start
    if (isRunning === true) {
      //begin calculating distance
      this.calcDistance(newCoordinate)
      //append route coordinates 
      this.setState({ lineCoordinates: lineCoordinates.concat(positionLatLngs) })
    }

    //update user location and map drawn
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
      this.setState({ location, region })

    //set previous coord and update all data
    this.setState({ prevLatLng: routeCoordinates[this.state.routeCoordinates.length - 1] })
    this.setState({ routeCoordinates: routeCoordinates.concat(positionLatLngs) })

    //set speed
    if (location.coords.speed > 0) {
      this.setState({ speed: location.coords.speed });
    }
    //when not moving api returns -1 for speed so set 0 in this case
    else {
      this.setState({ speed: 0 })
    }

    //Calculate calories burned placeholder
    //Men use the following formula:
    //Calories Burned = [(Age x 0.2017) — (Weight x 0.09036) + (Heart Rate x 0.6309) — 55.0969] x Time / 4.184.
    //Women use the following formula:
    //Calories Burned = [(Age x 0.074) — (Weight x 0.05741) + (Heart Rate x 0.4472) — 20.4022] x Time / 4.184.

    //Less accurate:
    //Running (total calories spent per km) 
    //.75 x your weight (in lbs.)

    //total cal burned in a km
    var kCal = (0.75 * 65) / 1000
    var mTravlled = (distanceTravelled * 1000)

    kCal = mTravlled * kCal;
    if (kCal > 0) {
      this.setState({ kCal: kCal })
    }
  }

  _renderKcal() {
    return (
      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.kCal).toFixed(2)} kCal
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderTimers() {
    return (
      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            Time: {TimeFormatter(this.state.mainTimer)}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderDistance() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderSpeed() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.speed).toFixed(2)} kmph
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderStartButton() {
    return (
      <View styles={styles.rowWrapper}>
        <TouchableHighlight style={styles.rowWrapper} underlayColor='#ddd' onPress={this.handleStartStop.bind(this)} style={styles.buttonClick}>
          <Text style={[styles.startBtn, this.state.isRunning && styles.stopBtn]}>{this.state.isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _renderFinishButton() {
    return (
      <View styles={styles.rowWrapper}>
        <TouchableHighlight style={styles.rowWrapper} underlayColor='#777' onPress={this.handleLapReset.bind(this)} style={styles.buttonClick}>
          <Text>{(this.state.mainTimerStart && !this.state.isRunning) ? 'Reset' : 'Finish'}</Text>
        </TouchableHighlight>
      </View>
    );
  }


  _renderBackground() {
    return (
      <View styles={styles.mapBackground}>
      </View>
    );
  }

  handleStartStop() {
    let { isRunning, firstTime, mainTimer, LapTimer } = this.state;

    //Stop button clicked
    if (isRunning) {
      clearInterval(this.interval);
      this.setState({
        isRunning: false,
      });
      return;
    }

    //Start button clicked
    this.setState({
      mainTimerStart: new Date(),
      LapTimerStart: new Date(),
      isRunning: true
    });

    this.interval = setInterval(() => {
      this.setState({
        mainTimer: new Date() - this.state.mainTimerStart + mainTimer,
        LapTimer: new Date() - this.state.LapTimerStart + LapTimer,
      });
    }, 30);
  }

  async handleLapReset() {
    let { isRunning, mainTimerStart } = this.state;
    //Reset button clicked
    if (mainTimerStart && !isRunning) {
      this.setState({
        mainTimerStart: null,
        LapTimerStart: null,
        mainTimer: 0,
        LapTimer: 0,
        kCal: 0,
        speed: 0,
        distanceTravelled: 0,
        routeCoordinates: [],
        lineCoordinates: [],
        prevLatLng: {},
      });
    }

    //Finish button clicked
    if (isRunning) {
      // 'takeSnapshot' takes a config object with the
      // following options
      const snapshot = this.map.takeSnapshot({
        width: 300,      // optional, when omitted the view-width is used
        height: 300,     // optional, when omitted the view-height is used
        format: 'png',   // image formats: 'png', 'jpg' (default: 'png')
        quality: 0.8,    // image quality: 0..1 (only relevant for jpg, default: 1)
        result: 'file'   // result types: 'file', 'base64' (default: 'file')
      });
      snapshot.then((uri) => {
        this.setState({ mapSnapshot: uri });
      });
      snapshot.then((uri => {
        this.props.addActivityInfo(this.state.distanceTravelled, this.state.speed, this.state.kCal, this.state.mainTimer, this.state.mapSnapshot)
      }))
      snapshot.then((uri => {
        clearInterval(this.interval);
        this.setState({
          isRunning: false,
          mainTimerStart: null,
          LapTimerStart: null,
          mainTimer: 0,
          LapTimer: 0,
          kCal: 0,
          speed: 0,
          distanceTravelled: 0,
          routeCoordinates: [],
          lineCoordinates: [],
          prevLatLng: {},
        });
      }))
    };
  }


  render() {
    return (
      <View style={styles.container}>
        {
          this.state.location === null ?
            <View style={styles.container}>
              <Text>Finding your current location...</Text>
              <ActivityIndicator />
            </View> :
            this.state.hasLocationPermissions === false ?
              <View style={styles.container}>
                <Text>Finding location access perminsions...</Text>
                <ActivityIndicator />
              </View> :
              this.state.region === null ?
                <Text>Map region doesn't exist.</Text> :

                <View style={styles.container}>
                  <Expo.MapView
                    style={styles.mapView}
                    showsUserLocation={true}
                    region={{
                      latitude: this.state.location.coords.latitude,
                      longitude: this.state.location.coords.longitude,
                      latitudeDelta: this.state.latDelta,
                      longitudeDelta: this.state.lngDelta
                    }}
                    ref={map => { this.map = map }}
                  >

                    <Expo.MapView.Polyline
                      coordinates={this.state.lineCoordinates}
                      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                      strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                      ]}
                      strokeWidth={6}
                    />
                  </Expo.MapView>
                  <View style={styles.map}>
                    <View style={{ flex: 1 }}>
                      <View style={{ flex: 2, backgroundColor: '#1C272A' }} >
                        <Image style={{ width: 260, height: 160, marginHorizontal: 60, marginTop: -40 }}
                          source={require('../../../assets/images/icon3.png')} />
                      </View>
                      <View style={{ flex: 3 }} />
                    </View>
                  </View>
                  <View style={styles.stats}>
                    {this._renderTimers()}
                    <View style={styles.buttonContainer}>
                      {this._renderDistance()}
                      {this._renderSpeed()}
                    </View>
                    {this._renderKcal()}
                  </View>
                  <View style={styles.buttonWrapper}>
                    {this._renderStartButton()}
                    {this._renderFinishButton()}
                  </View>
                </View>
        }
      </View>
    );
  }

}

const mapStateToProps = state => ({
  distanceTravelled: state.distanceTravelled,
  speed: state.speed,
  kCal: state.kCal,
  mainTimer: state.mainTimer,
  mapSnapshot: state.mapSnapshot
});

export default connect(
  mapStateToProps,
  { addActivityInfo }
)(Record);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    top: 160
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
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  buttonClick: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  topBarContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  timerWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  timerWrapperInner: {
    borderWidth: 0.5,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
  },
  top: {
    flex: 1,
  },
  bottom: {
    height: 50
  },
  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'center'
  },
  LapTimer: {
    fontSize: 18,
    borderWidth: 0.5,
    alignSelf: 'flex-end'
  },
  startBtn: {
    color: '#00cc00'
  },
  stopBtn: {
    color: 'red'
  },
  buttonWrapper: {
    paddingVertical: 25,
    bottom: -20,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#1C272A',
    borderRadius: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "transparent",
    right: 45,
    width: 180
  },
  buttonContainer2: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "transparent",
    width: 180
  },
  stats: {
    marginVertical: -30,
    height: 80,
    width: 180,
    bottom: 370,
  },
  mapBackground1: {
    flex: 1,
  },
  mapBackground2: {
    flex: 2,
    backgroundColor: 'red',
  },
  mapBackground3: {
    flex: 3,
    backgroundColor: 'blue',
  }
});