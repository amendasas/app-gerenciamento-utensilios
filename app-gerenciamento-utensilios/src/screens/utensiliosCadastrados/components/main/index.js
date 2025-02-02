import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "../form";

import styles from './styles'; // Importa os estilos do arquivo styles.js



export default function Main() {
    return (
        // Essa View é usada para estilizar o campo onde ficam os componentes (O quadro branco com as pontas arredondadas)
        <View style={styles.main}>
            <Form />
        </View>
    );
}