import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
    },
    itemContainer:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: "7%",
    },
    item:{
        color: '#A9A9A9',
        fontSize: 20
    },
    itemNome:{
        color: '#000',
        fontSize: 40,
        fontWeight: "bold"
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '7%',
        paddingVertical: '7%',
        width: '100%',
    },
    button: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;