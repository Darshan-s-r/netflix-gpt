import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'
export default function SecondaryContainer() {
  const nowPlayingMovies = useSelector(store => store.moviesList.nowPlayingMovies)
  const popularMovies = useSelector(store => store.moviesList.popularMovies)
  const topRatedMovies = useSelector(store => store.moviesList.topRatedMovies)
  const upComingMovies = useSelector(store => store.moviesList.upComingMovies)

  return (
    <div className='-mt-20 md:-mt-60 '>
        <MoviesList title="Now Playing" moviesList={nowPlayingMovies} />
        <MoviesList title="Popular" moviesList={popularMovies} />
        <MoviesList title="Top Rated" moviesList={topRatedMovies} />
        <MoviesList title="Up Coming" moviesList={upComingMovies} />

    </div>
  )
}
