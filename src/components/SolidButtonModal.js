import React from 'react';
import { Button } from 'react-native-elements'


const SolidButtonModal = (props) => {
    return (
        <Button onPress={props.onPress} title={props.title}
            titleStyle={{ color: '#001435' }}
            containerStyle={{
                backgroundColor: '#001435',
                width: '30%',
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


export default SolidButtonModal;