import React, { useState, useEffect } from 'react';
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles'; 



export default function UtensiliosCadastrados() {
    const navigation = useNavigation();

    const [utensilios, setUtensilios] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [sortOrder, setSortOrder] = useState('date'); // 'date' ou 'name'
    const [modalVisible, setModalVisible] = useState(false); // Estado para o modal

    useEffect(() => {
        fetch(':3000/utensilios')
            .then(response => response.json())
            .then(data => setUtensilios(data))
            .catch(error => console.error('Erro ao buscar utensílios:', error));
    }, []);

    // Função para ordenar por nome
    const sortByName = (a, b) => {
        
        return a.name.localeCompare(b.name);
    };

    // Função para ordenar por data (assumindo que a data está no formato ISO)
    const sortByDate = (a, b) => {
    return new Date(a.dateAdded) - new Date(b.dateAdded); // data mais antiga primeiro
};


    // Função para definir a ordem de exibição
    const getSortedData = () => {
        if (sortOrder === 'name') {
            return [...utensilios].sort(sortByName);
        }
        return [...utensilios].sort(sortByDate).reverse(); // Inverte a lista para os mais novos ficarem embaixo
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.adicionadosRecentementeContainer}>
            <Text style={styles.adicionadosRecentemente}>
                {sortOrder === 'name' ? 'Por ordem alfabética' : 'Adicionados Recentemente'}
            </Text>

                <TouchableOpacity 
                    style={styles.sortButtonContainer} 
                    onPress={() => setModalVisible(true)}
                >
                    <Icon name="chevron-down" size={21} color="#4d4c4c" />
                </TouchableOpacity>
            </View>

            <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
>
    <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Escolha a ordenação</Text>

            <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                    setSortOrder('name');
                    setModalVisible(false);
                }}
            >
                <Text style={styles.modalButtonText}>Ordenar por Nome</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                    setSortOrder('date');
                    setModalVisible(false);
                }}
            >
                <Text style={styles.modalButtonText}>Ordenar por Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => setModalVisible(false)}
            >
                <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

            <View style={styles.listContainer}>
                <FlatList
                    data={getSortedData().filter(item =>
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
                    ListFooterComponent={<View style={{ height: 70 }} />}  // Espaço branco no final
                />
            </View>

            <View style={styles.searchBarContainer}>
            <TextInput 
                style={styles.searchBar} 
                onChangeText={setSearchWord} 
                value={searchWord}
                placeholder="Pesquisar"
                placeholderTextColor="#FFF"
                multiline 
                maxLength={24}
            />

            </View>
        </View>
    );
}
