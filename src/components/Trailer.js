import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export default function Trailer({movieId}) {

const movieTrailer = useSelector(store=> store.moviesList.movieTrailer)
console.log(movieTrailer ,"movie trailer ")
useMovieTrailer(movieId)

  return (
    <div className="">
     <iframe
  className=" absolute w-screen aspect-video -z-10 top-0 left-0 right-0"
  src={`https://www.youtube.com/embed/${movieTrailer?.key}?mute=1&autoplay=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  
></iframe>
    </div>
  );


}


