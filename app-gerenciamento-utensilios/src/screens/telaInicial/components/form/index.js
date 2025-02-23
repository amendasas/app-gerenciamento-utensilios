import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';



export default function Form() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.containerArrumador}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./maoQrcode.png')}
                        style={styles.image} 
                    />
                </View>

                <TouchableOpacity title="LerQRCode" style={styles.button} onPress={() => navigation.navigate("LeitorQRCode")}>
                    <Text style={styles.buttonText}>Ler QR Code</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroUtensilio")}>
                    <Text style={styles.buttonText}>Cadastrar Utensílio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UtensiliosCadastrados")}>
                    <Text style={styles.buttonText}>Itens Cadastrados</Text>
                </TouchableOpacity>

                <Text style={styles.link}>Acessar Informações de utilização do app</Text>
            </View>
        </View>
    );
}