import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CharacterComponent from '../components/CharacterComponent'
import randomCharacterId from '../components/RandomId/RandomCharacterId'

export default function CharacterScreen() {
    return (
        <View style={styles.container}>
            <CharacterComponent character={randomCharacterId()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
