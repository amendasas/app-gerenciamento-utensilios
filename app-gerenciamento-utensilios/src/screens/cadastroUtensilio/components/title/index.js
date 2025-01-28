import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles'; // Importa os estilos do arquivo styles.js

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importa um ícone de Seta

export default function Title() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Ícone de Seta */}
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={40} color="#FFF" style={{ transform: [{ scaleY: 0.8 }] }}/>
            </TouchableOpacity>

            {/* Essa view é usada para a estilização do título */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Cadastro de Utensílio</Text>
                <Text style={styles.titleSubText}>PREENCHA AS INFORMAÇÕES DO UTENSÍLIO</Text>
            </View>
        </View>
    );
}