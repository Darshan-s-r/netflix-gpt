import { url_trailerInfo, Api_options } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../reduxStore/moviesListSlice";
import { useEffect } from "react";

export default function useMovieTrailer(movieId) {
  const movieTrailer = useSelector(store => store.moviesList.movieTrailer)

  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchMovieTrailer = async ()=>{
        try{
          const movieTrailer = await fetch(url_trailerInfo+`/${movieId}/videos`, Api_options);
          const result = await movieTrailer.json()
          const trailerInfo = result.results
          const trailers = trailerInfo.filter(trailer=>trailer.type === "Trailer")
          trailers[0] ? 
          dispatch(addMovieTrailer(trailers[0]))
          : dispatch(addMovieTrailer(trailerInfo[0]))
        }catch(err){
          console.log("trailer fetch error ", err)
        }
      }
      if(!movieTrailer){
        if(movieId){
          fetchMovieTrailer()
        }
      }
      
  }, [dispatch, movieId, movieTrailer])
}
