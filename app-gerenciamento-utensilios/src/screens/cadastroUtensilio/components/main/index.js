import React from "react";
import { StyleSheet, View } from "react-native";

import Form from "../form";
import Color from './../../../../components/colors';



export default function Main() {
    return (
        <View style={styles.main}>
            <Form/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        backgroundColor: Color.white,
        borderTopRightRadius: 50,
        flex: 3,
        justifyContent: 'flex-start',
    },
});