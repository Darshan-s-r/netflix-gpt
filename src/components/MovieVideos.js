import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

export default function MovieVideos() {
  const [videoSection, setVideoSection] = useState("trailer")
  const movieVideos = useSelector(store=> store.movieDetail.movieVideos || {})

  const handleTrailer = (e)=>{
    e.preventDefault()
    setVideoSection("trailer")
  }

  const handleTeaser = (e)=>{
    e.preventDefault()
    setVideoSection("teaser")
  }

  const handleOthers = (e)=>{
    e.preventDefault()
    setVideoSection("others")
  }
  return (
    <div className='md:m-20 m-10'>
      <div className='flex justify-between ml-[20%] mr-[20%]'>
        <button onClick={handleTrailer} className={`hover:text-sky-200 ${videoSection === "trailer" ? 'text-sky-300' : null}`}>Trailer</button>
        <button onClick={handleTeaser} className={`hover:text-sky-200 ${videoSection === "teaser" ? 'text-sky-300' : null}`}>Teaser</button>
        <button onClick={handleOthers} className={`hover:text-sky-200 ${videoSection === "others" ? 'text-sky-300' : null}`}>Others</button>
      </div>
      <div className='flex whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
      {movieVideos[videoSection] && Array.isArray(movieVideos[videoSection]) ? (
          movieVideos[videoSection].map((video) => <VideoCard key={video.key} video={video} />)
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  )
}
