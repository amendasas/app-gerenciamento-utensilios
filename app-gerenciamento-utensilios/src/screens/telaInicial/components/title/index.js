import React from "react";
import { Text, View } from "react-native";

import styles from './styles';



export default function Title() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Gestão de{'\n'}Utensílios</Text>
        </View>
    );
}