import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, StatusBar, Image, Alert, AsyncStorage } from 'react-native'

import callLogin from '../Api/callLogin'
import logo from '../images/logo.png'
import styles from '../styles/screenLogin'
import Button from '../components/Button'
import Input from '../components/Input'


const ScreenLogin = ({ navigation }) => {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const isFormValid = () => cpf != '' && password != '';
    const resetInput = () => { setCpf(''), setPassword('') }

    const onPressLogin = () => {
        if (!isFormValid()) {
            return Alert.alert("Preencha os campos obrigatórios")
        }
        callLogin(cpf, password)
            .then((response) => {
                return AsyncStorage.setItem('user', JSON.stringify(response.data))
            })
            .then(() => {
                resetInput()
                navigation.navigate('PaginaScanner')
            })
            .catch(e => {
                resetInput()
                Alert.alert('Não autorizado')
                console.log(e.response.data)
            });
    };

    const onPressForgot = () => { 
        navigation.navigate('ScreenForgot')
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={'#001435'} />
                <View style={[styles.viewLogo, { flex: 1 }]}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View>
                </View>
                <View style={styles.containerLogin}>
                    <Input placeholder="CPF" value={cpf} onChangeText={setCpf} />
                    <Input placeholder="Senha" value={password} onChangeText={setPassword} secureText={true} />
                    <View style={{ marginTop: 5 }}>
                        <Button onPress={onPressLogin} title="Entrar" />
                    </View>
                    <View style={styles.containerForgotPassword}>
                        <Button onPress={onPressForgot} title="Esqueci a senha" style={styles.textForgotPassword} />
                    </View>
                </View>
            </View>
        </View>
    )
}


export default ScreenLogin;