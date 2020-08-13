import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView, Alert, Modal } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenChangePassword'
import { Input } from '../components/Input'
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'
import ModalChangePassword from '../components/modalChangePassword'
import { connect } from 'react-redux'

const PageChangePassword = ({ navigation, user }) => {
    const [actualPassword, setActualPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const isValid = () => actualPassword !== '' && newPassword !== '' && confirmPassword !== ''
    const [visible, setvisible] = useState(false)


    const onPressModal = () => {
        if (!isValid()) {
            return Alert.alert('Por favor preencha os campos obrigatórios!')
        }
        setvisible(!visible)
    }

    const validPassword = () => {
        // if (!isValid()) {
        //     return Alert.alert('Por favor preencha os campos obrigatórios!')
        // }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={styles.viewTop}>
                    <Text style={styles.textnewPassword}>Redefinir a Senha</Text>
                    <Input placeholder='Senha Atual' value={actualPassword} onChangeText={setActualPassword} />
                    <Input placeholder='Nova Senha' value={newPassword} onChangeText={setNewPassword} />
                    <Input placeholder='Confirmar Nova Senha' value={confirmPassword} onChangeText={setConfirmPassword} />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Enviar' onPress={onPressModal} />
                </View>
                <View style={styles.viewButton}>
                    <ClearButton title='Voltar' onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
            <Modal
                visible={visible}
                animationType='fade'
                transparent={true}
            >
                <ModalChangePassword visible={setvisible} validPassword={validPassword} />
            </Modal>
        </View>
    )
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
}

export default connect(mapStateToProps)(PageChangePassword)