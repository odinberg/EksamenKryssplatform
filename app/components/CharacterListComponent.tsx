import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

type Props = {
    characterId: number
}

export default function CharacterListComponent({characterId}: Props) {
    return (
        <SafeAreaView>
        <Text>
        {character?.name}
    </Text>
    <Text>
        {character?.gender}
    </Text>
    <Text>
        {character?.species}
    </Text>
    <Text>
        {character?.status}
    </Text>
    <Image source={{
        uri: character?.image,
        width: 300,
        height: 300,
    }} />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})
