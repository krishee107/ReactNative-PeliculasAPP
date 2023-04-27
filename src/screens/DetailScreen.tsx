import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { // any, any = Params, Route
    movie: Movie
}
export const DetailScreen = ({ route }: Props) => {
    const movie = route.params;

    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    )
}
