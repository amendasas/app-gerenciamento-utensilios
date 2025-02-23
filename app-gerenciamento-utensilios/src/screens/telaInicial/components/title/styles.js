import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        color: Color.white,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
});

export default styles;