import { useEffect, useState } from "react"
import { MovieFull } from "../interfaces/movieInterface"
import movieDB from "../api/movieDB"
import { Cast, CreditsResponse } from "../interfaces/creditsInterface"

interface MovieDetails {
    cast: Cast[],
    isLoading: boolean,
    movieFull?: MovieFull
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp, castResp] = await Promise.all([movieDetailsPromise, castPromise]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castResp.data.cast
        })
    }

    return {
        ...state
    }
}
