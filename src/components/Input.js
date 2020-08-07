import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ placeholder, onChangeText, value, secureText }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor='#001445'
      secureTextEntry={secureText}
      keyboardType={'default'}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    width: '60%',
    borderColor: '#EAEAEA',
    borderWidth: 2,
    backgroundColor: '#EAEAEA',
    margin: 5,
    textAlign: 'center',
    alignSelf: 'center',
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    // marginVertical: 200
  },
});
export default Input;