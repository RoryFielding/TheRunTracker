import React, { Component } from 'react';
import { Text, View, TextInput, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { onSaveChanges } from '../../actions/ProfileActions';
import ImagePicker from 'react-native-image-picker';
import Button from '../common/Button';
import Input from '../common/Input';


class EditProfile extends Component {
  state = {
    firstName: null,
    lastName: null,
    height: null,
    weight: null
  };

  cancelEdit() {
    Actions.profile();
  }

  componentWillMount() {
    console.log('le props');
    console.log(this.props);
    // this.setState({
    //   firstName: firstName
    // });
  }

  onChangeFirstName(text) {
    this.setState({
      firstName: text
    });
  }

  onChangeLastName(text) {
    this.setState({
      lastName: text
    });
  }

  onChangeWeight(text) {
    this.setState({
      weight: text
    });
  }

  onChangeHeight(text) {
    this.setState({
      height: text
    });
  }

  onSaveChanges() {
    this.props.onSaveChanges(
      this.state.firstName,
      this.state.lastName,
      this.state.height,
      this.state.weight,
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />
          <Text style={styles.titleText}>Edit Profile</Text>
          <View style={styles.publicInfo}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}> First Name </Text>
              <TextInput
                style={styles.textInput}
                value={this.state.name}
                onChangeText={this.onChangeFirstName.bind(this)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Last Name </Text>
              <TextInput
                style={styles.textInput}
                placeholder={this.state.lastName}
                value={this.state.username}
                onChangeText={this.onChangeLastName.bind(this)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Height </Text>
              <TextInput
               style={styles.textInput}
                value={this.state.web}
                onChangeText={this.onChangeHeight.bind(this)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>  Weight </Text>
              <TextInput
                style={styles.textInput}
                value={this.state.bio}
                onChangeText={this.onChangeWeight.bind(this)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
          <View style={styles.container}>
          <Button textButton="Cancel" onPress={() => this.cancelEdit()}>
            <Text style={styles.signupButton}> Cancel</Text>
          </Button>
          <Button textButton="Save" onPress={() => this.onSaveChanges.bind(this)}>
            <Text style={styles.signupButton}> Save</Text>
          </Button>
          </View>
      </View>
    );
  }
}

export default connect(
  null,
  { onSaveChanges }
)(EditProfile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pic: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#f5f6fa',
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 1
  },
  publicInfo: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 1
  },
  privateInfo: {
    width: '100%',
    padding: 15
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 32,
    top: -35,
    borderColor: 'black'
},
  text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    marginTop: 15, 
    marginRight: 5, 
    width: 80, 
    height: 40,
  },
  textInput: {
    width:250,
    backgroundColor:'#0C2331',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    paddingVertical: 16,
    margin: 5, 
    height: 50
  }
});
