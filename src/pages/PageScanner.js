import React, { useState, useEffect, } from 'react';
import { Alert, View, Modal, StatusBar, Image, AsyncStorage } from 'react-native';

import getEquipment from '../Api/getEquipment'

import { connect } from 'react-redux'
import login from '../actions/login'
import equipment from '../actions/equipment'

import logo from '../images/logo.png'

import ReadScanner from '../components/ReadScanner';
import SolidButton from '../components/SolidButton'
import ClearButton from '../components/ClearButton'

import styles from '../styles/screenScanner'

const PageScanner = ({ navigation, dispatch, user }) => {

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((response) => {
                if (response == null) {
                    return navigation.navigate('PageLogin')
                } else {
                    let responseParse = JSON.parse(response)
                    dispatch(login(responseParse))
                }
            })
            .catch((e) => {
                Alert.alert('Usuario Não Encontrado!')
                console.log(e.response.data);
            });
    }, [])

    const [isVisibleCam, setIsVisibleCam] = useState(false);

    const onPressVisibleCam = () => {
        setIsVisibleCam(!isVisibleCam)
    };

    const onQRCode = async (id) => {
        try {
            if(isNaN(Number(id))){
                return Alert.alert('QR code inválido, tente novamente')
            }
            const { data } = await getEquipment(id, user.token)
            await dispatch(equipment(data))
            return navigation.navigate('PageMaintenance');
        } catch (e) {
            Alert.alert('Equipamento não encontrado')
            console.log(e.response.data);
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
                <SolidButton title="Nova Manutenção" onPress={onPressVisibleCam} />
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


const mapStoreToProps = store => {
    return {
        user: store.user,
    }
}

export default connect(mapStoreToProps)(PageScanner);