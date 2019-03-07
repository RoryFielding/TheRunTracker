import React from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import { createUser } from '../../actions/AuthActions';
import { fetchProfile } from '../../actions/ProfileActions';

class SignUp_07 extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            fhbox: false,
            onekbox: false,
            oneptfkbox: false,
            twokbox: false,
            twoptfbox: false,
            threekbox: false,
            BMI: "",
            TEE: ""
        }
    }

    checkFhBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ fhbox: !this.state.fhbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
        console.log(this.state.user)
    }

    checkOnekBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ onekbox: !this.state.onekbox })
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkOneptfBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ oneptfkbox: !this.state.oneptfkbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkTwokBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ twokbox: !this.state.twokbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkTwoptfBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        threeptfbox = this.state.threeptfbox;
        fourkbox = this.state.fourkbox;
        this.setState({ twoptfbox: !this.state.twoptfbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
        if (threekbox === true) {
            this.setState({ threekbox: !this.state.threekbox })
        }
    }

    checkThreekBox() {
        fhbox = this.state.fhbox
        onekbox = this.state.onekbox;
        oneptfkbox = this.state.oneptfkbox;
        twokbox = this.state.twokbox;
        twoptfbox = this.state.twoptfbox;
        threekbox = this.state.threekbox;
        this.setState({ threekbox: !this.state.threekbox })
        if (onekbox === true) {
            this.setState({ onekbox: !this.state.onekbox })
        }
        if (oneptfkbox === true) {
            this.setState({ oneptfkbox: !this.state.oneptfkbox })
        }
        if (twokbox === true) {
            this.setState({ twokbox: !this.state.twokbox })
        }
        if (twoptfbox === true) {
            this.setState({ twoptfbox: !this.state.twoptfbox })
        }
        if (fhbox === true) {
            this.setState({ fhbox: !this.state.fhbox })
        }
    }

    setCheckBoxL(loseChecked) {
        twoptfbox = this.state.twoptfbox;
        if (loseChecked) {
            this.setState({ twoptfbox: true });
        }
    }

    setCheckBoxM(twokbox) {
        twokbox = this.state.twokbox;
        if (twokbox) {
            this.setState({ twokbox: true });
        }
    }

    setCheckBoxG(gainChecked) {
        onekbox = this.state.onekbox;
        if (gainChecked) {
            this.setState({ onekbox: true });
        }
    }

    onPressSignUp = () => {
        Actions.app();
    };

    onGoBack = () => {
        Actions.pop();
    };

    renderButton1() {
        return <Button textButton="COMPLETE SIGN UP" onPress={this.onPressSignUp.bind(this)} />;
    }

    renderButton2() {
        return <Button textButton="BACK" onPress={this.onGoBack.bind(this)} />;
    }

    componentWillMount() {
        this.props.fetchProfile();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            console.log(nextProps);

            let bmiHeight = nextProps.profile.height.height / 100;
            let bmiHeightSq = bmiHeight * bmiHeight;
            let setBMI = nextProps.profile.weight.weight / bmiHeightSq;

            this.setCheckBoxL(nextProps.profile.goal.loseChecked)
            this.setCheckBoxM(nextProps.profile.goal.maintainChecked)
            this.setCheckBoxG(nextProps.profile.goal.gainChecked)

            this.setState({
                firstName: nextProps.profile.name.firstName,
                lastName: nextProps.profile.name.lastName,
                age: nextProps.profile.name.age,
                height: nextProps.profile.height.height,
                weight: nextProps.profile.weight.weight,
                mchecked: nextProps.profile.name.mchecked,
                gainChecked: nextProps.profile.goal.gainChecked,
                loseChecked: nextProps.profile.goal.loseChecked,
                maintainChecked: nextProps.profile.goal.maintainChecked,
                sedentary: nextProps.profile.activitylevel.sedentary,
                lowActive: nextProps.profile.activitylevel.lowActive,
                active: nextProps.profile.activitylevel.active,
                veryActive: nextProps.profile.activitylevel.veryActive,
                BMI: setBMI
          });
        }
    }

    displayBMIMessage(BMI) {
        if (BMI < 18.5) {
          return <Text style={styles.signupText}> 0-18.5. 
          You are currently underweight.</Text>;
        } else if (BMI > 18.5 && BMI < 24.9) {
          return <Text style={styles.signupText}> 18.5-24.9. 
          You are currently a normal weight. </Text>;
        } else if (BMI > 24.9 && BMI < 29.9) {
          return <Text style={styles.signupText}> 24.9-29.9. 
          You are currently overweight. </Text>;
        } else if (BMI > 30) {
          return <Text style={styles.signupText}> >30. 
          You are currently obese. </Text>;
        }
    }    
    displayTEEMessage(age, weight, height) {
        meterHeight = height/100;
        let TEE = 0;
        //If user is male
        if (this.state.mchecked) {
          if (this.state.sedentary) {
            //1.0
            TEE = 864 - 9.72 * age + 1.0 * (14.2 * weight + 503 * meterHeight);
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          if (this.state.lowActive) {
            //1.12
            TEE = 864 - 9.72 * age + 1.12 * (14.2 * weight + 503 * meterHeight);
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          if (this.state.active) {
            //1.27
            TEE = 864 - 9.72 * age + 1.27 * (14.2 * weight + 503 * meterHeight);
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          if (this.state.veryActive) {
            //1.54
            TEE = 864 - 9.72 * age + 1.54 * (14.2 * weight + 503 * meterHeight);
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          //If user is female
          else
            if (this.state.sedentary) {
              //1.0
              TEE = 387 - 7.31 * age + 1.0 * (14.2 * weight + 503 * meterHeight)
              return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
            }
          if (this.state.lowActive) {
            //1.12
            TEE = 387 - 7.31 * age + 1.12 * (14.2 * weight + 503 * meterHeight)
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          if (this.state.active) {
            //1.27
            TEE = 387 - 7.31 * age + 1.27 * (14.2 * weight + 503 * meterHeight)
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          if (this.state.veryActive) {
            //1.54
            TEE = 387 - 7.31 * age + 1.54 * (14.2 * weight + 503 * meterHeight)
            return <Text style={styles.signupText}>{parseFloat(TEE).toFixed(2)}</Text>;
          }
          this.setState({ TEE: TEE });
        }
      };

      displayBurnMessage (loseChecked, maintainChecked, gainChecked) {
        if(loseChecked){
          return <Text style={styles.signupText}>You want to lose weight, we recommend 
          you aim to burn an extra 1500 kCal per week to increase your fitness. Maintain or slightly 
          decrease your current calorie intake in order to lose weight. Ensure a healthy diet.</Text>;
        }
        if(maintainChecked){
          return <Text style={styles.signupText}>To maintain your weight, we recommend 
          you aim to burn 1200 kCal per week to increase your fitness. Increase your calorie intake 
          to match your new exercise regime in order to maintain your weight. Ensure a healthy diet.</Text>;
        }
        if(gainChecked){
          return <Text style={styles.signupText}>To gain weight, we recommend 
          you aim to burn an extra 600 kCal per week. Increase your calorie intake by between 
          300-500kCal more than you burn each time you exercise to gain weight. 
          </Text>;
        }
    
      }
    
      setCheckBoxL(loseChecked){
        twoptfbox = this.state.twoptfbox;
        if(loseChecked){
          this.setState({twoptfbox: true});
        }
      }
    
      setCheckBoxM(maintainChecked){
        twokbox = this.state.twokbox;
        if(maintainChecked){
          this.setState({twokbox: true});
        }
      }
    
      setCheckBoxG(gainChecked){
        onekbox = this.state.onekbox;
        if(gainChecked){
          this.setState({onekbox: true});
        }
      }

    render() {
        console.log(this.state);

        return (
            <ScrollView style={styles.container}>
            
            {
                !this.state.BMI ?
                <View style={styles.container}>
                  <Text>Calculating your recommended daily calorie intake</Text>
                  <ActivityIndicator />
                </View> :
                <View style={styles.container2}>
                    <Text style={styles.signupText3}>Your Goals</Text>
                    <View style={styles.textBox2}>
                        <Text style={styles.signupText}>BMI: {parseFloat(this.state.BMI).toFixed(2)} </Text>
                        <Text style={styles.signupText}>You are in the BMI range: {this.displayBMIMessage(this.state.BMI)}</Text>
                        <Text style={styles.signupText}>Based on your current weight, height, age and lifestyle, Runtracker
            has calculated your daily calorie needs to be {this.displayTEEMessage(this.state.age, this.state.weight, this.state.height)} kCal. </Text>
            <Text style={styles.signupText}>{this.displayBurnMessage(this.state.loseChecked, this.state.maintainChecked, this.state.gainChecked)}</Text>
                        <Text style={styles.signupText}>If you have any underlying
                        health problems, please first consult with your doctor before beginning any
            period of exercise.</Text>
                    </View>
                    <Text style={styles.signupText3}>Calories to burn weekly</Text>

                    <CheckBox
                        title='300'
                        containerStyle={styles.checkBox}
                        checked={this.state.fhbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkFhBox()}
                    />
                    <CheckBox
                        title='600'
                        containerStyle={styles.checkBox}
                        checked={this.state.onekbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkOnekBox()}
                    />
                    <CheckBox
                        title='900'
                        containerStyle={styles.checkBox}
                        checked={this.state.oneptfkbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkOneptfBox()}
                    />
                    <CheckBox
                        title='1200'
                        containerStyle={styles.checkBox}
                        checked={this.state.twokbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkTwokBox()}
                    />
                    <CheckBox
                        title='1500'
                        containerStyle={styles.checkBox}
                        checked={this.state.twoptfbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkTwoptfBox()}
                    />
                    <CheckBox
                        title='2000'
                        containerStyle={styles.checkBox}
                        checked={this.state.threekbox}
                        textStyle={styles.signupText}
                        onPress={() => this.checkThreekBox()}
                    />
                    {this.renderButton1()}
                    {this.renderButton2()}


                </View>
            }
            </ScrollView >

        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile.profile
});

export default connect(
    mapStateToProps,
    { createUser, fetchProfile }
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