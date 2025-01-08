import { useEffect } from 'react'
import { Api_options, url_search_movie_with_id } from '../utils/constants'
import { useSelector, useDispatch } from 'react-redux'
import { setMovieInfo } from '../reduxStore/movieDetailSlice';
export default function useSearchMovieWithId(id) {
  const dispatch = useDispatch();
  const movieInfo = useSelector(store => store.movieDetail.movieInfo)
  useEffect(()=>{
    const fetchMovieInfo = async()=>{
      try{
          const res = await fetch(url_search_movie_with_id + id, Api_options);
          const data = await res.json()
          console.log("movie info",data)
          dispatch(setMovieInfo(data))
      }catch(err){
        console.log("fetch movie info error,", err);
      }
    }
    if(id){
      if(!movieInfo || String(movieInfo.id) !== String(id)){
        fetchMovieInfo();
      }
    }
   
  }, [id, dispatch, movieInfo])
}
