import { useDispatch, useSelector } from "react-redux";
import { setMovieVideos } from "../reduxStore/movieDetailSlice";
import {Api_options } from "../utils/constants"
import { useEffect } from "react";
import { url_trailerInfo } from "../utils/constants";

export default function useMovieVideos(id) {
  const movieVideos = useSelector(store => store.movieDetail.movieVideos)

  const dispatch = useDispatch();
  useEffect(()=>{ 
      const fetchMovieVideos = async ()=>{
        try{
          const movieVideos = await fetch(url_trailerInfo+`/${id}/videos`, Api_options);
          const videosInfo = await movieVideos.json()
          const videos = videosInfo.results.filter(video=>video.site === "YouTube")
          const trailer = videos.filter(video=>video.type === "Trailer")
          const teaser = videos.filter(video=>video.type === "Teaser")
          const others = videos.filter(video=>video.type !== "Trailer" && video.type !== "Teaser")
          console.log("trailer",trailer)
          console.log("others", others)
          dispatch(setMovieVideos({id:videosInfo.id, trailer:trailer, teaser:teaser, others:others}))
        }catch(err){
          console.log("movie videos fetch error ", err)
        }
      }
        if(id){
          if(!movieVideos || String(movieVideos.id) !== String(id)){
            fetchMovieVideos()
        }
      }
      
  }, [dispatch, id, movieVideos])
}
