import { useParams } from "react-router-dom"
import useMovieVideos from "../hooks/useMovieVideos";
import useSearchMovieWithId from "../hooks/useSearchMovieWithId";
import Header from "./Header";
import MovieInfo from "./MovieInfo";
import MovieVideos from "./MovieVideos";

export default function MovieDetail() {
  const {movieId} = useParams();
  const id = movieId.split("-")[0];
  useMovieVideos(id)
  useSearchMovieWithId(id)
  return (
    <div className="bg-black text-white">
      <Header />
      <MovieInfo />
      <MovieVideos />
      </div>
  )
}
