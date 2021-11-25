import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native'
import RandMApi, {Character} from '../api/RandMApi'
import useApi from '../hooks/useApi'

type Props = {characterId: number}

export default function CharacterComponent({characterId}: Props) {

    

const {data: character, error, loading, request: getCharacter} = useApi<Character>(RandMApi.getCharacter)
    useEffect(() => {
        getCharacter(characterId)
    }, [characterId])


    

    return (
        <SafeAreaView style={styles.container}>


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
    container: {
        backgroundColor: "red",
    }
})
