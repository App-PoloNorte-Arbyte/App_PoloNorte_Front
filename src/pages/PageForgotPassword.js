import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenForgotPassword'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'

const PageForgotPassword = ({ navigation }) => {
    const [cpf, setcpf] = useState('')
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
                    <SolidButton title='Enviar' name='share' />
                </View>
                <View style={styles.viewButton2}>
                    <ClearButton title='Voltar' onPress={() => navigation.goBack()} name='undo' />
                </View>
            </ScrollView>
        </View>
    )
}

export default PageForgotPassword;