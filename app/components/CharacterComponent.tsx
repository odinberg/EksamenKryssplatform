import React, { useEffect } from 'react'
import { StyleSheet, Text, Image,  SafeAreaView } from 'react-native'
import RandMApi, {Character} from '../api/RandMApi'
import useApi from '../hooks/useApi'
import CustomButton from './CustomButton'
import randomCharacterId from './RandomId/RandomCharacterId'

type Props = {character: number}

export default function CharacterComponent({character}: Props) {

    

const {data: characterData, error, loading, request: getCharacter} = useApi<Character>(RandMApi.getCharacter)
    useEffect(() => {
        getCharacter(character)
    }, [character])

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.name}>
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

            <CustomButton title={'Random character'} onPress={()=> getCharacter(randomCharacterId())}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        // justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
