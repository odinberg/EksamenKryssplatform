import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

type Props = {
    onPress?: ((event: GestureResponderEvent) => void);
    title: string;

}

export default function CustomButton({onPress, title}: Props) {
    return (
        <TouchableHighlight onPress={onPress} style={styles.container}>
        <View>
            <Text>{title}</Text>
        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 80,
        backgroundColor: "#8080ff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 10,
    }
})
