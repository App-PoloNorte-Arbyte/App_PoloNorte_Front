import React from 'react';
import { Button } from 'react-native-elements'


const SolidButton = (props) => {
    return (
        <Button onPress={props.onPress} title={props.title}
            titleStyle={{ color: '#001435' }}
            containerStyle={{
                backgroundColor: '#001435',
                width: '60%',
                alignSelf: 'center',
                height: 35,
                justifyContent: 'center',
            }}
            buttonStyle={{
                backgroundColor: '#EAEAEA',
            }}
        />
    )
}

export default SolidButton;