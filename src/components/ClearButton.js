import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClearButton = (props) => {
  return (
    <Button icon={
      <Icon
        name={props.name}
        size={20}
        style={{ marginRight: 10 }}
        color='#EAEAEA'
      />
    }
      onPress={props.onPress}
      title={props.title}
      titleStyle={{ color: '#EAEAEA' }}
      type="clear"
      containerStyle={{
        width: '48%',
        alignSelf: 'center',
        height: 35,
        justifyContent: 'center',
      }}
    />
  )
}

export default ClearButton;
