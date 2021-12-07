import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
 import { StyleSheet, SafeAreaView, FlatList, View, Text} from 'react-native'
 import RandMApi, {AllCharacters, Character} from '../api/RandMApi'
 import useApi from '../hooks/useApi'
import CharacterCard from './CharacterCard'
import ListItem from './ListItem'

 type Props = {page: number}

export default function CharacterList({page}: Props) {
  
      

const {data, error, loading, request: getPage} = useApi<AllCharacters>(RandMApi.getAllCharacters)
useEffect(() => {
    getPage(page)
}, [page])

  

   return (

      <SafeAreaView>
        <View>
          <FlatList
            data={data?.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                subtitle={item.species}
                // onPress={() => console.log("Jeg ble tryket på")}
              />
            )}
          />
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

