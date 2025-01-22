import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
    return (
        // Essa view é usada para a estilização do título
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gestão de{'\n'}Utensílios</Text>
        </View>
    );
}

// Estilos para o título
const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center', // Centraliza o texto horizontalmente,
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 36, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito
        color: '#FFFFFF', // Cor branca
        textAlign: 'center', // Centraliza o texto
    },
});
