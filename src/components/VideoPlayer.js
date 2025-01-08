import { useDispatch, useSelector } from "react-redux"
import { setNowPlayingVideo, setPlayVideo } from "../reduxStore/movieDetailSlice"

export default function VideoPlayer() {
  const dispatch = useDispatch()
  const video = useSelector(store=> store.movieDetail.nowPlayingVideo)
  const playVideo = useSelector(store => store.movieDetail.playVideo)

  const handleVideoClose = (e)=>{
    e.preventDefault();
    dispatch(setPlayVideo(!playVideo));
    dispatch(setNowPlayingVideo(null))
  }

  return (
       <div className={`${playVideo ? "block" : "hidden"} bg-black z-20 fixed top-0 left-0 right-0 bottom-0`}>
        <button className="bg-red-700 absolute rounded-md right-10 top-10 px-2" onClick={handleVideoClose}>X</button>
     <iframe
  className="w-screen h-screen aspect-video p-10"
  src={`https://www.youtube.com/embed/${video}`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  
></iframe>
    </div>
  )
}
