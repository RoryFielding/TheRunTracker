import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => (
  <TextInput
    style={[styles.input, props.styles]}
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChange}
    placeholderTextColor="#ffffff"
    selectionColor="#fff"
    secureTextEntry={props.secureTextEntry}
    autoCorrect={false}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    width:300,
    backgroundColor:'#0C2331',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    paddingVertical: 16
  },
});
