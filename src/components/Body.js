import React, {useEffect} from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/UserSlice";
import MovieDetail from './MovieDetail';

const Body = () => {
    const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
    {
      path:"/browse",
      element:<Browse />,
    },
    {
      path:"/browse/movie/:movieId",
      element:<MovieDetail />
    },
 
   
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
         const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({uid, email, displayName, photoURL}));
      } else {
        dispatch(removeUser())
      }
    });
  }, [dispatch])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>

    </div>
  )
}

export default Body 