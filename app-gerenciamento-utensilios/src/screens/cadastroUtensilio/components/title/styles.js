import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",

    },
    titleContainer: {
        alignItems: "flex-start", // Mantém ambos alinhados na esquerda do título principal
        alignSelf: "center", // Garante que o conjunto fique centralizado
        marginBottom: "4%"
    },
    titleText: {
        fontSize: 32, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito
        color: '#FFFFFF', // Cor branca
    },
    titleSubText: {
        fontSize: 13, // Tamanho da fonte maior
        color: '#FFFFFF', // Cor branca
    },
    setaContainer:{
        paddingLeft: '4%',
    }
});

export default styles;