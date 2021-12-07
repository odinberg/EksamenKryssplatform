import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Sprite from './Sprite'

type Props = {
    title: string;
    subtitle: string;
    imageUri?: string;    
}


export default function ListItem({title, subtitle, imageUri}: Props) {

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <View>
            {imageUri && <Sprite uri={imageUri} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        margin: 10,
        flex: 1,
        flexDirection: "column",
    },
    image: {
        borderWidth: 2,
    }
})
