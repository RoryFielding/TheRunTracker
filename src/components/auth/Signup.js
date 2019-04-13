import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createUser } from '../../actions/AuthActions';
import Logo from '../../../assets/Logo';

class Signup extends Component {
  state = {
    user: '',
    password: ''
  };

  onChangeUser = text => {
    this.setState({
      user: text
    });
  };

  onChangePassword = text => {
    this.setState({
      password: text
    });
  };

  onPressSignUp = () => {
    this.props.createUser(this.state.user, this.state.password);
  };

  onGoBack = () => {
    Actions.pop();
  };

  renderButtons() {
    if (this.props.auth.loading) {
      return <ActivityIndicator />;
    } else {
      return <Button textButton="Sign up" onPress={this.onPressSignUp.bind(this)} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Input placeholder="Email (e.g. user@gmail.com)" 
         onChange={this.onChangeUser.bind(this)} 
         value={this.state.user} />
        <Input
          placeholder="Password (e.g. ********)"
          secureTextEntry
          onChange={this.onChangePassword.bind(this)}
          value={this.state.password}
        />
        <Text style={styles.errorText}>{this.props.auth.errorCreating}</Text>
        {this.renderButtons()}
        <TouchableOpacity onPress={this.onGoBack.bind(this)}>
          <View>
            <Text style={styles.logInText}>Already got an account? Log in!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createUser }
)(Signup);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#1C272A' : '#0C232D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
  logInText: {
    color: '#4CA4B0',
    fontSize: 15
  },
  errorText: {
    color: '#B22222',
  }
});
