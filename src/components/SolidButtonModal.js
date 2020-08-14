import React from 'react';
import { Button, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const SolidButtonModal = (props) => {
    return (
        <Button icon={
            < Icon
                name={props.name}
                size={15}
                style={{ marginRight: 5 }}
            />
        } onPress={props.onPress} title={props.title}
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