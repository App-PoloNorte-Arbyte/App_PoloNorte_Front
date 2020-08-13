import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, StatusBar, ScrollView, Alert, AsyncStorage, Modal } from 'react-native'
import styles from '../styles/screenMaintenance'
import SolidButton from '../components/SolidButton'
import { InputMaintenance } from '../components/Input'
import addDescription from '../Api/addDescription'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import ModalDescription from '../components/modalDescription'


const PageMaintenance = ({ navigation, equipment, user }) => {
    const [visible, setvisible] = useState(false)
    const [maintenance, setMaintenance] = useState('')
    const isFormValid = () => maintenance != ''
    const resetInput = () => { setMaintenance('') }

    const onPressModal = () => {
        setvisible(!visible)
    }

    const validMaintenance = () => {
        if (!isFormValid()) {
            return Alert.alert('Informação Inválida!', 'Por favor, insira uma manutenção!')
        }

        addDescription(user.token, equipment.id, maintenance)
            .then((res) => {
                resetInput()
                Alert.alert('Descrição realizado com sucesso!', 'Sua descrição foi enviada!')
                console.log(res)
            })
            .catch((err) => {
                Alert.alert('Falha ao cadastrar a manutenção!', 'Por favor tente novamente mais tarde!')
                console.log('erro', err)
            })

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.boxModel}>
                    <Text style={styles.textBoxModel}>Fabricante: {equipment.brand}</Text>
                    <Text style={styles.textBoxModel}>Ano: {equipment.year}</Text>
                    <Text style={styles.textBoxModel}>Modelo: {equipment.model}</Text>
                </View>
                <View style={styles.boxMaintenance}>
                    <InputMaintenance placeholder='Descreva a Manutenção...'
                        multiline={true}
                        onChangeText={setMaintenance}
                        value={maintenance} />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Efetuar Manutenção' onPress={onPressModal} />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton onPress={() => { navigation.goBack() }} title='Voltar' />
                </View>
            </ScrollView>
            <Modal
                visible={visible}
                animationType='fade'
                transparent={true}
            >
                <ModalDescription visible={setvisible} validMaintenance={validMaintenance} />
            </Modal>
        </View>
    )
}

const mapStateToProps = (store) => {
    return {
        equipment: store.equipment,
        user: store.user
    }
}

export default connect(mapStateToProps)(PageMaintenance)