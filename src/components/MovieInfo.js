import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {url_TMDB_CDN, url_TMDB_BACKDROP_CDN } from '../utils/constants'
import { setNowPlayingVideo, setPlayVideo } from '../reduxStore/movieDetailSlice'
import VideoPlayer from './VideoPlayer'
export default function MovieInfo() {
  const dispatch = useDispatch()
  const movieInfo = useSelector(store => store.movieDetail.movieInfo)
  const movieVideos = useSelector(store=> store.movieDetail.movieVideos)
  const playVideo = useSelector(store=> store.movieDetail.playVideo)

  const hrs = Math.floor(movieInfo?.runtime/60);
  const min = Math.floor(movieInfo?.runtime%60);

  const handlePlayTrailer = (e)=>{
    e.preventDefault();
    if(movieVideos?.trailer){
      dispatch(setNowPlayingVideo(movieVideos?.trailer[0]?.key))
      dispatch(setPlayVideo(!playVideo))
    }

  }
  if(!movieInfo){
    return <div className='mt-[25%] ml-[45%]'>Loading..........</div>
  }
  return (
    <div className='text-white text-md md:text-xl'>
      <VideoPlayer />
      <div className=''>
      <img className='bg-black opacity-50 w-screen h-full mt-20 object-fill' src={url_TMDB_BACKDROP_CDN+movieInfo?.backdrop_path} alt='backdrop'></img>

      <div className='absolute ml-[35%] mr-[4%] md:top-[18%] sm:top-[16%] top-[14%]'>
        <h1 className='font-bold text-xl md:text-3xl'>{movieInfo?.title}</h1>
        <div className='flex'>
        <p className='p-2 pl-0'>{movieInfo?.release_date}</p>
        {
          movieInfo?.genres.map(genre=><p className='p-2' key={genre.name}>{genre.name} </p>)
        }
        <p className='p-2'>{hrs}h {min}m</p>
        </div>
        <div className='flex'>
        <p className='p-2 pl-0'>Rating : {movieInfo?.vote_average}</p>
        <p className='p-2 pl-0'>vote count : {movieInfo?.vote_count}</p>
        </div>
        <button onClick={handlePlayTrailer} className='bg-blue-700 m-2 ml-0 rounded-lg px-2 py-2'>Play trailer</button>
        <p className='p-2 pl-0 font-semibold'>{movieInfo?.tagline}</p>
        <h2 className='p-2 pl-0 font-bold hidden lg:block'>Overview</h2>
        <p className='hidden lg:block'>{movieInfo?.overview}</p>

      </div>
      </div>
      <img className='absolute md:top-[18%] sm:top-[16%] top-[14%] px-[4%] w-[32%] object-cover rounded-lg' src={url_TMDB_CDN+movieInfo?.poster_path} alt='poster'></img>
      <div className='flex flex-wrap gap-10 my-10 mx-10'>
      <div>
          <p className='pb-2 font-bold'>Original Title</p>
          <p>{movieInfo?.original_title}</p>
        </div>
        <div>
          <p className='pb-2 font-bold'>Status</p>
          <p>{movieInfo?.status}</p>
        </div>
        <div>
          <p className='pb-2 font-bold'>Original Language</p>
          <p>{movieInfo?.original_language}</p>
        </div>
        <div>
          <p className='pb-2 font-bold'>Budget</p>
          <p>{movieInfo?.budget}</p>
        </div>
        <div>
          <p className='pb-2 font-bold'>Revenue</p>
          <p>{movieInfo?.revenue}</p>
        </div>
      </div>
    </div>
  )
}
