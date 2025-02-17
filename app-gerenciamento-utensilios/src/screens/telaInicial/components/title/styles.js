import { StyleSheet } from 'react-native';
import Color from './../../../../components/colors';

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Color.white,
        textAlign: 'center',
        marginTop: 50,
    },
});

export default styles;