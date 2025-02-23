import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Color from './../colors';
import styles from './styles';



export default function Title({ title, subTitle }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Ícone de Seta */}
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color={Color.white} style={{ transform: [{ scaleY:  1.0}] }}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.titleSubText}>{subTitle}</Text>
            </View>
        </View>
    );
}