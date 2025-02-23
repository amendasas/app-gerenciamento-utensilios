import { StyleSheet, Dimensions } from 'react-native';
import Color from './../../../../components/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 25,
        fontSize: 16,
        color: Color.gray,
    },
    inputSmall: {
        backgroundColor: Color.textInput,
        borderRadius: 18,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300, // ou windowWidth * 0.8 para responsividade
        marginBottom: 20,
        color: '#333',
    },
    inputLarge: {
        backgroundColor: Color.textInput,
        borderRadius: 18,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300,
        height: 100, // Caixa maior para a descrição
        textAlignVertical: 'top', // Faz com que o texto comece no topo da caixa
        marginBottom: 20,
        color: '#333',
    },
    button: {
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
        marginTop: 35,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300,
    },
    buttonText: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
