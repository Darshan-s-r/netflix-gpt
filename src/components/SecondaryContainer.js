import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'
export default function SecondaryContainer() {
  const nowPlayingMovies = useSelector(store => store.moviesList.nowPlayingMovies)

  return (
    <div>
        <MoviesList title="Now Playing" moviesList={nowPlayingMovies} />
    </div>
  )
}
