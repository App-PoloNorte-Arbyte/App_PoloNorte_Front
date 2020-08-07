import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import styles from '../styles/screenMaintenance'

const PageMaintenance = () => {
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
                    <TextInput style={styles.textDescription}
                        placeholder='Descreva a Manutenção...'
                        multiline={true}
                    />
                </ScrollView>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Efetuar Manutenção</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PageMaintenance;