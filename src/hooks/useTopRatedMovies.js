import { useEffect } from "react";
import {url_top_rated, Api_options} from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../reduxStore/moviesListSlice";

export default function useTopRatedMovies () {
  const topRatedMovies = useSelector(store => store.moviesList.topRatedMovies)

  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchTopRatedMovies = async ()=>{
        try{
          const nowPlayingMovies = await fetch(url_top_rated, Api_options);
          const result = await nowPlayingMovies.json()
          dispatch(addTopRatedMovies(result.results));
        }catch(err){
          console.log("Top rated movies fetch error ", err)
        }
      }
      if(!topRatedMovies || topRatedMovies.length === 0){
        fetchTopRatedMovies()

      }
  }, [dispatch, topRatedMovies])
    
}
