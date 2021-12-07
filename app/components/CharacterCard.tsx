import React from 'react'
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import { Character} from '../api/RandMApi'

type Props = {character: Character}

export default function CharacterCard({character}: Props) {
    return (
        <SafeAreaView style={[styles.row, styles.container]}>
            
            <Text style={[styles.text, styles.title]}>{character.name}</Text>
            <Text style={[styles.text]}>{character.gender}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: { flexDirection: "row" },
    container: { margin: 10 },
    title: { fontWeight: "600" },
    text: {
      color: "gray",
      textTransform: "capitalize",
      marginLeft: 10,
      fontSize: 16,
    },
})
