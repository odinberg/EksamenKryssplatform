// import React, { useEffect } from 'react'
// import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
// import RandMApi, {AllCharacters, Character} from '../api/RandMApi'
// import useApi from '../hooks/useApi'

// type Props = {pageId: number}

// export default function CharacterList({pageId}: Props) {

    

// const {data: character, error, loading, request: getAllCharacters} = useApi<AllCharacters>(RandMApi.getAllCharacters)
//     useEffect(() => {
//         getAllCharacters(pageId)
        
//     }, [pageId])
    

//     const renderCharacter = () => {
//         return(
//             <View>
//                 <Text> {character?.results.name}</Text>
//             </View>
//         )
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList 
//                 data={character?.results}
//                 renderItem={renderCharacter}
//                 keyExtractor={(item) => `key-${item.id}`}
//                 />
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "grey",
//         width: 200,
//         height: 200,
//         borderWidth: 2,
// // 
//     }
// })

import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
import RandMApi, {AllCharacters, Character} from '../api/RandMApi'
import useApi from '../hooks/useApi'

