import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserActivityLevelInfo } from '../../actions/AuthActions';

class SignUp_06 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sedentary: false,
            lowActive: false,
            active: false,
            veryActive: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkSedentaryBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ sedentary: !this.state.sedentary })
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checklowActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ lowActive: !this.state.lowActive })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checkActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ active: !this.state.active })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (veryActive === true) {
            this.setState({ veryActive: !this.state.veryActive })
        }
    }

    checkveryActiveBox() {
        sedentary = this.state.sedentary;
        lowActive = this.state.lowActive;
        active = this.state.active;
        veryActive = this.state.veryActive;

        this.setState({ veryActive: !this.state.veryActive })
        if (sedentary === true) {
            this.setState({ sedentary: !this.state.sedentary })
        }
        if (lowActive === true) {
            this.setState({ lowActive: !this.state.lowActive })
        }
        if (active === true) {
            this.setState({ active: !this.state.active })
        }
    }

    onPressSignUp = () => {
        this.props.addUserActivityLevelInfo(this.state.sedentary, this.state.lowActive, this.state.active, this.state.veryActive);
    };

    onGoBack = () => {
        Actions.pop();
    };

    renderButton1() {
        return <Button textButton="NEXT" onPress={this.onPressSignUp.bind(this)} />;
    }

    renderButton2() {
        return <Button textButton="BACK" onPress={this.onGoBack.bind(this)} />;
    }

    render() {

        return (
            <ScrollView style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.signupText3}>Your Lifestyle</Text>
                <Text style={styles.signupText2}>Please select the description that matches your current lifestyle</Text>
                <CheckBox
                        title='Sedentary'
                        containerStyle={styles.checkBox}
                        checked={this.state.sedentary}
                        textStyle={styles.signupText}
                        onPress={this.checkSedentaryBox.bind(this)}
                    />
                     <Text style={styles.signupText2}>Includes only the light physical activity associated with typical day-to-day life</Text>
                <CheckBox
                        title='Low Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.lowActive}
                        textStyle={styles.signupText}
                        onPress={this.checklowActiveBox.bind(this)}
                    />
                    <Text style={styles.signupText2}>Adds 30 minutes per day walking at a speed of 4 miles per hour (mph)</Text>
                <CheckBox
                        title='Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.active}
                        textStyle={styles.signupText}
                        onPress={this.checkActiveBox.bind(this)}
                    />
                    <Text style={styles.signupText2}>Adds an hourly moderate daily exercise</Text>
                    <CheckBox
                        title='Very Active'
                        containerStyle={styles.checkBox}
                        checked={this.state.veryActive}
                        textStyle={styles.signupText}
                        onPress={this.checkveryActiveBox.bind(this)}
                    />
                     <Text style={styles.signupText2}>Includes vigorous daily exercise</Text>
                {this.renderButton1()}
                {this.renderButton2()}
            </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    sedentary: state.sedentary,
    lowActive: state.lowActive,
    active: state.active,
    veryActive: state.veryActive
  });
  
  export default connect(
    mapStateToProps,
    { addUserActivityLevelInfo }
  )(SignUp_06);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
    },
    container2: {
        backgroundColor: '#1C272A',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkBox: {
        backgroundColor: '#1C272A',
        width: 125,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#1C272A',
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
        fontSize: 16
    },
    signupText2: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 250
    },
    signupText3: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 24,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
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
