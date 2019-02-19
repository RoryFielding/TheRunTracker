import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = props => (
  <TouchableOpacity style={[styles.container, props.styles]} onPress={props.onPress} disabled={props.disabled}>
    <View>
      <Text style={[styles.text, props.textStyle]}>{props.textButton}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    width:300,
    backgroundColor:'#4CA4B0',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 16
  },
  text: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
