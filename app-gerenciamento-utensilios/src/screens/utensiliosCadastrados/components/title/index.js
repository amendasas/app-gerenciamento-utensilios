import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles'; // Importa os estilos do arquivo styles.js

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importa um ícone de Seta

export default function Title() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="#FFF" style={{ transform: [{ scaleY:  1.0}] }}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Itens Cadastrados</Text>
                <Text style={styles.titleSubText}>Procure por um utensílio cadastrado</Text>
            </View>

            {/*ARRUMAR ESSA FORMATAÇÃO O TÍTULO ESTÁ MUITO FEIO*/}
            <View style={styles.container}>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
    );
}