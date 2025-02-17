import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    // Estilo base da tela do formulário (não está sendo utilizado diretamente aqui, mas pode ser aproveitado no futuro)
    container: {
        flex: 1, // O formulário ocupa toda a área disponível
        backgroundColor: '#121212', // Cor de fundo escura para a tela
        alignItems: 'center', // Centraliza os itens horizontalmente
        justifyContent: 'center', // Centraliza os itens verticalmente
        padding: 20, // Espaçamento interno para evitar que os itens toquem nas bordas
    },

    // Estilo para alinhar os itens horizontalmente
    containerArrumador:{
        alignItems: 'center', // Centraliza os itens horizontalmente
    },

    // Estilo do container que segura a imagem da mão
    imageContainer: {
        marginBottom: 20, // Espaçamento abaixo da imagem
    },
    image: {
        width: 320, // Largura da imagem em pixels
        height: 320, // Altura da imagem em pixels
    },

    // Estilo dos botões (tanto "Ler QR Code" quanto "Cadastrar Utensílio")
    button: {
        backgroundColor: Color.background, // Cor de fundo escura para contraste
        paddingVertical: 15, // Espaçamento vertical interno do botão
        paddingHorizontal: 20, // Espaçamento horizontal interno do botão
        borderRadius: 10, // Bordas arredondadas
        marginBottom: 10, // Espaçamento entre os botões
        width: '100%', // Botão ocupa 80% da largura do container pai
        alignItems: 'center', // Centraliza o texto do botão horizontalmente
    },
    buttonText: {
        color: Color.white, // Cor do texto do botão (branca para contraste)
        fontSize: 16, // Tamanho da fonte do texto
        fontWeight: 'bold', // Deixa o texto em negrito
    },

    // Estilo do link informativo abaixo dos botões
    link: {
        color: Color.link, // Cor cinza clara para o link
        marginTop: 20, // Espaçamento acima do link
        textDecorationLine: 'underline', // Sublinhar o texto para indicar que é clicável
        fontSize: 16, // Tamanho da fonte do texto do link
    },
});

export default styles;