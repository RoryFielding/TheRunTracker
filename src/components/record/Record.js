import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import TimeFormatter from 'minutes-seconds-milliseconds';
import pick from 'object.pick';

const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class Record extends Component {
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
    latitude: LATITUDE,
    longitude: LONGITUDE,
  };

  componentDidMount() {
    this._getLocationAsync();
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  _handleMapRegionChange = mapRegion => {
     console.log(mapRegion);
     this.setState({ mapRegion });
  };



  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });
  };

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
      laps: [],
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
        this.props.navigation.navigate('Activity', {
          distanceTravelled: this.state.distanceTravelled,
          speed: this.state.speed,
          kCal: this.state.kCal,
          mainTimer: this.state.mainTimer,
          mapSnapshot: this.state.mapSnapshot
        });
      }))
    };
  }




  render() {
    console.log(this.state.location)

    return (
      <View style={styles.container}>
        {
          this.state.location === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :

                <View style={styles.container}>
                  <MapView
                    style={styles.mapView}
                    region={this.state.mapRegion}
                    onRegionChange={this._handleMapRegionChange}
                    showsUserLocation={true} >
                  </MapView>
                  <MapView.Polyline
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