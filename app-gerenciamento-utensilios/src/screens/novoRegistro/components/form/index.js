import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import config from './../../../../../config';

import styles from './styles';



export default function NovoRegistro() {
    const route = useRoute();
    const { utensilioName } = route.params;
    const [nameResponsavel, setNameResponsavel] = useState("");
    const [descriptionUso, setDescriptionUso] = useState("");

    const handleRegistro = async () => {
        try {
            const response = await fetch(`${config.IP_PESSOAL}:3000/utilizacoes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    utensilioName,
                    responsavelUso: nameResponsavel,
                    descriptionUso: descriptionUso,
                    dataUso: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.error || "Erro ao salvar utilização no banco de dados");
                return;
            }

            alert("Utilização cadastrada com sucesso!");
            setNameResponsavel('');
            setDescriptionUso('');
        } catch (error) {
            console.error("Erro ao cadastrar utilização:", error);
            alert("Erro ao cadastrar utilização.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Utensílio Selecionado</Text>
            <Text style={styles.itemNome}>{utensilioName}</Text>

            <Text style={styles.label}>Nome do Responsável</Text>
            <TextInput
                style={styles.inputSmall}
                placeholder="Seu nome"
                value={nameResponsavel}
                onChangeText={setNameResponsavel}
                maxLength={32}
            />

            <Text style={styles.label}>Descrição de como foi utilizado</Text>
            <TextInput
                style={styles.inputLarge}
                placeholder="Descreva"
                value={descriptionUso}
                onChangeText={setDescriptionUso}
                multiline
                maxLength={250}
                scrollEnabled={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
