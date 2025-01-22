import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
    return (
        // Essa view é usada para a estilização do título
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gestão de Utensílios</Text>
        </View>
    );
}

// Estilos para o título
const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#121212', // Fundo escuro
        paddingVertical: 10, // Espaçamento vertical
        paddingHorizontal: 20, // Espaçamento horizontal
        marginBottom: 20, // Espaço abaixo do título
        borderRadius: 5, // Bordas levemente arredondadas
        alignItems: 'center', // Centraliza o texto horizontalmente
    },
    titleText: {
        fontSize: 24, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito
        color: '#FFFFFF', // Cor branca
        textAlign: 'center', // Centraliza o texto
    },
});
