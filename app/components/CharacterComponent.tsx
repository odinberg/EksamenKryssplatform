import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native'
import RandMApi, {Character} from '../api/RandMApi'
import useApi from '../hooks/useApi'

type Props = {character: number}

export default function CharacterComponent({character}: Props) {

    

const {data: characterData, error, loading, request: getCharacter} = useApi<Character>(RandMApi.getCharacter)
    useEffect(() => {
        getCharacter(character)
    }, [character])


    

    return (
        <SafeAreaView style={styles.container}>


            <Text>
                {characterData?.name}
            </Text>
            <Text>
                {characterData?.gender}
            </Text>
            <Text>
                {characterData?.species}
            </Text>
            <Text>
                {characterData?.status}
            </Text>
            <Image source={{
                uri: characterData?.image,
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
