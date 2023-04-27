import { useEffect, useState } from "react"
import { MovieFull } from "../interfaces/movieInterface"
import movieDB from "../api/movieDB"

interface MovieDetails {
    cast: any[],
    isLoading: boolean,
    movieFull?: MovieFull
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>()

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = async () => {
        const resp = await movieDB.get<MovieDetails>(`/${movieId}`)

    }

    return {
        state
    }
}
