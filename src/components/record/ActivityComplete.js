import React, { Component } from 'react';
import { Platform, ScrollView, View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';
import { fetchActivity, completeActivityInfo, setGoalInfo } from '../../actions/ActivityActions';
import { connect } from 'react-redux';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

class ActivityComplete extends Component {
    state = {
        notes: '',
        date: '',
    };

    componentWillMount() {
        this.props.fetchActivity();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            console.log(nextProps);
            formatTimer = TimeFormatter(nextProps.activity.activity.mainTimer);
            this.setState({
                distanceTravelled: nextProps.activity.activity.distanceTravelled,
                speed: nextProps.activity.activity.speed,
                kCal: nextProps.activity.activity.kCal,
                mainTimer: formatTimer,
                mapSnapshot: nextProps.activity.activity.mapSnapshot,
            });
        }
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        
        this.setState({
            //Setting the value of the date time
            date: date + '/' + month + '/' + year,
        });
    }


    renderButton1() {
        return <Button textButton="SAVE" onPress={this.onPress.bind(this)} />;
    }

    renderButton2() {
        return <Button textButton="BACK" onPress={this.onGoBack.bind(this)} />;
    }

    onGoBack = () => {
        Actions.record();
    };

    onPress = () => {
        this.props.completeActivityInfo(this.state.distanceTravelled, this.state.speed, this.state.kCal, this.state.mainTimer, this.state.notes, this.state.date);
        this.props.setGoalInfo(this.state.date, this.state.kCal)
    };


    onChangeNotes = text => {
        this.setState({
            notes: text
        })
    }

    renderText() {
        if (this.state.mapSnapshot) {
            return (
                <View style={styles.container}>
                    <View style={styles.rowWrap}>
                        <Text style={styles.activityText2}>
                            Distance: {parseFloat(this.state.distanceTravelled.toFixed(2))} km
                        </Text>
                        <Text style={styles.activityText2}>
                            Speed: {parseFloat(this.state.speed.toFixed(2))} kmph
                        </Text>
                    </View>
                    <View style={styles.rowWrap}>
                        <Text style={styles.activityText2}>
                            Time: {this.state.mainTimer}
                        </Text>
                        <Text style={styles.activityText2}>
                            kCal Burned: {parseFloat(this.state.kCal.toFixed(2))}
                        </Text>
                        <Text style={styles.activityText3}>
                            Route Snapsnot:
                        </Text>
                        <Image style={{ width: 260, height: 160, marginVertical: 10 }}
                            source={{ uri: this.state.mapSnapshot }} />
                    </View>
                </View>
            );
        }
        else {
            return <ActivityIndicator />;
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>

                    <Image style={{ width: 260, height: 160 }}
                        source={require('../../../assets/images/icon3.png')} />
                    <Text style={styles.titleText}>Completed Activity</Text>
                    <Text style={styles.activityText}>
                        Date/Time: {this.state.date}
                    </Text>
                    {this.renderText()}
                    <Text style={styles.activityText3}>
                        Notes:
                    </Text>
                    <Input placeholder="Notes"
                        onChange={this.onChangeNotes.bind(this)}
                        value={this.state.notes} />
                    {this.renderButton1()}
                    {this.renderButton2()}
                </View>
            </ScrollView>

        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
});

export default connect(
    mapStateToProps,
    { fetchActivity, completeActivityInfo, setGoalInfo }
)(ActivityComplete);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
    },
    container2: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    activityText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 18,
    },
    activityText2: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    activityText3: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 18,
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
    buttonText: {
        fontSize: 32,
        color: 'blue',
        right: 25,
    },
    rowWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    inputBox: {
        width: 300,
        backgroundColor: '#0C2331',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        paddingVertical: 16,
    },
    button: {
        width: 300,
        backgroundColor: '#4CA4B0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});
