import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptPage from './GptPage';

export default function Browse() {
  const user = useSelector(store => store.user.user)
  const browsePage = useSelector(store => store.user.browsePage)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  
  return (
    <div className='text-white bg-black'>
      <Header />
      {
        browsePage ? 
        <>
        <PrimaryContainer />
        <SecondaryContainer />
        </>
        : <GptPage />
      }
      <Outlet />
    </div>
  )
}
