import React from 'react';
import { Button } from 'react-native-elements';

const ClearButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      titleStyle={{ color: '#EAEAEA' }}
      type="clear"
      containerStyle={{
        width: '60%',
        alignSelf: 'center',
        height: 35,
        justifyContent: 'center',
      }}
    />
  )
}

export default ClearButton;
