import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserHeightInfo } from '../../actions/AuthActions';

class SignUp_03 extends Component {

    state = {
        height: ''
    };

    onChangeHeight = text => {
        this.setState({
            height: text
        });
    };

    onPressSignUp = () => {

        if(!this.state.height){
            this.setState({fieldsNotChecked: true})
        }else {
            this.props.addUserHeightInfo(this.state.height);
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
          return <Text style={styles.errorText}>Please enter your height.</Text>
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.signupText3}>Your Height</Text>
                <Text style={styles.signupText2}>Please enter your height in CM</Text>
                
                <Input placeholder="Height (CM)"
                    onChange={this.onChangeHeight.bind(this)}
                    value={this.state.height} />
                {this.renderError()}
                {this.renderButton1()}
                {this.renderButton2()}
            </View>
        );
    }
}
  

const mapStateToProps = state => ({
    height: state.height,
  });
  
  export default connect(
    mapStateToProps,
    { addUserHeightInfo }
  )(SignUp_03);

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
