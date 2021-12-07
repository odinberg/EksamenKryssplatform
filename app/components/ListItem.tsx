import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

type Props = {
    title: string;
    subtitle: string;    
}


export default function ListItem({title, subtitle}: Props) {

    return (
        <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})
