import { useEffect } from "react";
import { url_upcoming, Api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../reduxStore/moviesListSlice";
export default function useUpComingMovies() {
  const upComingMovies = useSelector(store => store.moviesList.upComingMovies)

  const dispatch = useDispatch()
  useEffect(()=>{
      const fetchUpComingMovies = async ()=>{
        const data = await fetch(url_upcoming, Api_options)
        const result = await data.json();
        dispatch(addUpComingMovies(result.results))
      }
      if(!upComingMovies || upComingMovies.length === 0){
        fetchUpComingMovies()
      }
  },[dispatch, upComingMovies])
}
