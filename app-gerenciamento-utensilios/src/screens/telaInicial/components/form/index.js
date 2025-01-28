import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import styles from './styles'; // Importa os estilos do arquivo styles.js

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




