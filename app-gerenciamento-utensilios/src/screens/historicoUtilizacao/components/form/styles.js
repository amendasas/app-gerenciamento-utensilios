import { StyleSheet } from 'react-native';
import Color from "./../../../../components/colors";

const styles = StyleSheet.create({
    atividadesRecentes: {
        color: '#A0A0A0',
        fontSize: 18,
        paddingBottom: "2%",
    },
    button: {
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
        paddingVertical: 15,
        width: '100%',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '7%',
        paddingVertical: '3%',
        width: '100%',
    },
    buttonText: {
        color: Color.white, 
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        width: "100%",
    },
    item: {
        color: Color.link,
        textAlign: 'center', // Centraliza o texto
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: '5%',
        maxWidth: '90%', 
        alignSelf: 'center',
    },
    itemContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: "5%",
    },
    itemNome: {
        textAlign: 'center', // Centraliza o texto
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: '5%',
        paddingBottom: "1%",
        flexWrap: 'wrap', // Permite a quebra de linha
        maxWidth: '90%', 
        alignSelf: 'center',
    },
    
    label: {
        alignSelf: "flex-start",
        color: Color.gray,
        fontSize: 16,
        paddingHorizontal: "5%",
        paddingVertical: "1%",
    },
    qrContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 2,
        paddingHorizontal: '5%',
        maxWidth: '90%', 
        alignSelf: 'center',
    },    
    
});

export default styles;