import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native'; 

export default function Form() {
    const route = useRoute();
    const { utensilio } = route.params; 
    const navigation = useNavigation();  

   

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.item}>Item</Text>
                <Text style={styles.itemNome}>{utensilio.name}</Text> 
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("NovoRegistro", { utensilioName: utensilio.name })}>
                    <Text style={styles.buttonText}>Novo Registro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
