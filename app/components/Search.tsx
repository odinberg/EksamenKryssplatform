import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import RandMApi, { AllCharacters } from '../api/RandMApi'
import useApi from '../hooks/useApi'
import CustomButton from './CustomButton'

type Props ={
    name: string;
    updateSearch: undefined;
    style: string;
}


export default function Search() {
    const [search, setSearch] = useState("")


        const {data, loading, error, request: getCharacterSearch} = useApi<AllCharacters>(RandMApi.getCharacterSearch)
    

        useEffect(() => {
            getCharacterSearch(search)
        }, [search])


        return (
        <View style={styles.container}>
            <TextInput>
            <Text>Search</Text>
            </TextInput>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30, 
        backgroundColor: "#fff",
        borderWidth: 2,
        flexDirection: "row",
    }
})
