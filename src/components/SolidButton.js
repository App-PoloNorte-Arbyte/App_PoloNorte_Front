import React from 'react';
import { Button, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const SolidButton = (props) => {
    return (
        <Button icon={
            < Icon
                name={props.name}
                size={20}
                style={{ marginRight: 10 }}
            />
        } onPress={props.onPress} title={props.title}
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