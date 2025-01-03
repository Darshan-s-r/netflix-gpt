import React from 'react'
import Trailer from './Trailer'
import { useSelector } from 'react-redux';
import AboutTrailer from './AboutTrailer'

export default function PrimaryContainer() {
  const nowPlayingMovies = useSelector(store => store.moviesList.nowPlayingMovies)
  if(!nowPlayingMovies || nowPlayingMovies.length === 0){
    return null
  }
  const {id, original_title, overview} = nowPlayingMovies[0]
  return (
    <div>
    <Trailer movieId={id} />
<AboutTrailer trailerInfo = {{original_title, overview}}/>
</div>
  )
}
