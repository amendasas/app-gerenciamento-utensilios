import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';



export default function UtensiliosCadastrados() {
    const navigation = useNavigation();

    const [utensilios, setUtensilios] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        fetch(':3000/utensilios')
            .then(response => response.json())
            .then(data => setUtensilios(data))
            .catch(error => console.error('Erro ao buscar utensílios:', error));
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.adicionadosRecentementeContainer}>
                <Text style={styles.adicionadosRecentemente}>Adicionados Recentemente</Text>
            </View>

            <View style={styles.listContainer}>
                <FlatList

                    data={utensilios.filter(item =>
                        item.name.toLowerCase().includes(searchWord.toLowerCase())
                    )}

                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.itemContainer} 
                            onPress={() => navigation.navigate('HistoricoUtilizacao', { utensilio: item })}
                        >
                            <Text style={styles.itemText} numberOfLines={2}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}: </Text>
                                {item.description}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchBar} onChangeText={setSearchWord} value={searchWord}></TextInput>
            </View>
        </View>
    );
}
