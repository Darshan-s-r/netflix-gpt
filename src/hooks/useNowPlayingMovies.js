import { useEffect } from "react";
import {url_nowplaying, Api_options} from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../reduxStore/moviesListSlice";

export default function useNowPlayingMovies () {
  const nowPlayingMovies = useSelector(store => store.moviesList.nowPlayingMovies)

  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchNowplayingMovies = async ()=>{
        try{
          const nowPlayingMovies = await fetch(url_nowplaying, Api_options);
          const result = await nowPlayingMovies.json()
          dispatch(addNowPlayingMovies(result.results));
        }catch(err){
          console.log("now playing movies fetch error ", err)
        }
      }
      if(!nowPlayingMovies || nowPlayingMovies.length === 0){
        fetchNowplayingMovies()
      }
     
  }, [dispatch, nowPlayingMovies])
    
}
