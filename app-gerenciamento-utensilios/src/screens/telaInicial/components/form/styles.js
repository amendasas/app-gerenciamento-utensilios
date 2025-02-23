import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
    },
    buttonText: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerArrumador: {
        alignItems: 'center',
    },
    image: {
        height: 320,
        width: 320,
    },
    imageContainer: {
        marginBottom: 20,
    },
    link: {
        color: Color.link,
        fontSize: 16,
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});

export default styles;