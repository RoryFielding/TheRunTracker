import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserWeightInfo } from '../../actions/AuthActions';

class SignUp_04 extends Component {

    state = {
        weight: ''
    };

    onChangeWeight = text => {
        this.setState({
            weight: text
        });
    };

    onPressSignUp = () => {

        if (!this.state.weight) {
            this.setState({ fieldsNotChecked: true })
        }
        else {
            this.props.addUserWeightInfo(this.state.weight);
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
            return <Text style={styles.errorText}>Please enter your weight.</Text>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.signupText3}>Your Weight</Text>
                <Text style={styles.signupText2}>Please enter your weight in KG</Text>

                <Input placeholder="Weight (KG)"
                    onChange={this.onChangeWeight.bind(this)}
                    value={this.state.weight} />
                {this.renderError()}
                {this.renderButton1()}
                {this.renderButton2()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    weight: state.weight,
});

export default connect(
    mapStateToProps,
    { addUserWeightInfo }
)(SignUp_04);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    errorText: {
        color: '#B22222',
    }
});
