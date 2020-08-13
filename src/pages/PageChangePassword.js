import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenChangePassword'
import { Input } from '../components/Input'
import SolidButton from '../components/SolidButton'

const PageChangePassword = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={styles.viewTop}>
                    <Text style={styles.textnewPassword}>Redefinir a Senha</Text>
                    <Input placeholder='Senha Atual' />
                    <Input placeholder='Nova Senha' />
                    <Input placeholder='Confirmar Nova Senha' />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Enviar' />
                </View>
            </ScrollView>
        </View>
    )
}

export default PageChangePassword;