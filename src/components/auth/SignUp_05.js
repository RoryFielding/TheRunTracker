import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserGoalInfo } from '../../actions/AuthActions';

class SignUp_05 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maintainChecked: false,
            loseChecked: false,
            gainChecked: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkLoseBox() {
        loseChecked = this.state.loseChecked;
        maintainChecked = this.state.maintainChecked;
        gainChecked = this.state.gainChecked;

        this.setState({ loseChecked: !this.state.loseChecked })
        if (maintainChecked === true) {
            this.setState({ maintainChecked: !this.state.maintainChecked })
        }
        if (gainChecked === true) {
            this.setState({ gainChecked: !this.state.gainChecked })
        }

    }

    checkMaintainBox() {
        maintainChecked = this.state.maintainChecked;
        gainChecked = this.state.gainChecked;
        loseChecked = this.state.loseChecked;

        this.setState({ maintainChecked: !this.state.maintainChecked })
        if (loseChecked === true) {
            this.setState({ loseChecked: !this.state.loseChecked })
        }
        if (gainChecked === true) {
            this.setState({ gainChecked: !this.state.gainChecked })
        }
    }

    checkGainBox() {
        gainChecked = this.state.gainChecked;
        loseChecked = this.state.loseChecked;
        maintainChecked = this.state.maintainChecked;

        this.setState({ gainChecked: !this.state.gainChecked })
        if (loseChecked === true) {
            this.setState({ loseChecked: !this.state.loseChecked })
        }
        if (maintainChecked === true) {
            this.setState({ maintainChecked: !this.state.maintainChecked })
        }
    }

    onPressSignUp = () => {

        if(!this.state.loseChecked && !this.state.maintainChecked && !this.state.gainChecked){
            this.setState({fieldsNotChecked: true})
        } 
        else {
            this.props.addUserGoalInfo(this.state.loseChecked, this.state.maintainChecked, this.state.gainChecked);
        }
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

    renderError() {
        if (this.state.fieldsNotChecked) {
            return <Text style={styles.errorText}>Please select a fitness goal.</Text>
        }
    }

    render() {

        return (
            <View style={styles.container2}>
                <Text style={styles.signupText3}>Your Goals</Text>
                <Text style={styles.signupText2}>Please select the the fitness goal you would like to achieve below</Text>
                <CheckBox
                        title='Lose Weight'
                        containerStyle={styles.checkBox}
                        checked={this.state.loseChecked}
                        textStyle={styles.signupText}
                        onPress={this.checkLoseBox.bind(this)}
                    />
                <CheckBox
                        title='Maintain Weight'
                        containerStyle={styles.checkBox}
                        checked={this.state.maintainChecked}
                        textStyle={styles.signupText}
                        onPress={this.checkMaintainBox.bind(this)}
                    />
                <CheckBox
                        title='Gain Weight'
                        containerStyle={styles.checkBox}
                        checked={this.state.gainChecked}
                        textStyle={styles.signupText}
                        onPress={this.checkGainBox.bind(this)}
                    />
                {this.renderError()}
                {this.renderButton1()}
                {this.renderButton2()}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    loseChecked: state.loseChecked,
    maintainChecked: state.maintainChecked,
    gainChecked: state.gainChecked
  });
  
  export default connect(
    mapStateToProps,
    { addUserGoalInfo }
  )(SignUp_05);

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
        paddingVertical: 25,
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
    },
    errorText: {
        color: '#B22222',
    }
});
