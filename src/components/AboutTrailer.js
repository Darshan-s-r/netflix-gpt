import React from 'react'

export default function AboutTrailer({trailerInfo}) {
  return (
    <div className='absolute -mt-32 md:-mt-[45%] pl-8'>
      <h1 className='md:text-6xl text-lg pb-5'>{trailerInfo.original_title.toUpperCase()}</h1>
      <p className='text-md w-1/3 hidden lg:block'>{trailerInfo.overview}</p>
   </div>
  )
}
