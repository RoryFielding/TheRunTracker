import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addUserConsentInfo } from '../../actions/AuthActions';

class SignUp_02 extends Component {

     state = {
      dpConsent: false,
      dtocConsent: false,
      locAccess: false,
    }
  

  checkDpBox() {
    dpConsent = this.state.dpConsent;
    this.setState({ dpConsent: !this.state.dpConsent })
  }


checkDtocBox() {
  dtocConsent = this.state.dtocConsent;
  this.setState({ dtocConsent: !this.state.dtocConsent })
}

checkLocBox() {
  locAccess = this.state.locAccess
  this.setState({ locAccess: !this.state.locAccess })
}


onPressSignUp = () => {
  this.props.addUserConsentInfo(this.state.dpConsent, this.state.dtocConsent, this.state.locAccess);
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
        <View  style={styles.container2}>
          <Text style={styles.signupText3}>
          Your Consents
          </Text>
          
          <View style={styles.textBox2}>
          <Text style={styles.signupText2}>We want you to understand how we collect and use your data. Please accept all of the following data consents to be able to use your account. </Text>
         </View>
         </View>
          <View style={styles.container}>
          <CheckBox
                        title='Sensitive Data Processing'
                        containerStyle={styles.checkBox}
                        checked={this.state.dpConsent}
                        textStyle={styles.signupText}
                        onPress={this.checkDpBox.bind(this)}
                    />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>RunTracker and its affiliates are allowed to process my sensitive personal data to provide wellness and fitness services.</Text>
          </View>

          <View style={styles.container}>
          <CheckBox
                        title='Data Transfer Outside Country'
                        containerStyle={styles.checkBox}
                        checked={this.state.dtocConsent}
                        textStyle={styles.signupText}
                        onPress={this.checkDtocBox.bind(this)}
                    />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>RunTracker is allowed to transfer my personal data across the globe, including Europe and the United States of America. I'm aware that laws in different countries may be less protective than those of my country/region. </Text>
          </View>
          </View>

          <View style={styles.container}>
          <CheckBox
                        title='Location Data Access'
                        containerStyle={styles.checkBox}
                        checked={this.state.locAccess}
                        textStyle={styles.signupText}
                        onPress={this.checkLocBox.bind(this)}
                    />
            <View style={styles.textBox}>
            <Text style={styles.signupText2}>Before we start we will need to access your location so we can track your activies while you're using the application.</Text>
            {this.renderButton1()}
            {this.renderButton2()}
          </View>
          </View>
          </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  dpConsent: state.dpConsent,
  dtocConsent: state.dtocConsent,
  locAccess: state.locAccess,
});

export default connect(
  mapStateToProps,
  { addUserConsentInfo }
)(SignUp_02);

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
    fontSize: 12,
    paddingVertical: 8
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
  checkBox: {
    backgroundColor: '#1C272A',
    width: 140,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#1C272A',
  },
  textBox: {
    width: 320,
    left: 30
  },
  textBox2: {
    width: 320,
  }
});