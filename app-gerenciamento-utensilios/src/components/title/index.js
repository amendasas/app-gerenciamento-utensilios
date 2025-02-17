import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Title({ title, subTitle }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Ícone de Seta */}
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="#FFF" style={{ transform: [{ scaleY:  1.0}] }}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.titleSubText}>{subTitle}</Text>
            </View>
        </View>
    );
}