import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001435',
        // flex: 1,
        paddingVertical: 30
    },
    viewLogo: {
        alignItems: 'center'
    },
    logo: {
        height: 121,
        width: 220
    },
    viewTop: {
        flex: 1,
        justifyContent:'space-evenly',
        paddingTop: 10
    },
    textnewPassword: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20
    },
    textInputCPF: {
        height: 30,
        width: '60%',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#EAEAEA',
        marginVertical: 17,
        textAlign: 'center',
        alignSelf: 'center',
    },
    viewButton: {
        flex: 1,
        justifyContent: 'center',
        // marginVertical: 200
    },
    buttonStyle: {
        width: '60%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        height: 30,
        justifyContent: 'center',
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

