import React from "react";
import { View } from "react-native";
import Form from "../form";
import styles from './styles'; // Importe os estilos do arquivo styles.js

export default function Main() {
    return (
        <View style={styles.main}>
            <Form />
        </View>
    );
}
