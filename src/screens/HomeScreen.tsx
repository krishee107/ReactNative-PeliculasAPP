
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDB from '../api/movieDB'

export const HomeScreen = () => {
    //https://api.themoviedb.org/3/movie/now_playing?api_key=94376f04c6d275c4241ffcb07d651fc4&language=es-ES&page=1
    useEffect(() => {
        movieDB.get('/now_playing')
            .then(resp => {
                console.log(resp.data)
            })
    }, [])



    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
