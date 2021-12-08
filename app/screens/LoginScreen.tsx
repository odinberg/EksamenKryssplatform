import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { RootLoginParamList } from '../navigators/LoginNavigator'

export default function LoginScreen({navigation}: NativeStackScreenProps<RootLoginParamList>) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/RAMLogo.png")} style={styles.logo}/>
            <CustomButton title={"Go to app"} onPress={() => navigation.navigate("Authenticated", {user: "",})}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 100,
        width: 300,
    }
})
