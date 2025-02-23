import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from './styles';
import Color from './../../../../components/colors';



export default function Title() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color={Color.white} style={{ transform: [{ scaleY:  1.0}] }}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Histórico de{"\n"}Utilização</Text>
            </View>
        </View>
    );
}