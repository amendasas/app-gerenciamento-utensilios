import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    containerArrumador:{
        alignItems: 'center',
    },
    titles:{
        alignSelf: "flex-start",
        color: Color.gray,
        paddingBottom: 10,
        paddingTop: 40,
    },
    textInput:{
        backgroundColor: Color.textInput,
        borderRadius: 18,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300,
    },
    imageContainer: {
        marginBottom: 30,
        marginTop: 30, 
    },
    image: {
        height: 180,
        width: 180,
    },
    button: {
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '300',
    },
    buttonText: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: Color.link,
        fontSize: 14,
        marginBottom: 30,
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});

export default styles;