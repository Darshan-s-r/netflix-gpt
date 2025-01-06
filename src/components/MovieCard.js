import { url_TMDB_CDN } from "../utils/constants"

export default function MovieCard({movie}) {
  if(!movie?.poster_path){
    return;
  }
  return (
    <div className='pr-2 md:pr-3 md:w-40 w-24 flex-shrink-0'>
      <img className='object-cover rounded-md' src={url_TMDB_CDN + movie?.poster_path} alt='poster'></img>
    </div>
  )
}
