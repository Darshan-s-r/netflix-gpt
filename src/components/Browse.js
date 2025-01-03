import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';


export default function Browse() {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  useNowPlayingMovies();
  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  console.log("body")
  return (
    <div className='bg-black text-white'>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  )
}
