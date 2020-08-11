import React, { useState, useEffect, } from 'react';
import { Alert, View, StyleSheet, Modal, StatusBar, Image, AsyncStorage } from 'react-native';

import ReadScanner from '../components/ReadScanner';
import logo from '../images/logo.png'

import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'


const PaginaScanner = ({ navigation }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((response) => {
                if (response == null) {
                    navigation.navigate('PageLogin')
                    return
                } else {
                    let responseParse = JSON.parse(response)
                    setUser(responseParse)
                }
            })
            .catch((error) => {
                Alert.alert('Usuario Não Encontrado!')
                console.log(error);
            });
    }, [])
    
    const [isVisibleCam, setIsVisibleCam] = useState(false) ;
   
    const onPressVisibleCam = () => {
        setIsVisibleCam(!isVisibleCam)
    };

    const onQRCode = (id) => {
        navigation.navigate('PageMaintenance', id);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#001435'} />
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.buttonCode}>
                <SolidButton onPress={onPressVisibleCam} title="Ler QRCode" />
            </View>
            <View style={styles.containerButtons}>
                <ClearButton onPress={() => { navigation.navigate('PageChangePassword') }} title="Redefinir senha" />
                <ClearButton onPress={() => {
                    navigation.navigate('PageLogin')
                    return AsyncStorage.removeItem('user')
                }} title="Sair" />
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisibleCam}
            >
                <ReadScanner onPress={onPressVisibleCam} onQRCode={onQRCode} />
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001435',
        flex: 1,
        paddingVertical: 30
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        height: 121,
        width: 220
    },
    buttonCode: {
        flex: 1,
        marginTop: 30,
        width: '60%',
        alignSelf: 'center',
    },
    containerButtons: {
        margin: 15,
        justifyContent: 'space-evenly',
        padding: 20
    }
})


export default PaginaScanner;