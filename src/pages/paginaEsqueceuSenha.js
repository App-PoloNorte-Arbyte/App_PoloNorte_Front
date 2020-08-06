import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenForgotPassword'

const PaginaEsqueceuSenha = () => {

    return (

        <ScrollView style={styles.container}>
            <View style = {{flex: 1}}>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textnewPassword}>Criar nova senha</Text>
                </View>
                <View style={styles.viewTop}>
                    <TextInput
                        style={styles.textInputCPF}
                        placeholder='CPF'
                        placeholderTextColor='#C4C4C4'
                    />
                </View>
                {/* <View style = {{flex: 1}}> */}
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </View>
        </ScrollView>
    )
}

export default PaginaEsqueceuSenha;