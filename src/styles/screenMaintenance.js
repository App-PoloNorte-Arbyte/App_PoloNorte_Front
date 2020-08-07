import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001435',
        paddingTop: 55
    },
    boxModel: {
        height: '27%',
        backgroundColor: '#EAEAEA',
        marginHorizontal: 30
    },
    textBoxModel: {
        fontSize: 25,
        marginLeft: 8,
        paddingVertical: 5,
    },
    viewCenter: {
        backgroundColor: '#001435',
        height: '8%'
    },
    boxMaintenance: {
        height: '25%',
        backgroundColor: '#EAEAEA',
        marginHorizontal: 30,
    },
    textDescription: {
        textAlign: 'left',
        marginHorizontal: 5,
        fontSize: 20
    },
    viewButton: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    buttonStyle: {
        width: '60%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        color: '#001435',
        fontSize: 20,
        textAlign: 'center'
    },
})

export default styles