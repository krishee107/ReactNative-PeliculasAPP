import React, { useState } from 'react'
import { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MoveDBNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MoveDBNowPlaying>('/now_playing')
        setPeliculasEnCine(resp.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        //Now playing
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        isLoading
    }
}

