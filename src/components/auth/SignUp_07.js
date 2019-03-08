import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { addUserProfilePic } from '../../actions/AuthActions';
import { ImagePicker, Permissions } from 'expo';

class SignUp_07 extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    onPressSignUp = () => {
        this.props.addUserProfilePic(this.state.image)
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

    _pickImage = async () => {

        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (status === 'granted') {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }
    };

    render() {

        return (
            <View style={styles.container2}>
                <Text style={styles.signupText3}>Your Profile Picture</Text>
                <Text style={styles.signupText2}>Please select a profile picture</Text>
                <Button
                    textButton="Pick an image"
                    onPress={this._pickImage}
                />
                {
                this.state.image === null ?
                <Image style={{ width: 200, height: 200 }}></Image> 
                :
                <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />
                }
                {this.renderButton1()}
                {this.renderButton2()}
            </View>
        );

    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile.profile
});

export default connect(
    mapStateToProps,
    { addUserProfilePic }
)(SignUp_07);

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
    checkBox: {
        backgroundColor: '#1C272A',
        width: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#1C272A',
    },
    textBox2: {
        width: 320,
    }
});