import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, Text } from "react-native";
import styles from './styles';  // Estilos para o formulário

export default function Form() {
    const [nomeUtensilio, setNomeUtensilio] = useState("");  
    const [descricaoUtensilio, setDescricaoUtensilio] = useState(""); 

    const handleRegistro = () => {
        console.log("Novo Utensílio Registrado: ", nomeUtensilio, descricaoUtensilio);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Seu nome</Text>
            <TextInput
                style={styles.inputSmall}
                placeholder="Seu nome"
                value={nomeUtensilio}
                onChangeText={setNomeUtensilio} 
                maxLength={32}
            />

            <Text style={styles.label}>Descrição de como foi utilizado</Text>
            <TextInput
                style={styles.inputLarge}
                placeholder="Descreva"
                value={descricaoUtensilio}
                onChangeText={setDescricaoUtensilio}
                multiline 
                maxLength={250}
                scrollEnabled={true}  // Permite rolagem interna se o conteúdo exceder o tamanho da caixa
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
