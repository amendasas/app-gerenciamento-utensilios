import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function UtensiliosCadastrados() {
    const [utensilios, setUtensilios] = useState([]);

    useEffect(() => {
        fetch(':3000/utensilios')
            .then(response => response.json())
            .then(data => {
                setUtensilios(data);  // Atualiza o estado corretamente
            })
            .catch(error => {
                console.error('Erro ao buscar utensílios:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            {utensilios.map((utensilio, index) => (
                <View key={index}>
                    <Text>Nome: {utensilio.name}</Text>
                    <Text>Descrição: {utensilio.description}</Text>
                    <Text>Último Uso: {utensilio.lastUse}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
        color:"#000"
    }

});
