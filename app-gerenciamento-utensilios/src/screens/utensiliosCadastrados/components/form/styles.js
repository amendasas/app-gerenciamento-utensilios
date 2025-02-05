import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemContainer: {
        backgroundColor: "#EAEAEA",
        padding: 15,
        borderRadius: 10,
        marginBottom: '3%',
        marginHorizontal: '8%',
    },
    itemText: {
        fontSize: 15,
        textAlign: 'justify', // Apenas funciona no Android
        lineHeight: 22
    },
});

export default styles;