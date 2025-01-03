import { useEffect } from "react";
import {url_nowplaying, Api_options} from "../utils/constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../reduxStore/moviesListSlice";

export default function useNowPlayingMovies () {
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
      fetchNowplayingMovies()
  }, [dispatch])
    
}
