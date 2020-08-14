import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView, Alert, AsyncStorage, Modal } from 'react-native'
import styles from '../styles/screenMaintenance'
import SolidButton from '../components/SolidButton'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import addDescription from '../Api/addDescription'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import ModalDescription from '../components/modalDescription'


const PageMaintenance = ({ navigation, equipment, user }) => {
    const [visible, setvisible] = useState(false)
    const [maintenance, setMaintenance] = useState('')
    const isFormValid = () => maintenance != ''
    const resetInput = () => { setMaintenance('') }

    const onPressModal = () => {
        if (!isFormValid()) {
            return Alert.alert('Informação Inválida!', 'Por favor, insira uma manutenção!')
        }
        setvisible(!visible)
    }

    const validMaintenance = () => {
        addDescription(user.token, equipment.id, maintenance)
            .then((res) => {
                resetInput()
                Alert.alert('Descrição realizado com sucesso!', 'Sua descrição foi enviada!'),
                    onPressModal()
                console.log(res)
            })
            .catch((err) => {
                Alert.alert('Falha ao cadastrar a manutenção!', 'Por favor tente novamente mais tarde!'),
                    onPressModal()
                console.log('erro', err)
            })

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <StatusBar backgroundColor={'#001435'} />
                <View style={styles.boxModel}>
                    <Text style={styles.textBoxModel}>Fabricante: {equipment.brand}</Text>
                    <Text style={styles.textBoxModel}>Ano: {equipment.year}</Text>
                    <Text style={styles.textBoxModel}>Modelo: {equipment.model}</Text>
                </View>
                <View style={styles.boxMaintenance}>
                    <Input
                        label="  Descricão"
                        placeholder="  Digite a descrição"
                        inputStyle={{ marginLeft: 10, color: "#EAEAEA" }}
                        value={maintenance}
                        onChangeText={text => setMaintenance(text)}
                        multiline={true}
                        leftIcon={
                            <Icon
                                name='cogs'
                                size={24}
                                color='#EAEAEA'
                                style={{ marginLeft: 10 }}
                            />}
                    />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton title='Efetuar Manutenção'
                        onPress={onPressModal}
                        name='wrench'
                    />
                </View>
                <View style={styles.viewButton}>
                    <SolidButton onPress={() => { navigation.goBack() }}
                        title='Voltar'
                        name='undo'
                    />
                </View>
            </ScrollView>
            <Modal
                visible={visible}
                animationType='fade'
                transparent={true}
            >
                <ModalDescription visible={setvisible}
                    validMaintenance={validMaintenance}
                />
            </Modal>
        </View>
    )
}

const mapStateToProps = (store) => {
    return {
        equipment: store.equipment,
        user: store.user
    }
}

export default connect(mapStateToProps)(PageMaintenance)