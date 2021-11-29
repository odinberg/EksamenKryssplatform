import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootLoginParamList } from '../navigators/LoginNavigator'

export default function LoginScreen({navigation}: NativeStackScreenProps<RootLoginParamList>) {
    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
            <Button title="Login" onPress={() => navigation.navigate("Authenticated", {username: "Odin Sil",})}></Button>
            <Button title="Register" onPress={() => console.warn("Register")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})
