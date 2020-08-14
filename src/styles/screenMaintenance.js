import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001435',
        paddingTop: 55
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        height: 121,
        width: 220
    },
    boxModel: {
        // height: '27%',
        // backgroundColor: '#EAEAEA',
        marginHorizontal: 30,
        marginTop: '10%'
    },
    textBoxModel: {
        fontSize: 20,
        marginLeft: 8,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#EAEAEA'
    },
    viewCenter: {
        backgroundColor: '#001435',
        height: '8%'
    },
    boxMaintenance: {
        height: 150,
        // backgroundColor: '#EAEAEA',
        marginHorizontal: 30,
        marginTop: '15%'
    },
    textDescription: {
        textAlign: 'left',
        marginHorizontal: 5,
        fontSize: 20
    },
    viewButton: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: '18%'
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