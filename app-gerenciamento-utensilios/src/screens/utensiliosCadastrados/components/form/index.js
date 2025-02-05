import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles'; 



export default function UtensiliosCadastrados() {
    const [utensilios, setUtensilios] = useState([]);

    useEffect(() => {
        fetch(':3000/utensilios')
            .then(response => response.json())
            .then(data => setUtensilios(data))
            .catch(error => console.error('Erro ao buscar utensílios:', error));
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text></Text>
                <Text></Text>
            </View>

            <View>
                <Text>Adicionados Recentemente</Text>
            </View>

            <View>
                <Text></Text>
                <Text></Text>
            </View>

            <View>
                <FlatList
                    scrollEnabled={false} 

                    data={utensilios.map((item, index) => ({
                        id: item._id,
                        name: item.name,
                        description: item.description,
                    }))}

                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText} numberOfLines={2}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}: </Text>
                                {item.description}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}