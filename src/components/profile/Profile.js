import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/ProfileActions';
import { logOutUser } from '../../actions/AuthActions';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';

class Profile extends Component {
  state = {
    image: null,
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
        BMI: nextProps.profile.BMI.BMI,
        TEE: nextProps.profile.BMI.TEE,
        ninehundredbox: nextProps.profile.BMI.ninehundredbox,
        onepttwokbox: nextProps.profile.BMI.onepttwokbox,
        oneptfivekbox: nextProps.profile.BMI.oneptfivekbox,
        sixhundredbox: nextProps.profile.BMI.sixhundredbox,
        threehundredbox: nextProps.profile.BMI.threehundredbox,
        twokbox: nextProps.profile.BMI.twokbox,
        gainChecked: nextProps.profile.goal.gainChecked,
        maintainChecked: nextProps.profile.goal.maintainChecked,
        loseChecked: nextProps.profile.goal.loseChecked,
        image: nextProps.profile.image.image
      });
    }
  }

  goToEdit() {
    Actions.editProfile(this.props.profile);
  }

  logOut() {
    this.props.logOutUser();
  }

  renderGoalText() {
    if (this.state.gainChecked) {
      return <Text style={styles.signupText}> 
      Your current goal is to gain weight.
       </Text>
    }
    if (this.state.maintainChecked) {
      return <Text style={styles.signupText}> 
      Your current goal is to maintain weight. 
      </Text>
    }
    if (this.state.loseChecked) {
      return <Text style={styles.signupText}> 
      Your current goal is to lose weight.
      </Text>
    }
  }

  renderCalIntake(){
    if(this.state.TEE){
      return <Text style={styles.signupText}>
      Daily Calorie Intake:  {parseFloat(this.state.TEE).toFixed(2)}
      </Text>
    }
  }

  renderGoalAmount() {
    if (this.state.threehundredbox) {
      return <Text style={styles.signupText}> Goal: x/300 kCal per week </Text>
    }
    if (this.state.sixhundredbox) {
      return <Text style={styles.signupText}> Goal: x/600 kCal per week </Text>
    }
    if (this.state.ninehundredbox) {
      return <Text style={styles.signupText}> Goal: x/900 kcal per week </Text>
    }
    if (this.state.onepttwokbox) {
      return <Text style={styles.signupText}> Goal: x/1200 kcal per week </Text>
    }
    if (this.state.oneptfivekbox) {
      return <Text style={styles.signupText}> Goal: x/1500 kcal per week </Text>
    }
    if (this.state.twokbox) {
      return <Text style={styles.signupText}> Goal: x/2000 kcal per week </Text>
    }

  }


  renderText() {
    if (this.state.firstName) {
      return (
        <View style={styles.container}>
          <Image source={{ uri: this.state.image }} style={styles.imageSelected} />
          <Text style={styles.signupText2}>
            First Name:  {this.state.firstName}
          </Text>
          <Text style={styles.signupText2}>
            Last Name:  {this.state.lastName}
          </Text>
          <Text style={styles.signupText2}>
            Height:  {this.state.height}
          </Text>
          <Text style={styles.signupText2}>
            Weight:  {this.state.weight}
          </Text>
          <Text style={styles.signupText2}>
            Age:  {this.state.age}
          </Text>
          <Text style={styles.signupText2}>
            BMI:  {parseFloat(this.state.BMI).toFixed(2)}
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
        {this.renderGoalText()}
        {this.renderCalIntake()}
        {this.renderGoalAmount()}
        <View style={styles.container}>
          <Text style={styles.signupText}>Had enough fun?</Text>
          <Button textButton="Log out" onPress={() => this.logOut()}>
            <Text style={styles.signupButton}> Log Out</Text>
          </Button>
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
  { fetchProfile, logOutUser }
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
    fontSize: 18,
  },
  signupText2: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
    top: -85,
    right: -65
  },
  imagePicked: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'grey',
  },
  profilePic: {
    flexDirection: 'row',
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
  },
  imageSelected: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    top: 35,
    right: 95
  }
});