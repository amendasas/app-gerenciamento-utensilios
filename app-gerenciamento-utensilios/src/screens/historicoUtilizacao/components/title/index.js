import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Title() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Ícone de Seta */}
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="#FFF" style={{ transform: [{ scaleY:  1.0}] }}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Histórico de{"\n"}Utilização</Text>
            </View>
        </View>
    );
}