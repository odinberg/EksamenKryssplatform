import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native'
import RandMApi, {AllCharacters, Character} from '../api/RandMApi'
import useApi from '../hooks/useApi'

type Props = {characterId: []}

export default function CharacterList({characterId}: Props) {

    

const {data: character, error, loading, request: getAllCharacters} = useApi<AllCharacters>(RandMApi.getAllCharacters)
    useEffect(() => {
        getAllCharacters(10, 100)
        
    }, [characterId])
    

    return (
        <SafeAreaView style={styles.container}>
            <Text> {character?.results.name}</Text>

{/*             

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
            }} /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        width: 200,
        height: 200,
    }
})
