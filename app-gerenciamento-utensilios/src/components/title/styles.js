import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
    },
    titleContainer: {
        alignItems: "flex-start",
        alignSelf: "center",
        marginBottom: "3%"
    },
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    titleSubText: {
        fontSize: 15,
        color: '#FFFFFF',

    },
    setaContainer:{
        paddingLeft: '4%',
        paddingTop: '6%',

    }
});

export default styles;