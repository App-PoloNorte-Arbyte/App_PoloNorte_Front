import React from 'react';
import { Button, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const ClearButtonModal = (props) => {
  return (
    <Button icon={
      < Icon
        name={props.name}
        size={15}
        style={{ marginRight: 5 }}
        color='#EAEAEA'
      />
    }
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