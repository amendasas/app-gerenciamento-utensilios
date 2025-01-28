import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Estilo para alinhar os itens horizontalmente
    containerArrumador:{
        alignItems: 'center', // Centraliza os itens horizontalmente
    },

    titles:{
        color: "#999999",
        paddingBottom: 10,
        paddingTop: 40,
    },

    textInput:{
        backgroundColor: "#cccccc",
        borderRadius: 15,
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    
    // Estilo do container da imagem do QR Code
    imageContainer: {
        marginBottom: 30, // Espaçamento abaixo da imagem
    },
    image: {
        width: 200, // Largura da imagem em pixels
        height: 200, // Altura da imagem em pixels
    },

    // Estilo dos botões (tanto "Ler QR Code" quanto "Cadastrar Utensílio")
    button: {
        backgroundColor: '#1E1E1E', // Cor de fundo escura para contraste
        paddingVertical: 15, // Espaçamento vertical interno do botão
        paddingHorizontal: 20, // Espaçamento horizontal interno do botão
        borderRadius: 10, // Bordas arredondadas
        marginBottom: 10, // Espaçamento entre os botões
        width: '80%', // Botão ocupa 80% da largura do container pai
        alignItems: 'center', // Centraliza o texto do botão horizontalmente
    },
    buttonText: {
        color: '#FFFFFF', // Cor do texto do botão (branca para contraste)
        fontSize: 16, // Tamanho da fonte do texto
        fontWeight: 'bold', // Deixa o texto em negrito
    },

    // Estilo do link informativo abaixo dos botões
    link: {
        color: '#A9A9A9', // Cor cinza clara para o link
        marginTop: 20, // Espaçamento acima do link
        textDecorationLine: 'underline', // Sublinhar o texto para indicar que é clicável
        fontSize: 14, // Tamanho da fonte do texto do link
    },
});

export default styles;