import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenChangePassword'

const PageChangePassword = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#001435'} />
            <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
            <View style={styles.viewTop}>
                <Text style={styles.textnewPassword}>Redefinir a Senha</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Senha Atual'
                    placeholderTextColor='#C4C4C4'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Nova Senha'
                    placeholderTextColor='#C4C4C4'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirmar Nova Senha'
                    placeholderTextColor='#C4C4C4'
                />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PageChangePassword;