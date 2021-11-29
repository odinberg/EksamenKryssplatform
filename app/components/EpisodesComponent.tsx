import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RandMApi, { Episode } from '../api/RandMApi'
import useApi from '../hooks/useApi'

type Props = {episodeId: number}

export default function EpisodesComponent({episodeId}: Props) {

const {data: episode, error, loading, request: getEpisode} = useApi<Episode>(RandMApi.getEpisode)
    useEffect(() => {
        getEpisode(episodeId)
    }, [episodeId])


    return (
        <View>
            <Text> {episode?.name} </Text>
            <Text> {episode?.episode} </Text>
            <Text> {episode?.air_date} </Text>
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
