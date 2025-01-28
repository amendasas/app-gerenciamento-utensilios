import React from "react";
import { View, Text } from "react-native";
import styles from './styles'; // Importa os estilos do arquivo styles.js

export default function Title() {
    return (
        // Essa view é usada para a estilização do título
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gestão de{'\n'}Utensílios</Text>
        </View>
    );
}