import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "../form";

export default function Main() {
    return (
        // Essa View é usada para estilizar o campo onde ficam os componentes (O quadro branco com as pontas arredondadas)
        <View style={styles.main}>
            <Form />
        </View>
    );
}

// Estilo para o quadro branco com bordas arredondadas
const styles = StyleSheet.create({
    main: {
        flex: 3,
        backgroundColor: '#FFFFFF', // Fundo branco dentro da borda
        borderTopRightRadius: 50, // Bordas arredondadas no topo
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        justifyContent: 'flex-start', // Mantém o conteúdo no topo
    },
});
