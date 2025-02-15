import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
    },
    titleContainer: {
        alignItems: "center", 
        alignSelf: "center",
        marginBottom: "3%"
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    setaContainer:{
        paddingLeft: '4%',
        paddingTop: '6%',
    }
});

export default styles;