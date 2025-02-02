import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Modal, Alert, Text, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking"; // Import para abrir URLs

export default function LeitorQRCode() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [permission, requestPermission] = useCameraPermissions();
    const qrCodeLock = useRef(false);
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

    function handleQRCodeRead(data) {
        if (!qrCodeLock.current) {
            qrCodeLock.current = true;
            setModalIsVisible(false);

            if (data.startsWith("http://") || data.startsWith("https://")) {
                // Se for uma URL, abre diretamente no navegador
                Linking.openURL(data).catch(() => {
                    Alert.alert("Erro", "Não foi possível abrir o link.");
                });
            } else {
                // Se não for uma URL, apenas exibe um alerta
                Alert.alert("QR Code Lido", data, [
                    { text: "OK", onPress: () => navigation.goBack() }
                ]);
            }
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
