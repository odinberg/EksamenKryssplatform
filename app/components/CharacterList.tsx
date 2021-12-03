import React, { useEffect } from 'react'
 import { StyleSheet, SafeAreaView, FlatList, View} from 'react-native'
 import RandMApi, {AllCharacters, Character} from '../api/RandMApi'
 import useApi from '../hooks/useApi'
import CharacterCard from './CharacterCard'

 type Props = {pageId: number}

export default function CharacterList({pageId}: Props) {

    

const {data: page, error, loading, request: getAllCharacters} = useApi<AllCharacters>(RandMApi.getAllCharacters)
    useEffect(() => {
        getAllCharacters(pageId)
        console.log(page?.results.name);
        
     }, [pageId])
    

   return (
        <SafeAreaView style={styles.container}>
           <View>
                {page?.results.name}
           </View>
        </SafeAreaView>
   )
 }

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
       justifyContent: "center",
        backgroundColor: "grey",
        width: 200,
         height: 200,
         borderWidth: 2,
 
   }
 })

