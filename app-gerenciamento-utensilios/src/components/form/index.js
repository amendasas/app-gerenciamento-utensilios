import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Form(){
    return(
        <View>

            {/* Essa View contém os componentes princiáis da primeira tela "Gestão de Utensílios" */}
            <View>

                {/* Imagem da mão */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./maoQrcode.png')} //Coloquei a imagem na mesma pasta "form"
                        style={styles.image}
                    />
                </View>

                {/* Primeiro botão */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ler QR Code</Text>
                </TouchableOpacity>

                {/* Segundo botão */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar Utensílio</Text>
                </TouchableOpacity>

                {/* Mensagem de link */}
                <Text style={styles.link}>Acessar Informações de utilização do app</Text>
        </View>


        </View>
    );
}


// Estilizando nosso FORM
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    //Dados da aparência da imagem da mão
    imageContainer: {
        marginBottom: 30,
    },
    image: {
        width: 300,
        height: 300,
    },

    //Dado da aparêcia dos botões
    button: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    //Dados da aparência da mendagem de link
    link: {
        color: '#A9A9A9',
        marginTop: 20,
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});