import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center', // Centraliza o texto horizontalmente,
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 40, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito
        color: '#FFFFFF', // Cor branca
        textAlign: 'center', // Centraliza o texto
        marginTop: 50,
    },
});

export default styles;