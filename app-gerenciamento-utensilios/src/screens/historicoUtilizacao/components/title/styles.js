import { StyleSheet } from "react-native";
import Color from "./../../../../components/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
    },
    setaContainer: {
        paddingLeft: "4%",
        paddingTop: "6%",
    },
    titleContainer: {
        alignItems: "center",
        alignSelf: "center",
        marginBottom: "3%",
    },
    titleText: {
        color: Color.white,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default styles;