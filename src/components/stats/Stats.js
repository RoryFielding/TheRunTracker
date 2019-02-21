import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import { fetchStats } from '../../actions/ActivityActions';
import { connect } from 'react-redux';
import Button from '../common/Button';

class Stats extends Component {
  state = {
    stats: {}
  }

  componentWillMount() {
    this.props.fetchStats();
  }


  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log(nextProps);
      this.setState({
        activity: nextProps.activity
      });
    }
  }

  renderText() {
    if(this.state.activity){
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>
          Activity:  
        </Text>
      </View>
    );
  }
    else {
      return <ActivityIndicator />;
    }
  }

renderButton1() {
  return <Button textButton="LOG" onPress={this.onPress.bind(this)} />;
}

onPress = () => {
  console.log(this.state.activity)
};

  render() {
    return (
      <View style={styles.container}>
       <Image style={{ width: 260, height: 160 }}
          source={require('../../../assets/images/icon3.png')} />
          <Text style={styles.titleText}>Analytics</Text>

          {this.renderText()}
          {this.renderButton1()}
      </View>

    );
  }
}


const mapStateToProps = state => ({
  activity: state.activity.activity,
});

export default connect(
  mapStateToProps,
  { fetchStats }
)(Stats);

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
    fontSize: 16
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 32,
    top: -35,
    borderColor: 'black'
  },
});
