import React from "react";
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Color from "./../../../../components/colors";



export default function Form() {
    const navigation = useNavigation();

    // Atualiza os valores à medida que o usuário digita
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');

    const handleGenerateQRCode = async () => {
        const qrData = JSON.stringify({ name, description, lastUsed: null });
    
        try {
            const response = await fetch(':3000/utensilios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    description,
                    lastUsed: null,
                    qrCode: qrData
                }),
            });
    
            const responseData = await response.json();
    
            if (!response.ok) {
                if (responseData.error === "Utensílio já cadastrado!") {
                    alert("Erro: Esse utensílio já foi cadastrado!");
                } else {
                    throw new Error(responseData.error || "Erro ao salvar utensílio no banco de dados");
                }
                return;
            }
    
            alert("Utensílio cadastrado com sucesso!");
            setName('');
            setdescription('');
    
        } catch (error) {
            console.error("Erro ao cadastrar utensílio:", error);
            alert("Erro ao cadastrar utensílio.");
        }
    };

    return (
        <View>
            <View style={styles.containerArrumador}>

                <Text style={styles.titles}>NOME DO UTENSÍLIO</Text>
          
                <TextInput style={styles.textInput} 
                    placeholder="Nome do Utensílio" 
                    placeholderTextColor={Color.grayEscuro} 
                    value={name} 
                    onChangeText={setName}
                    multiline 
                    maxLength={30}
                />

                <Text style={styles.titles}>DESCRIÇÃO</Text>
          
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição do Utensílio"
                    placeholderTextColor={Color.grayEscuro} 
                    value={description}
                    onChangeText={setdescription}
                    multiline 
                    maxLength={250}
                />

                <View style={styles.imageContainer}>
                    <Image
                        source={require('./simboloQRCode.png')}
                        style={styles.image}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
                    <Text style={styles.buttonText}>Gerar QR Code</Text>
                </TouchableOpacity>

                <Text style={styles.link}>Salvar e Compartilhar QR Code</Text>
            </View>
        </View>
    );
}