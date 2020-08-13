import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import SolidButtonModal from './SolidButtonModal'
import ClearButtonModal from './ClearButtonModal'

const ModalDescription = ({ visible, validMaintenance }) => {
    const onPressexit = () => {
        visible(false)
    }
    return (

        <View style={styles.container}>
            <View style={styles.containerModal}>
                <Text style={styles.textModal}>Sua descrição está correta?</Text>
                <View style={styles.viewButton}>
                    <ClearButtonModal title='Sair' onPress={onPressexit} />
                    <SolidButtonModal title='Enviar' onPress={() => validMaintenance()} />
                </View>
            </View>
        </View>
    )
}
export default ModalDescription

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerModal: {
        height: '30%',
        width: '80%',
        backgroundColor: '#001435',
        borderColor: '#E3421F',
        borderWidth: 2,
        borderRadius: 10
    },
    textModal: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E8FF00',
        paddingTop: 10
    },
    viewButton: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: '13%',
    }
})