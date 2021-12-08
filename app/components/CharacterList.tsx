import { NavigationProp, useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, Text} from 'react-native'
import RandMApi, {AllCharacters} from '../api/RandMApi'
import useApi from '../hooks/useApi'
import { RootStackParamList } from '../navigators/Navigator'
import CustomButton from './CustomButton'
import ItemListSeperator from './ItemListSeperator'
import ListItem from './ListItem'
import randomPageId from './RandomId/RandomPageId'

  
export default function CharacterList() {
  const [pageCount, setPageCount] = useState(Number)
  const {data, error, loading, request: getPage} = useApi<AllCharacters>(RandMApi.getAllCharacters)
  
  useEffect(() => {
      
      getPage(pageCount)
  }, [pageCount])

  
  
   return (

      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={data?.results}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => ItemListSeperator()}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                subtitle={item.gender}
                imageUri={item.image}
                status={item.status}
                species={item.species}
                episode={item.episode.length}
              />
            )}
          />
           <View style={styles.buttonContainer}>
            <CustomButton title={'Prev page'} onPress={()=> getPage(setPageCount(pageCount - 1))}/>
            <Text> Page: {pageCount} </Text>
            <CustomButton title={'Next page'} onPress={()=> getPage(setPageCount(pageCount + 1))}/>
            <CustomButton title={'Random page'} onPress={()=> getPage(setPageCount(randomPageId()))}/>
          </View>
        </View>
      </SafeAreaView>
    )
   }

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
 
   },
   buttonContainer: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center",
     height: 60,
     borderTopWidth: 1,
   },
 })

