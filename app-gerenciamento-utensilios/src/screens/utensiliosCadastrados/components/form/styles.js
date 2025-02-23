import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    adicionadosRecentemente: {
        color: Color.grayEscuro,
        fontSize: 18,
        fontWeight: 'bold',
    },
    adicionadosRecentementeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
        marginHorizontal: '11%',
        marginTop: 8,
    },
    closeButton: {
        backgroundColor: Color.textInput,
    },
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        backgroundColor: Color.grayClaro,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: '3%',
        marginHorizontal: '11%',
        paddingHorizontal: 15,
        paddingVertical: 16,
        width: 320,
    },
    itemText: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'left',
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    modalBackground: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
    },
    modalButton: {
        alignItems: 'center',
        backgroundColor: Color.grayClaro,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 12,
        paddingVertical: 12,
        width: '100%',
    },
    modalButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    searchBar: {
        color: Color.white,
        fontSize: 16,
        lineHeight: 20,
        paddingVertical: 12,
        textAlign: 'center',
        width: '80%',
    },
    searchBarContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 999,
        bottom: 25,
        height: 45,
        justifyContent: 'center',
        position: 'absolute',
        width: '85%',
    },
    sortButtonContainer: {
        alignItems: 'center',
        borderRadius: 8,
        height: 42,
        justifyContent: 'center',
        padding: 8,
        width: 42,
    },
});

export default styles;
