import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
    },
    titleContainer: {
        alignItems: "flex-start", // Mantém ambos alinhados na esquerda do título principal
        alignSelf: "center", // Garante que o conjunto fique centralizado
        marginBottom: "3%"
    },
    titleText: {
        fontSize: 34, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito
        color: '#FFFFFF', // Cor branca

    },
    titleSubText: {
        fontSize: 15, // Tamanho da fonte maior
        color: '#FFFFFF', // Cor branca

    },
    setaContainer:{
        paddingLeft: '4%',
        paddingTop: '6%',

    }
});

export default styles;