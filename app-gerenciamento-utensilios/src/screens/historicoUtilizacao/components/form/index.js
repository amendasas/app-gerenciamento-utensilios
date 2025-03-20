import React, { useEffect, useState, useRef } from "react"; 
import { FlatList, View, Text, TouchableOpacity, Alert, TextInput, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'; 
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import QRCode from 'react-native-qrcode-svg';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from 'react-native-view-shot';
import config from './../../../../../config';
import styles from './styles';

export default function Form() {
    const navigation = useNavigation(); 
    const route = useRoute();
    const { utensilio } = route.params;

    const [registros, setRegistros] = useState([]);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); // Novo estado para controlar o processo de geração
    const qrCodeRef = useRef(); // Referência para o componente QRCode

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

    // Função para gerar o PDF
    const generatePDF = async () => {
        setIsGeneratingPDF(true); // Ativar o estado de geração
        const htmlContent = 
            `<html>
                <head>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            padding: 20px; 
                            background-color: #f5f5f5; 
                            color: #333; 
                        }
                        h1 { 
                            color: #000; 
                            font-size: 28px; 
                            margin-bottom: 20px; 
                        }
                        h2 { 
                            color: #444; 
                            font-size: 24px; 
                            margin-top: 30px; 
                            margin-bottom: 15px; 
                        }
                        p { 
                            font-size: 16px; 
                            color: #555; 
                        }
                        .item { 
                            font-weight: bold; 
                            margin-top: 20px; 
                            color: #222; 
                        }
                        .registro { 
                            margin-top: 10px; 
                            padding: 10px; 
                            background-color: #fff; 
                            border-left: 4px solid #888; 
                            color: #666; 
                            list-style-type: none; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        }
                        ul { 
                            padding-left: 0; 
                        }
                    </style>
                </head>
                <body>
                    <h1>Relatório de Utilização do Utensílio</h1>
                    <p><span class="item">Item:</span> ${utensilio.name}</p>
                    <h2>Atividades Recentes</h2>
                    <ul>
                        ${registros.map(item => 
                            `<li class="registro">${item.descriptionUso} - ${item.responsavelUso}, ${formatDate(item.dataUso)}</li>`
                        ).join('')}
                    </ul>
                </body>
            </html>`
        ;

        try {
            // Gerar o PDF com o conteúdo HTML
            const { uri } = await printToFileAsync({ html: htmlContent });
            console.log('PDF gerado com sucesso:', uri);

            // Compartilhar o PDF
            await shareAsync(uri);

        } catch (error) {
            console.error('Erro ao gerar o PDF:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao gerar o PDF.');
        } finally {
            setIsGeneratingPDF(false); // Finalizar o estado de geração
        }
    };

    // Função para baixar o QR Code
    const downloadQRCode = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Permissão para acessar a galeria é necessária para salvar o QR Code.');
            return;
        }

        try {
            // Captura a imagem do QR Code
            const uri = await qrCodeRef.current.capture();
            console.log('URI da imagem capturada:', uri);

            // Salva a imagem na galeria
            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert('Sucesso', 'QR Code salvo na galeria.');
        } catch (error) {
            console.error('Erro ao baixar o QR Code:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o QR Code.');
        }
    };

    // Função para exibir o Alert de confirmação
    const handleQRCodePress = () => {
        Alert.alert(
            "Download do QR Code",
            "Deseja fazer o download do QR Code?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { 
                    text: "Sim", 
                    onPress: downloadQRCode 
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.item}>Item</Text>
                <Text style={styles.itemNome}>{utensilio.name}</Text> 
            
                <View style={styles.qrContainer}>
                    {utensilio.qrCode ? (
                        <TouchableOpacity onPress={handleQRCodePress}>
                            <ViewShot ref={qrCodeRef} options={{ format: 'png', quality: 1 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 110 }}>
                                    <QRCode value={utensilio.qrCode} size={110} />
                                    <Text 
                                        style={{
                                            marginTop: 0.5,
                                            fontSize: 10,
                                            color: '#FFF',
                                            textAlign: 'center',  // Garante que o texto fique centralizado
                                            width: '100%',         // Garante que a largura do texto seja a mesma do QR Code
                                            flexWrap: 'wrap'       // Permite a quebra de linha
                                        }}
                                    >
                                        {utensilio.name}
                                    </Text>
                                </View>
                            </ViewShot>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.alertText}>QR Code não disponível</Text>
                    )}
                </View>
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
                    <Text style={styles.label}>
                        {`${item.descriptionUso} - ${item.responsavelUso}, ${formatDate(item.dataUso)}`}
                    </Text>
                )}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, isGeneratingPDF && { backgroundColor: '#ccc' }]} // Mudando a cor durante o processamento
                    onPress={generatePDF}
                    disabled={isGeneratingPDF}> 
                    {isGeneratingPDF ? (
                        <ActivityIndicator size="small" color="#fff" /> // Indicador de carregamento
                    ) : (
                        <Text style={styles.buttonText}>Gerar Relatório</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}