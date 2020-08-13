import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, StatusBar, Image, Alert, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import login from '../actions/login'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


import doLogin from '../Api/doLogin'
import logo from '../images/logo.png'
import styles from '../styles/screenLogin'
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'



const PageLogin = ({ navigation, dispatch, user }) => {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const isFormValid = () => cpf != '' && password != '';
    const resetInput = () => { setCpf(''), setPassword('') }

    const onPressLogin = () => {
        if (!isFormValid()) {
            return Alert.alert("Preencha os campos obrigatórios")
        }
        doLogin(cpf, password)
            .then((response) => {
                const user = response.data
                dispatch(login(user))
                return AsyncStorage.setItem('user', JSON.stringify(user))
            })
            .then(() => {
                resetInput()
                navigation.navigate('PageScanner')
            })
            .catch(e => {
                resetInput()
                Alert.alert('Não autorizado')
                console.log(e.response.data)
            });
    };

    const onPressForgot = () => {
        navigation.navigate('PageForgotPassword')
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={'#001435'} />
                <View style={[styles.viewLogo, { flex: 1 }]}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View style={styles.containerLogin}>
                    <Input
                        label="CPF"
                        placeholder="Insira seu CPF"
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        leftIcon={
                            <Icon
                                name='user-circle'
                                size={24}
                                color='#EAEAEA'
                            />}
                        value={cpf}
                        onChangeText={text => setCpf(text)} />
                    <Input
                        label="Senha"
                        placeholder="  Insira sua senha"
                        secureTextEntry={true}
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        leftIcon={
                            <Icon
                                name='unlock-alt'
                                size={24}
                                color='#EAEAEA'
                            />} />

                    <View style={{ marginTop: 5 }}>
                        <SolidButton onPress={onPressLogin} title="Entrar" />
                    </View>
                    <View style={styles.containerForgotPassword}>
                        <ClearButton onPress={onPressForgot} title="Esqueci a senha" />
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStoreToProps = store => {
    return {
        user: store.user,
    }
}

export default connect(mapStoreToProps)(PageLogin);