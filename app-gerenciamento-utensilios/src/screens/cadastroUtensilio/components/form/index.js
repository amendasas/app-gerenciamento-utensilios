import React from "react";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from './styles'; // Importa os estilos do arquivo styles.js

import { useNavigation } from '@react-navigation/native';



// Função principal que representa o formulário da primeira tela "Gestão de Utensílios"
export default function Form() {
    // Faz o Navigation funcionar.
    const navigation = useNavigation();

    // Atualiza os valores à medida que o usuário digita
    const [nome, setNome] = useState('');
    const [description, setdescription] = useState('');

    return (
        <View>
            {/* Essa View contém os componentes principais da tela "Cadastro de Utensílios" */}
            <View style={styles.containerArrumador}>

                <Text style={styles.titles}>NOME DO UTENSÍLIO</Text>
          
                <TextInput style={styles.textInput} 
                    placeholder="Nome do Utensílio" 
                    placeholderTextColor="#575757" 
                    value={nome} 
                    onChangeText={setNome}
                />

                <Text style={styles.titles}>DESCRIÇÃO</Text>
          
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição do Utensílio"
                    placeholderTextColor="#575757"
                    value={description}
                    onChangeText={setdescription}
                    multiline
                />

                {/* Container da imagem do QR Code */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./maoQrcode.png')} // Caminho da imagem da mão (mesma pasta do arquivo "form")
                        style={styles.image} // Aplicação do estilo definido para a imagem
                    />
                </View>

                {/* Primeiro botão: usado para iniciar a leitura de um QR Code */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gerar QR Code</Text>
                </TouchableOpacity>

                {/* Link informativo para acessar informações de uso do aplicativo */}
                <Text style={styles.link}>Salvar e Compartilhar QR Code</Text>
            </View>
        </View>
    );
}