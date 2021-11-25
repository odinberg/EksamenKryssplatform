import React from 'react';
import { StyleSheet} from 'react-native';
import {  NavigationContainer } from "@react-navigation/native"
import LoginNavigator from './app/navigators/LoginNavigator';



export default function App() {

  return (
    <NavigationContainer>
      <LoginNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
