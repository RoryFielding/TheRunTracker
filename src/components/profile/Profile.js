import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/ProfileActions';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {
  state = {
    show: {
      grid: true,
      full: false,
      pinned: false,
      saved: false
    }
  };

  componentWillMount() {
    this.props.fetchProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log(nextProps);
      this.setState({
        firstName: nextProps.profile.name.firstName,
        lastName: nextProps.profile.name.lastName,
        age: nextProps.profile.name.age,
        height: nextProps.profile.height.height,
        weight: nextProps.profile.weight.weight,
      });
    }
  }

  goToEdit() {
    Actions.editProfile(this.props.profile);
  }

  renderText() {
    if(this.state.firstName){
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>
          First Name:  {this.state.firstName}
        </Text>
        <Text style={styles.signupText}>
          Last Name:  {this.state.lastName}
        </Text>
        <Text style={styles.signupText}>
          Height:  {this.state.height}
        </Text>
        <Text style={styles.signupText}>
          Weight:  {this.state.weight}
        </Text>
        <Text style={styles.signupText}>
          Age:  {this.state.age}
        </Text>
      </View>
    );
  }
    else {
      return <ActivityIndicator />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />

        {this.renderText()}

        <View style={styles.container}>
          <Text style={styles.signupText}>Had enough fun?</Text>
          <TouchableOpacity onPress={() => this.logOut()}>
            <Text style={styles.signupButton}> Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 18
  },
  imagePicked: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'grey',
  },
  profilePic: {
    flexDirection: 'row',
    right: 35,
    top: -35
  },
  nameView: {
    top: 45
  },
  healthData: {
    right: 65
  },
  buttonText: {
    fontSize: 32,
    color: 'blue',
    right: 25,
    top: -15
  }
});