import { StyleSheet } from 'react-native';
import Color from "./../../../../components/colors";

const styles = StyleSheet.create({
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
        paddingVertical: '7%',
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
        fontSize: 20,
    },
    itemContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: "7%",
    },
    itemNome: {
        color: Color.black,
        fontSize: 40,
        fontWeight: "bold",
    },
});

export default styles;