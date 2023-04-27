
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Loading } from '../components/Loading';

export const HomeScreen = () => {
    const { peliculasEnCine, isLoading } = useMovies();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Loading />
            </View>
        )
    }


    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
