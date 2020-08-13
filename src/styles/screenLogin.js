import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001435',
    flex: 1,
    paddingVertical: 30
  },
  viewLogo: {
    alignItems: 'center'
  },
  logo: {
    height: 121,
    width: 220
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    marginTop: '10%'
  },
  textLogin: {
    marginTop: '10%',
    color: '#EAEAEA',
    textAlign: 'center',
    fontSize: 28
  },
  containerForgotPassword: {
    flex: 1, 
    marginTop: '8%'
  },
  textForgotPassword: {
    color: '#EAEAEA',
    textAlign: 'center',
    fontSize: 15
  }
})

export default styles

