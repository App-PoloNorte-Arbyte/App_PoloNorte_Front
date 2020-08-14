import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView, Alert } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenForgotPassword'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'

import forgotPassword from '../Api/forgotPassword'

const PageForgotPassword = ({ navigation }) => {

    const onPressForgot = () => {
        const cpfConfirmed = cpf.replace(/[^\d]+/g, '')
        console.log('cpfConfirmed: ', cpfConfirmed);
        forgotPassword(cpfConfirmed)
            .then(response => {
                console.log('response: ', response);
                Alert.alert('Atenção, a sua senha foi alterada com sucesso', 'Sua nova senha é os 4 ultimos digitos do seu cpf mais as 2 primeiras letras do seu nome')
            })
            .catch(e => {
                console.log(e)
                Alert.alert('CPF incorreto')
            })
    }

    const [cpf, setCpf] = useState('')
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.viewLogo}><Image style={styles.logo} source={logo} /></View>
                <View style={styles.viewTop}>
                    <Text style={styles.textnewPassword}>Criar nova senha</Text>
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
                        onChangeText={text => setCpf(text)}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton onPress={onPressForgot} title='Enviar' name='share' />
                </View>
                <View style={styles.viewButton2}>
                    <ClearButton title='Voltar' onPress={() => navigation.goBack()} name='undo' />
                </View>
            </ScrollView>
        </View>
    )
}

export default PageForgotPassword;