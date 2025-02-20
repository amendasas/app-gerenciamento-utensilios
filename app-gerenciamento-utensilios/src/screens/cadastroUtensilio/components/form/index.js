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
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [qrValue, setQrValue] = useState(null);

    const handleGenerateQRCode = async () => {
        const qrData = JSON.stringify({ name, description, lastUsed: null });
    
        try {
            const response = await fetch('http://192.168.0.4:3000/utensilios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    description,
                    lastUsed: null,
                    qrCode: qrData // Envia o QR Code para o banco
                }),
            });
    
            const responseData = await response.json(); // Converte a resposta para JSON
    
            if (!response.ok) {
                if (responseData.error === "Utensílio já cadastrado!") {
                    alert("Erro: Esse utensílio já foi cadastrado!");
                } else {
                    throw new Error(responseData.error || "Erro ao salvar utensílio no banco de dados");
                }
                return;
            }
    
            alert("Utensílio cadastrado com sucesso!");
            
            // Aqui você pode limpar os campos depois do cadastro
            setName('');
            setdescription('');
    
        } catch (error) {
            console.error("Erro ao cadastrar utensílio:", error);
            alert("Erro ao cadastrar utensílio.");
        }
    };
    

    return (
        <View>
            {/* Essa View contém os componentes principais da tela "Cadastro de Utensílios" */}
            <View style={styles.containerArrumador}>

                <Text style={styles.titles}>NOME DO UTENSÍLIO</Text>
          
                <TextInput style={styles.textInput} 
                    placeholder="Nome do Utensílio" 
                    placeholderTextColor="#575757" 
                    value={name} 
                    onChangeText={setName}
                    multiline 
                    maxLength={30}

                />

                <Text style={styles.titles}>DESCRIÇÃO</Text>
          
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição do Utensílio"
                    placeholderTextColor="#575757"
                    value={description}
                    onChangeText={setdescription}
                    multiline 
                    maxLength={250}
                />

                {/* Container da imagem do QR Code */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./simboloQRCode.png')} // Caminho da imagem do QR Code (mesma pasta do arquivo "form")
                        style={styles.image} // Aplicação do estilo definido para a imagem
                    />
                </View>

                {/* Primeiro botão: usado para gerar um QR Code */}
                <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
                    <Text style={styles.buttonText}>Gerar QR Code</Text>
                </TouchableOpacity>

                <Text style={styles.link}>Salvar e Compartilhar QR Code</Text>
            </View>
        </View>
    );
}