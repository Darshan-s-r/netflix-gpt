import { useEffect } from "react";
import {url_popular, Api_options} from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../reduxStore/moviesListSlice";

export default function usePopularMovies () {
  const popularMovies = useSelector(store => store.moviesList.popularMovies)

  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchPopularMovies = async ()=>{
        try{
          const nowPlayingMovies = await fetch(url_popular, Api_options);
          const result = await nowPlayingMovies.json()
          dispatch(addPopularMovies(result.results));
        }catch(err){
          console.log("popular movies fetch error ", err)
        }
      }
      if(!popularMovies || popularMovies.length === 0){
        fetchPopularMovies()
      }
    
  }, [dispatch, popularMovies])
    
}
