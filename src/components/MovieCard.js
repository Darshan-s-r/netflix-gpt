import { url_TMDB_CDN } from "../utils/constants"
import { Link } from "react-router-dom";
export default function MovieCard({movie}) {
  if(!movie?.poster_path){
    return;
  }
  return (
    <Link to={`/browse/movie/${movie?.id}-${movie?.original_title.replace(' ', '-')}`} >
    <div className='pr-2 md:pr-3 md:w-40 w-24 flex-shrink-0'>
      <img className='object-cover rounded-md' src={url_TMDB_CDN + movie?.poster_path} alt='poster'></img>
    </div>
    </Link>
  )
}
