import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { createUser } from '../../actions/AuthActions';

class SignUp_06 extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            fhbox: false,
            onekbox: false,
            oneptfkbox: false,
            twokbox: false,
            twoptfbox: false,
            threekbox: false,
            BMI: "",
            TEE: ""
        }
    }

    checkFhBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ fhbox: !this.state.fhbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
        console.log(this.state.user)
    }

    checkOnekBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ onekbox: !this.state.onekbox })
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkOneptfBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ oneptfkbox: !this.state.oneptfkbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkTwokBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ twokbox: !this.state.twokbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkTwoptfBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        threeptfbox = this.state.threeptfbox;
        fourkbox = this.state.fourkbox;
        this.setState({ twoptfbox: !this.state.twoptfbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkThreekBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ threekbox: !this.state.threekbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
    }

    setCheckBoxL(loseChecked) {
        twoptfbox = this.state.twoptfbox;
        if (loseChecked) {
            this.setState({ twoptfbox: true });
        }
    }

    setCheckBoxM(twokbox) {
        twokbox = this.state.twokbox;
        if (twokbox) {
            this.setState({ twokbox: true });
        }
    }

    setCheckBoxG(gainChecked) {
        onekbox = this.state.onekbox;
        if (gainChecked) {
            this.setState({ onekbox: true });
        }
    }

    onPressSignUp = () => {
        Actions.app();
    };

    onGoBack = () => {
        Actions.pop();
    };

    renderButton1() {
        return <Button textButton="COMPLETE SIGN UP" onPress={this.onPressSignUp.bind(this)} />;
    }

    renderButton2() {
        return <Button textButton="BACK" onPress={this.onGoBack.bind(this)} />;
    }

    render() {


        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>

                    <Text style={styles.signupText3}>Your Goals</Text>
                    <View style={styles.textBox2}>
                        <Text style={styles.signupText}>BMI: </Text>
                        <Text style={styles.signupText}>You are in the BMI range: </Text>
                        <Text style={styles.signupText}>Based on your current weight, height, age and lifestyle, Runtracker
            has calculated your daily calorie needs to be  kCal. </Text>
                        <Text style={styles.signupText}>If you have any underlying
                        health problems, please first consult with your doctor before beginning any
            period of exercise.</Text>
                    </View>
                    <Text style={styles.signupText3}>Calories to burn weekly</Text>

                    <CheckBox
                        title='300'
                        containerStyle={styles.checkBox}
                        checked={this.state.fhbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkFhBox()}
                    />
                    <CheckBox
                        title='600'
                        containerStyle={styles.checkBox}
                        checked={this.state.onekbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkOnekBox()}
                    />
                    <CheckBox
                        title='900'
                        containerStyle={styles.checkBox}
                        checked={this.state.oneptfkbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkOneptfBox()}
                    />
                    <CheckBox
                        title='1200'
                        containerStyle={styles.checkBox}
                        checked={this.state.twokbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkTwokBox()}
                    />
                    <CheckBox
                        title='1500'
                        containerStyle={styles.checkBox}
                        checked={this.state.twoptfbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkTwoptfBox()}
                    />
                    <CheckBox
                        title='2000'
                        containerStyle={styles.checkBox}
                        checked={this.state.threekbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkThreekBox()}
                    />
                    {this.renderButton1()}
                    {this.renderButton2()}


                </View>
            </ScrollView >

        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { createUser }
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
    signupText2: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText3: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 24,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 300,
        backgroundColor: '#4CA4B0',
        borderRadius: 25,
        marginVertical: 10,
        paddingHorizontal: 30,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    backButton: {
        backgroundColor: '#4CA4B0',
        width: 30,
        height: 25,
        borderRadius: 25,
        marginVertical: 25,
        paddingVertical: 16,
        flexDirection: 'row'
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
    checkBox: {
        backgroundColor: '#1C272A',
        width: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#1C272A',
    },
    textBox2: {
        width: 320,
    }
});