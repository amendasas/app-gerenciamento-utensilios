import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "../form";

import styles from '../../../stylesComuns/main/styles';



export default function Main() {
    return (
        // Essa View é usada para estilizar o campo onde ficam os componentes (O quadro branco com as pontas arredondadas)
        <View style={styles.main}>
            <Form />
        </View>
    );
}