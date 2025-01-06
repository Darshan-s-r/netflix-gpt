import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

export default function GptSuggestions() {
  const GptResult = useSelector(store => store.GptResult)
  if(!GptResult.movies || GptResult.movies.length === 0){
    return
  }
  return (
    <div className='absolute bg-black opacity-85 mt-[50%] mx-5 py-10 md:mx-10 md:mt-[25%] left-0 right-0 rounded-md'>
      {
        GptResult?.movies.map((movies, index)=> <MoviesList title={GptResult.names[index]} moviesList={movies.results} />
      )
      }
    </div>
  )
}
