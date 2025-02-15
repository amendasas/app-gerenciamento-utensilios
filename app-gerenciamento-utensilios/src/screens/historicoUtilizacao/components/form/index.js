import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { useRoute } from '@react-navigation/native';

export default function Form() {
    const route = useRoute();
    const { utensilio } = route.params; // Obtendo os dados do utensílio

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.item}>Item</Text>
                <Text style={styles.itemNome}>{utensilio.name}</Text> 
            </View>

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Novo Registro</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
