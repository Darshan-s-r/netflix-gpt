import { url_TMDB_CDN } from "../utils/constants"

export default function MovieCard({movie}) {
  return (
    <div className='p-1 md:p-2 md:w-40 w-24 flex-shrink-0'>
      <img className='object-cover' src={url_TMDB_CDN + movie?.poster_path} alt='poster'></img>
    </div>
  )
}
