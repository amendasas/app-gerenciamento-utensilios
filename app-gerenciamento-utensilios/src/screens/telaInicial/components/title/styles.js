<<<<<<<< HEAD:app-gerenciamento-utensilios/src/components/title/index.js
import React from "react";
import { View, Text } from "react-native";
import styles from './styles'; // Importe os estilos do arquivo styles.js

export default function Title() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gestão de{'\n'}Utensílios</Text>
        </View>
    );
}
========
import { StyleSheet } from 'react-native';

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

export default styles;
>>>>>>>> arrumando-navigation:app-gerenciamento-utensilios/src/screens/telaInicial/components/title/styles.js
