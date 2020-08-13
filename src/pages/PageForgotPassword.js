import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenForgotPassword'
import { Input } from '../components/Input'
import SolidButton from '../components/SolidButton'

const PageForgotPassword = () => {
    const [cpf, setcpf] = useState('')
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={styles.viewTop}>
                    <Text style={styles.textnewPassword}>Criar nova senha</Text>
                    <Input placeholder='CPF' value={cpf} onChangeText={setcpf} />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Enviar' />
                </View>
                <View style={styles.viewButton2}>
                    <SolidButton title='Voltar' />
                </View>
            </ScrollView>
        </View>
    )
}

export default PageForgotPassword;