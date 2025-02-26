import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'; 
import config from './../../../../../config';

import styles from './styles';



export default function Form() {
    const navigation = useNavigation(); 
    const route = useRoute();
    const { utensilio } = route.params;

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        const update = navigation.addListener("focus", () => {
            fetch(`${config.IP_PESSOAL}:3000/utilizacoes/${encodeURIComponent(utensilio._id)}`)
                .then(response => response.json())
                .then(data => setRegistros(data))
                .catch(error => console.error('Erro ao buscar registros:', error));
        });
    
        return update;
    }, [navigation, utensilio._id]);

    const formatDate = (dateString) => {
        if (!dateString) return "";
    
        const date = new Date(dateString);
    
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
    
        return `${day}/${month}/${year}`;
    };
    
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

            <Text style={styles.atividadesRecentes}>Atividades mais recentes</Text>

            <FlatList
                data={registros}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <Text style={styles.label}>{item.descriptionUso}</Text>
                )}
            />
        </View>
    );
}