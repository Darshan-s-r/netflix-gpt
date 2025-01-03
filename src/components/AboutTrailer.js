import React from 'react'

export default function AboutTrailer({trailerInfo}) {
  return (
    <div className='w-screen aspect-video text-white pl-7 mt-12 md:mt-36 '>
      <h1 className='md:text-6xl text-3xl md:pb-5'>{trailerInfo.original_title.toUpperCase()}</h1>
      <p className='text-md w-1/3 hidden md:block'>{trailerInfo.overview}</p>
   </div>
  )
}
