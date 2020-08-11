import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, StatusBar, Image, Alert, AsyncStorage } from 'react-native'

import getLogin from '../Api/getLogin'
import logo from '../images/logo.png'
import styles from '../styles/screenLogin'
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'
import Input from '../components/Input'


const PageLogin = ({ navigation }) => {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const isFormValid = () => cpf != '' && password != '';
    const resetInput = () => { setCpf(''), setPassword('') }

    const onPressLogin = () => {
        if (!isFormValid()) {
            return Alert.alert("Preencha os campos obrigatórios")
        }
        getLogin(cpf, password)
            .then((response) => {
                return AsyncStorage.setItem('user', JSON.stringify(response.data))
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
                <View>
                </View>
                <View style={styles.containerLogin}>
                    <Input placeholder="CPF" value={cpf} onChangeText={setCpf} />
                    <Input placeholder="Senha" value={password} onChangeText={setPassword} secureText={true} />
                    <View style={{ marginTop: 5 }}>
                        <SolidButton onPress={onPressLogin} title="Entrar" />
                    </View>
                    <View style={styles.containerForgotPassword}>
                        <ClearButton onPress={onPressForgot} title="Esqueci a senha"  />
                    </View>
                </View>
            </View>
        </View>
    )
}


export default PageLogin;