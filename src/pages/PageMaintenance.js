import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, Alert, AsyncStorage } from 'react-native'
import styles from '../styles/screenMaintenance'
import Button from '../components/Button'
import Input from '../components/Input'
import addDescription from '../Api/addDescription'
import axios from 'axios'
import addDescriptionAction from '../actions/addDescription'
import { connect } from 'react-redux'


const PageMaintenance = ({ navigation, equipment, user }) => {
    const [maintenance, setMaintenance] = useState('')
    const isFormValid = () => maintenance != ''
    const resetInput = () => { setMaintenance('') }
    const [userData, setUserData] = useState({ user: {} })

    // useEffect(() => {
    //     AsyncStorage.getItem('user')
    //         .then((userData) => {
    //             if (userData !== null) {
    //                 const parsed = JSON.parse(userData)
    //                 setUserData(parsed)
    //                 return parsed.token
    //             }
    //         })
    // .then((token) => {
    //     if (!token) return
    //     return axios.get(' https://polo-norte.herokuapp.com/equipments', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    // })
    // .catch((err) => {
    //     console.log('Erro', err)
    // })
    // }, [])

    const validMaintenance = () => {
        if (!isFormValid()) {
            return Alert.alert('Por favor, insira uma manutenção!')
        }

        addDescription(user.token, equipment.id, maintenance)
            .then((res) => console.log(res))
            .catch((err) => {
                Alert.alert('Falhou!', 'Erro ao Cadastrar.')
                console.log('erro', err)
            })

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#001435'} />
            <View style={styles.boxModel}>
                <Text style={styles.textBoxModel}>Fabricante: {equipment.brand}</Text>
                <Text style={styles.textBoxModel}>Ano: {equipment.year}</Text>
                <Text style={styles.textBoxModel}>Modelo: {equipment.model}</Text>
            </View>
            <View style={styles.viewCenter}></View>
            <View style={styles.boxMaintenance}>
                <Input placeholder='Descreva a Manutenção...'
                    multiline={true}
                    onChangeText={setMaintenance}
                    value={maintenance} />
            </View>
            <View style={styles.viewButton}>
                <Button title='Efetuar Manutenção' onPress={validMaintenance} />
                <Button onPress={() => { navigation.goBack() }} title='Voltar' />
            </View>
        </View>
    )
}

const mapStateToProps = (store) => {
    return {
        // description: store.description,
        equipment: store.equipment,
        user: store.user
    }
}

export default connect(mapStateToProps)(PageMaintenance)