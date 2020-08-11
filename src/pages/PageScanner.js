import React, { useState, useEffect, } from 'react';
import { Alert, View, StyleSheet, Modal, StatusBar, Image, AsyncStorage } from 'react-native';

import getEquipment from '../Api/getEquipment'

import logo from '../images/logo.png'

import ReadScanner from '../components/ReadScanner';
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'

const PageScanner = ({ navigation }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((response) => {
                if (response == null) {
                    return navigation.navigate('PageLogin')
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

    const [isVisibleCam, setIsVisibleCam] = useState(false);

    const onPressVisibleCam = () => {
        setIsVisibleCam(!isVisibleCam)
    };

    const onQRCode = async (id) => {
        try {
            const { data } = await getEquipment(id, user.token)
            navigation.navigate('PageMaintenance', { data });
        } catch (e) {
            Alert.alert('Equipamento não encontrado, tente novamente')
        }
    };

    const onPressChangePassword = () => {
        navigation.navigate('PageChangePassword') 
    };

    const onPressExit = async () => {
        await AsyncStorage.removeItem('user');
        return navigation.navigate('PageLogin')
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
                <ClearButton onPress={onPressChangePassword} title="Redefinir senha" />
                <ClearButton onPress={onPressExit} title="Sair" />
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
};

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


export default PageScanner;