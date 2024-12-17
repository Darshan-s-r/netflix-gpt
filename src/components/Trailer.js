import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

export default function Trailer() {

  useNowPlayingMovies();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Luq2aEeRoKQ?si=Uz8tNym52U4eaRaK"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
