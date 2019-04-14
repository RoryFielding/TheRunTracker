import React, { Component } from 'react';
import { Platform, ScrollView, View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserNameInfo } from '../../actions/AuthActions';
import Logo from '../../../assets/Logo';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class SignUp_01 extends Component {

    state = {
        firstName: '',
        lastName: '',
        mchecked: false,
        fchecked: false,
        tcchecked: false,
        date: null,
        error: null,
        loading: false,
        age: null
    };

    onChangefirstName = text => {
        this.setState({
            firstName: text
        })
    }

    onChangelastName = text => {
        this.setState({
            lastName: text
        })
    }

    checkMaleBox() {
        fchecked = this.state.fchecked;
        this.setState({ mchecked: !this.state.mchecked })
        if (fchecked === true) {
            this.setState({ fchecked: !this.state.fchecked })
        }
    }

    checkFemaleBox() {
        mchecked = this.state.mchecked;
        this.setState({ fchecked: !this.state.fchecked })
        if (mchecked === true) {
            this.setState({ mchecked: !this.state.mchecked })
        }
    }

    setAgeDate(date) {
        this.setState({ date: date })
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        this.setState({ age: age })
    }

    checkTcBox() {
        this.setState({ tcchecked: !this.state.tcchecked })
    }

    onPressSignUp = () => {
        if (!this.state.firstName || !this.state.lastName || !this.state.age || !this.state.date || !this.state.tcchecked || (!this.state.mchecked && !this.state.fchecked)) {
            this.setState({ fieldsNotChecked: true })
        } else {
            this.props.addUserNameInfo(this.state.firstName, this.state.lastName, this.state.age, this.state.date, this.state.mchecked);
        }
    };

    onPressTC = () => {
        Actions.signuptc();
    };

    onGoBack = () => {
        Actions.pop();
    };

    renderButtons() {
        return <Button textButton="NEXT" onPress={this.onPressSignUp.bind(this)} />;
    }

    renderError() {
        if (this.state.fieldsNotChecked) {
            return <Text style={styles.errorText}>Please ensure all fields are complete.</Text>
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    <Logo />
                    <Input placeholder="First Name"
                        onChange={this.onChangefirstName.bind(this)}
                        value={this.state.firstName} />
                    <Input placeholder="Last Name"
                        onChange={this.onChangelastName.bind(this)}
                        value={this.state.lastName} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <CheckBox
                            title='Male'
                            containerStyle={styles.checkBox}
                            checked={this.state.mchecked}
                            textStyle={styles.signupText}
                            onPress={this.checkMaleBox.bind(this)}
                        />
                        <CheckBox
                            title='Female'
                            containerStyle={styles.checkBox}
                            checked={this.state.fchecked}
                            textStyle={styles.signupText}
                            onPress={this.checkFemaleBox.bind(this)}
                        />
                    </View>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="date"
                        placeholder="Date Of Birth"
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate="2018-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                        onDateChange={(date) => { this.setAgeDate(date) }}
                    />
                    <View style={styles.tcView}>
                        <Text style={styles.TcTextCont}>I have read and accept the</Text>
                        <TouchableOpacity onPress={this.onPressTC.bind(this)}>
                            <Text style={styles.tcButton}> terms and conditions</Text></TouchableOpacity>
                        <CheckBox
                            checked={this.state.tcchecked}
                            containerStyle={styles.tccheckBox}
                            onPress={() => this.checkTcBox()}
                        />
                    </View>
                    {this.renderError()}
                    {this.renderButtons()}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    firstName: state.firstName,
    lastName: state.lastName,
    age: state.age,
    date: state.date,
    mchecked: state.mchecked
});

export default connect(
    mapStateToProps,
    { addUserNameInfo }
)(SignUp_01);



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
    checkBox: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        width: 125,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
    },
    tccheckBox: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
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
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: '#B22222',
    }
});
