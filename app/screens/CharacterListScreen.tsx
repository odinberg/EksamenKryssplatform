import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CharacterList from '../components/CharacterList'
import randomPageId from '../components/RandomId/RandomPageId'

export default function CharacterListScreen() {
    return (
        <View style={styles.container}>

            <CharacterList pageId={randomPageId()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    }
})
