import React from "react";
import { StyleSheet, View } from "react-native";

import Color from './../../../../components/colors';
import Form from "../form";



export default function Main() {
    return (
        <View style={styles.main}>
            <Form/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        backgroundColor: Color.white,
        borderTopRightRadius: 50,
        flex: 3,
        justifyContent: "flex-start",
    },
});