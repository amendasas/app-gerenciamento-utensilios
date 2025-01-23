import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

// Função principal que representa o formulário da primeira tela "Gestão de Utensílios"
export default function Form() {
    // Faz o Navigation funcionar.
    const navigation = useNavigation();

    return (
        <View>
            {/* Essa View contém os componentes principais da primeira tela "Gestão de Utensílios" */}
            <View style={styles.containerArrumador}>
                {/* Container da imagem da mão segurando o QR Code */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./maoQrcode.png')} // Caminho da imagem da mão (mesma pasta do arquivo "form")
                        style={styles.image} // Aplicação do estilo definido para a imagem
                    />
                </View>

                {/* Primeiro botão: usado para iniciar a leitura de um QR Code */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ler QR Code</Text>
                </TouchableOpacity>

                {/* Segundo botão: usado para cadastrar um novo utensílio */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroUtensilio")}>
                    <Text style={styles.buttonText}>Cadastrar Utensílio</Text>
                </TouchableOpacity>

                {/* Link informativo para acessar informações de uso do aplicativo */}
                <Text style={styles.link}>Acessar Informações de utilização do app</Text>
            </View>
        </View>
    );
}

// Estilização dos componentes do formulário
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
        marginBottom: 30, // Espaçamento abaixo da imagem
    },
    image: {
        width: 300, // Largura da imagem em pixels
        height: 300, // Altura da imagem em pixels
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
