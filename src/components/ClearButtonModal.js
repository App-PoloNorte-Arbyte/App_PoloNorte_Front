import React from 'react';
import { Button } from 'react-native-elements';

const ClearButtonModal = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      titleStyle={{ color: '#EAEAEA' }}
      type="clear"
      containerStyle={{
        width: '30%',
        alignSelf: 'center',
        height: 35,
        justifyContent: 'center',
      }}
    />
  )
}

export default ClearButtonModal;