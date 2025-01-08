import { useDispatch, useSelector } from "react-redux"
import { url_video_thumnail } from "../utils/constants"
import { setPlayVideo, setNowPlayingVideo } from "../reduxStore/movieDetailSlice"

export default function VideoCard({video}) {
  const dispatch = useDispatch()
  const playVideo = useSelector(store=> store.movieDetail.playVideo)
  const handlePlayVideo = (e)=>{
    e.preventDefault()
        dispatch(setNowPlayingVideo(video?.key))
        dispatch(setPlayVideo(!playVideo))
  }
  return (
        <div onClick={handlePlayVideo} className='relative pr-2 md:pr-3 md:w-56 w-28 flex-shrink-0'>
          <button className="font-semibold opacity-50 hover:opacity-100 absolute md:top-16 md:left-24 top-7 left-9">Play</button>
          <img className='object-cover rounded-md' src={url_video_thumnail + video?.key + "/hqdefault.jpg"} alt='tumbnail'></img>
        </div>
  )
}
