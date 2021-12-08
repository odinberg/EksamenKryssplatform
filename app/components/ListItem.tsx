import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, GestureResponderEvent, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Sprite from './Sprite'

type Props = {
    title: string;
    subtitle: string;
    status: string;
    species: string;
    imageUri?: string;
    episode: number;    
    onPress?: ((event: GestureResponderEvent) => void);
}


export default function ListItem({title, subtitle, imageUri, status, species, episode, onPress}: Props) {

    return (
        <TouchableHighlight onPress={onPress} underlayColor={"#ddd"}>
        <View style={styles.container}>
            <Text>Name: {title}</Text>
            <Text>Gender: {subtitle}</Text>
            <Text>Status: {status}</Text>
            <Text>Species: {species}</Text>
            <Text>Appears in episodes: {episode}</Text>
            <View style={styles.image}>
            {imageUri && <Sprite uri={imageUri} />}
            </View>
        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-around",
    },
    image: {
        borderWidth: 1,
        marginLeft: 269,
        marginTop: -80,
    },

})
