import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from "@react-navigation/native"
import { ScreenStack } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharacterScreen from '../screens/CharacterScreen';
import CharacterList from '../components/CharacterList';
import EpisodesScreen from "../screens/EpisodesScreen"

export type RootStackParamList = {
  CharacterScreen: undefined;
  CharacterList: undefined;
  EpisodesScreen: undefined;
}

export default function Navigator() {

  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CharacterScreen" component={CharacterScreen}/>
        <Stack.Screen name="CharacterList" component={CharacterList}/>
        <Stack.Screen name="EpisodesScreen" component={EpisodesScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

