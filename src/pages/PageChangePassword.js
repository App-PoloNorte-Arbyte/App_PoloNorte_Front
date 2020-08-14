import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView, Alert, Modal } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenChangePassword'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'
import ModalChangePassword from '../components/modalChangePassword'
import { connect } from 'react-redux'
import changePassword from '../Api/changePassword'

const PageChangePassword = ({ navigation, user }) => {
    const [actualPassword, setActualPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const isValid = () => actualPassword !== '' && newPassword !== '' && confirmPassword !== ''
    const [visible, setvisible] = useState(false)
    const resetInput = () => { setActualPassword(''), setNewPassword(''), setConfirmPassword('') }

    const onPressModal = () => {
        if (!isValid()) {
            return Alert.alert('Por favor preencha os campos obrigatórios!')
        }
        setvisible(!visible)
    }

    const validPassword = () => {
        if (newPassword !== confirmPassword) {
            resetInput()
            return Alert.alert('Erro ao cadastrar', 'Por favor verifique os campos corretamente!'), onPressModal()
        }

        changePassword(user.token, user.cpf, actualPassword, newPassword)
            .then((response) => {
                console.log(response)
                resetInput()
                Alert.alert('Sucesso!', 'Senha alterada com sucesso!'),
                    onPressModal(),
                    navigation.navigate('PageLogin')
            })
            .catch((err) => {
                console.log(err)
                resetInput()
                return Alert.alert('Erro ao cadastrar', 'Por favor verifique os campos corretamente!'),
                    onPressModal()
            })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={styles.viewTop}>
                    <Text style={styles.textnewPassword}>Redefinir a Senha</Text>
                    <Input
                        label="  Senha Atual"
                        placeholder="  Insira sua senha atual"
                        secureTextEntry={true}
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        value={actualPassword}
                        onChangeText={text => setActualPassword(text)}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#EAEAEA'
                                style={{ marginLeft: 10 }}
                            />}
                    />
                    <Input
                        label="  Nova Senha"
                        placeholder="  Insira sua nova senha"
                        secureTextEntry={true}
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        value={newPassword}
                        onChangeText={text => setNewPassword(text)}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#EAEAEA'
                                style={{ marginLeft: 10 }}
                            />}
                    />
                    <Input
                        label="  Confirme A Nova Senha"
                        placeholder="  Insira a senha novamente"
                        secureTextEntry={true}
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#EAEAEA'
                                style={{ marginLeft: 10 }}
                            />}
                    />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Enviar'
                        onPress={onPressModal}
                        name='share'
                    />
                </View>
                <View style={styles.viewButton}>
                    <ClearButton title='Voltar'
                        onPress={() => navigation.goBack()}
                        name='undo'
                    />
                </View>
            </ScrollView>
            <Modal
                visible={visible}
                animationType='fade'
                transparent={true}
            >
                <ModalChangePassword visible={setvisible}
                    validPassword={validPassword}
                />
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