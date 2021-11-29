import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EpisodesComponent from '../components/EpisodesComponent'
import RandomId from '../components/RandomId/RandomCharacterId'
import randomEpisodeId from '../components/RandomId/RandomEpisodeId'

export default function EpisodesScreen() {
    return (
        <View style={styles.container}>
                <EpisodesComponent episodeId={randomEpisodeId()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
