import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    adicionadosRecentementeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 6,
        marginHorizontal: '11%', 
    },
    adicionadosRecentemente: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4d4c4c',
    },
    sortButtonContainer: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: 42,
        height: 42,
    },
    sortButton: {
        fontSize: 24,
        color: 'white',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#EAEAEA',
        paddingVertical: 12,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12, // Espaço entre os botões
    },
    modalButtonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#CCCCCC',
    },
    itemContainer: {
        backgroundColor: "#EAEAEA",
        borderRadius: 10,
        marginBottom: '3%',
        marginHorizontal: '11%',
        paddingHorizontal: 15,
        paddingVertical: 16,
        alignSelf: 'center', 
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
    },
    itemText: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 22
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    searchBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 999,
        position: 'absolute',
        bottom: 25,
        width: '85%',  // Ajuste para responsividade
        height: 45,     // Melhor altura para input
        alignSelf: 'center',
    },
    searchBar: {
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 20,
        paddingVertical: 12,
        width: '80%',
    },
});

export default styles;
