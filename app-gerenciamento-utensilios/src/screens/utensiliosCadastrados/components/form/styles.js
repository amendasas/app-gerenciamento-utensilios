import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    adicionadosRecentementeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: "7%"

    },
    adicionadosRecentemente: {
        fontSize: 20,
        fontWeight: "bold"
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
    listContainer: {
        flex: 1
    },
    searchBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 999,
        marginHorizontal: "8%",
        marginBottom: "3%",

    },
    searchBar: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,     
        lineHeight: 22,
        width: '100%', 
    }
});

export default styles;