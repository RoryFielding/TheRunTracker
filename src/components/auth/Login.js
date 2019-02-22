import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/AuthActions';
import Logo from '../../../assets/Logo';

class Login extends Component {
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

  onPressLogin = () => {
    this.props.loginUser(this.state.user, this.state.password);
  };

  onPressSignUp = () => {
    Actions.signup();
  };

  renderButtons() {
    if (this.props.auth.loading) {
      return <ActivityIndicator />;
    } else {
      return (
        <View>
          <Button textButton="Login" onPress={this.onPressLogin.bind(this)} />
          <Button textButton="Signup" onPress={this.onPressSignUp.bind(this)} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Logo />
        <Input 
        placeholder="Email (e.g. user@gmail.com)" 
        onChange={this.onChangeUser.bind(this)} 
        value={this.state.user} />
        <Input
          placeholder="Password (e.g. ********)"
          secureTextEntry
          onChange={this.onChangePassword.bind(this)}
          value={this.state.password}
        />
        <Text>{this.props.auth.errorLoging}</Text>
        {this.renderButtons()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
});
