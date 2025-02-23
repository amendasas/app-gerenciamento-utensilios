import { StyleSheet, Dimensions } from 'react-native';
import Color from './../../../../components/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 35,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300,
    },
    buttonText: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    inputLarge: {
        backgroundColor: Color.textInput,
        borderRadius: 18,
        color: Color.grayEscuro,
        fontSize: 16,
        height: 100, // Caixa maior para a descrição
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        textAlignVertical: 'top', // Faz com que o texto comece no topo da caixa
        width: 300,
    },
    inputSmall: {
        backgroundColor: Color.textInput,
        borderRadius: 18,
        color: Color.grayEscuro,
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: 300, // ou windowWidth * 0.8 para responsividade
    },
    label: {
        alignSelf: "flex-start",
        color: Color.gray,
        fontSize: 16,
        paddingBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 25,
    },
});

export default styles;