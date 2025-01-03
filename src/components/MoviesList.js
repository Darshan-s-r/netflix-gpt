import React from 'react'
import MovieCard from './MovieCard'

export default function MoviesList({title, moviesList}) {
  return (
    <div className='pl-10'>
     <h1 className='pb-3 md:text-3xl text-lg'>{title}</h1>
     <div className='flex whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
      {moviesList.map(movie=><MovieCard movie={movie} />)}
     </div>
    </div>
  )
}
