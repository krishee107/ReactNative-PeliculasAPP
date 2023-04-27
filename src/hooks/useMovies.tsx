import React, { useState } from 'react'
import { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMMoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MovieDBMMoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MovieDBMMoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MovieDBMMoviesResponse>('/upcoming')

        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);
        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })

        setIsLoading(false)
    }

    useEffect(() => {
        //Now playing
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}

