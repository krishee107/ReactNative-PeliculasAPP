import React, { useState } from 'react'
import { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMMoviesResponse } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])
    const [peliculasTop, setpeliculasTop] = useState<Movie[]>([])
    const [peliculasUpcoming, setpeliculasUpcoming] = useState<Movie[]>([])

    const getMovies = async () => {
        const respNowPlaying = await movieDB.get<MovieDBMMoviesResponse>('/now_playing')
        const respPopular = await movieDB.get<MovieDBMMoviesResponse>('/popular')
        const respTopRated = await movieDB.get<MovieDBMMoviesResponse>('/top_rated')
        const respUpcoming = await movieDB.get<MovieDBMMoviesResponse>('/upcoming')
        setPeliculasEnCine(respNowPlaying.data.results)
        setPeliculasPopulares(respPopular.data.results)
        setpeliculasTop(respTopRated.data.results)
        setpeliculasUpcoming(respUpcoming.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        //Now playing
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        peliculasPopulares,
        peliculasTop,
        peliculasUpcoming,
        isLoading
    }
}

