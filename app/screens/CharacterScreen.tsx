import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CharacterComponent from '../components/CharacterComponent'

export default function CharacterScreen() {
    return (
        <View style={styles.container}>
            <CharacterComponent characterId={2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})
