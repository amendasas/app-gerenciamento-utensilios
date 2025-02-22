import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between", // Distribui o conteúdo para não sobrepor
    },
    titleContainer: {
        alignItems: "flex-start", // Alinha à esquerda
        alignSelf: "center", // Centraliza o conjunto
        marginBottom: "3%",
        marginTop: 8, // Ajuste suave para mover o título um pouco para baixo
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
    setaContainer: {
        paddingLeft: '4%',
        paddingTop: '15%', // Ajuste suave para mover a seta para baixo
    },
});

export default styles;
