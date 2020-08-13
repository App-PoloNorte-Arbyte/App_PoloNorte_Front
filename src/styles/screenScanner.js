import React from 'react';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001435',
    flex: 1,
    paddingVertical: 30
  },
  containerLoading: {
    backgroundColor: '#001435',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 121,
    width: 220
  },
  buttonCode: {
    flex: 1,
    marginTop: 30,
    width: '60%',
    alignSelf: 'center',
  },
  containerButtons: {
    margin: 15,
    justifyContent: 'space-evenly',
    padding: 20
  }
})

export default styles;