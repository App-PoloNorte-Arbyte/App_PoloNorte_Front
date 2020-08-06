import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, StatusBar, Image, TextInput } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenLogin'
import Button from '../components/Button'
import Input from '../components/Input'

const ScreenLogin = () => {
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
                    <Input placeholder="CPF" />
                    <Input placeholder="Senha" />
                    <View style={{ marginTop: 5 }}>
                        <Button onPress={() => { }} title="Entrar" />
                    </View>
                    <View style={styles.containerForgotPassword}>
                        <Button onPress={() => { }} title="Esqueci a senha" style={styles.textForgotPassword} />
                    </View>
                </View>
            </View>
        </View>
    )
}


export default ScreenLogin;