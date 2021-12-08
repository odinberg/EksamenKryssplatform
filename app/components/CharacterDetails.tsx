import { RouteProp } from '@react-navigation/core'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../navigators/Navigator'

// export type authScreenNavigationType = <RootStackParamList>()



type Props = {
  item: [];
}


export default function CharacterDetails({item}: Props) {

  type detailScreenRouteType = RouteProp<RootStackParamList, "CharacterDetails">

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
