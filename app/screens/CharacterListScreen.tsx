import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CharacterList from '../components/CharacterList'


export default function CharacterListScreen() {

    
    return (
        <View style={styles.container}>
            <CharacterList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})
