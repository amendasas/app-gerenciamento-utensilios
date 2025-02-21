import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Modal, Alert, Text, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

export default function LeitorQRCode() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [permission, requestPermission] = useCameraPermissions();
    const navigation = useNavigation();

    useEffect(() => {
        async function checkPermission() {
            if (!permission?.granted) {
                const { granted } = await requestPermission();
                if (!granted) {
                    Alert.alert("Permissão Negada", "É necessário conceder acesso à câmera.");
                    navigation.goBack();
                }
            }
        }
        checkPermission();
    }, []);

    async function handleQRCodeRead(data) {
        try {
            const qrData = JSON.parse(data);
            if (!qrData.name) {
                throw new Error("QR Code inválido: nome do utensílio não encontrado.");
            }
    
            const response = await fetch(':3000/utensilios/${encodeURIComponent(qrData.name)}');
            if (!response.ok) {
                throw new Error("Utensílio não encontrado.");
            }
    
            const item = await response.json();
            setModalIsVisible(false);
            navigation.navigate("HistoricoUtilizacao", { utensilio: item });
            
        } catch (error) {
            Alert.alert("Erro", error.message);
        }
    }

    function handleCloseCamera() {
        setModalIsVisible(false);
        navigation.goBack(); 
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <CameraView
                style={{ flex: 1 }}
                facing="back"
                onBarcodeScanned={({ data }) => handleQRCodeRead(data)}
            />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handleCloseCamera}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
    },
    button: {
        backgroundColor: '#fff', 
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        borderRadius: 10, 
        marginBottom: 10, 
        width: '100%', 
        alignItems: 'center', 
    },
    buttonText: {
        color: '#1E1E1E', 
        fontSize: 18, 
        fontWeight: 'bold', 
    },
});
