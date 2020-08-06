import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Botao = (props) => {
    return (
        <TouchableOpacity style={[props.style ? props.style : styles.styleButton]}
            onPress={props.onPress}
        >
            <Text style={[styles.buttonText, props.style]}>{props.title}</Text>
        </TouchableOpacity>

    );
}
const styles = {
    styleButton: {
        width: '60%',
        backgroundColor: '#EAEAEA',
        alignSelf: 'center',
        height: 35,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        color: '#001435',
        fontSize: 22,
        textAlign: 'center'
    }

}
export default Botao;