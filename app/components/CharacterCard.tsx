import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { AllCharacters} from '../api/RandMApi'

type Props = {character: AllCharacters}

export default function CharacterCard({character}: Props) {
    return (
        <SafeAreaView>
            <Text>{character.results.name}</Text>
            <Image source={{
                uri: character?.results.image,
                width: 300,
                height: 300,
            }} />
            <Text>Det funka</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
