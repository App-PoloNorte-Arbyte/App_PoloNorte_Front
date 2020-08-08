import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native'
import styles from '../styles/screenMaintenance'
import Button from '../components/Button'
import Input from '../components/Input'


const PageMaintenance = ({ navigation }) => {
    const [maintenance, setmaintenance] = useState('')
    const isValid = () => maintenance != ''
    const emptyInput = () => setmaintenance('')
    const validate = () => {
        if (!isValid()) {
            return Alert.alert('Por favor, insira alguma descrição!')
        } else {
            emptyInput()
            return Alert.alert('Descrição feita com sucesso!')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#001435'} />
            <View style={styles.boxModel}>
                <Text style={styles.textBoxModel}>Fabricante:</Text>
                <Text style={styles.textBoxModel}>Ano:</Text>
                <Text style={styles.textBoxModel}>Modelo:</Text>
            </View>
            <View style={styles.viewCenter}></View>
            <View style={styles.boxMaintenance}>
                <ScrollView>
                    <Input placeholder={"Descreva a sua manutenção..."}
                        value={maintenance}
                        onChangeText={setmaintenance} />
                </ScrollView>
            </View>
            <View style={styles.viewButton}>
                <Button onPress={validate} title='Efetuar Manutenção' />
                <Button onPress={() => { navigation.navigate('PageForgotPassword') }} title='Voltar' />
            </View>
        </View>
    )
}

export default PageMaintenance;