import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

type Props = {
    uri: string
}


export default function Sprite({uri}: Props) {
    return (
        <Image source={{uri, width: 100, height: 100, }}/>
    )
}

const styles = StyleSheet.create({})
