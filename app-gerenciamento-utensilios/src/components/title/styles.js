import { StyleSheet } from 'react-native';
import Color from './../colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
    },
    setaContainer: {
        paddingLeft: '4%',
        paddingTop: '6%',
    },
    titleContainer: {
        alignItems: "flex-start",
        alignSelf: "center",
        marginBottom: "3%",
    },
    titleSubText: {
        color: Color.white,
        fontSize: 15,
    },
    titleText: {
        color: Color.white,
        fontSize: 34,
        fontWeight: 'bold',
    },
});

export default styles;