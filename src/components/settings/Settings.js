import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationData: true,
            healthData: true,
            audioCues: null,
            time: null,
            distance: null,
            calories: null,
            pace: null
        };
    }

    checkLocationBox() {
        locationData = this.state.locationData;
        this.setState({ locationData: !this.state.locationData })
    }

    checkHealthBox() {
        healthData = this.state.healthData;
        this.setState({ healthData: !this.state.healthData })
    }

    checkAudioBox() {
        audioCues = this.state.audioCues;

        if (audioCues == true) {
            this.setState({ time: false })
            this.setState({ distance: false })
            this.setState({ pace: false })
            this.setState({ calories: false })
            this.setState({ audioCues: false })
        }
        this.setState({ audioCues: !this.state.audioCues })
    }

    checkTimeBox() {
        time = this.state.time;
        this.setState({ time: !this.state.time })
    }

    checkDistanceBox() {
        distance = this.state.distance;
        this.setState({ distance: !this.state.distance })
    }

    checkPaceBox() {
        pace = this.state.pace;
        this.setState({ pace: !this.state.pace })
    }

    checkCaloriesBox() {
        calories = this.state.calories;
        this.setState({ calories: !this.state.calories })
    }




    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 260, height: 160, top: -48 }}
                    source={require('../../../assets/images/icon3.png')} />
                <Text style={styles.titleText}>Settings</Text>
                <CheckBox
                    title='Location Data'
                    containerStyle={styles.checkBox}
                    checked={this.state.locationData}
                    textStyle={styles.signupText}
                    onPress={() => this.checkLocationBox()}
                />
                <CheckBox
                    title='Audio Cues'
                    containerStyle={styles.checkBox}
                    checked={this.state.audioCues}
                    textStyle={styles.signupText}
                    onPress={() => this.checkAudioBox()}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <CheckBox
                        title='Time'
                        containerStyle={styles.checkBox}
                        checked={this.state.time}
                        textStyle={styles.signupText}
                        onPress={() => this.checkTimeBox()}
                    />
                    <CheckBox
                        title='Distance'
                        containerStyle={styles.checkBox}
                        checked={this.state.distance}
                        textStyle={styles.signupText}
                        onPress={() => this.checkDistanceBox()}
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <CheckBox
                        title='Pace'
                        containerStyle={styles.checkBox}
                        checked={this.state.pace}
                        textStyle={styles.signupText}
                        onPress={() => this.checkPaceBox()}
                    />
                    <CheckBox
                        title='Calories'
                        containerStyle={styles.checkBox}
                        checked={this.state.calories}
                        textStyle={styles.signupText}
                        onPress={() => this.checkCaloriesBox()}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C272A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBox: {
        backgroundColor: '#1C272A',
        width: 125,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#1C272A',
        top: -55
    },
    tccheckBox: {
        backgroundColor: '#1C272A',
        width: 45,
        height: 45,
        borderColor: '#1C272A',
        flexDirection: 'row',
    },
    signupTextCont: {
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    TcText: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    TcTextCont: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        paddingVertical: 16
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    titleText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 32,
        top: -95,
        borderColor: 'black'
    },
    signupButton: {
        color: '#4CA4B0',
        fontSize: 16,
        fontWeight: '500'
    },
    tcButton: {
        color: '#4CA4B0',
        fontSize: 16,
    },
    inputBox: {
        width: 300,
        backgroundColor: '#0C2331',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        paddingVertical: 16
    },
    datePicker: {
        width: 200,
        paddingVertical: 16
    },
    button: {
        width: 300,
        backgroundColor: '#4CA4B0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    tcView: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
