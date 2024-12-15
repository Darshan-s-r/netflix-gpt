import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import store from "../utils/AppStore"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
    });
  }
  return (
    <div className='absolute flex z-10 w-screen bg-gradient-to-b from-black'>
      <img className='w-44 ml-20 mt-2' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix-logo'></img>
      
      {
        user ? (
          <div className='mt-6 ml-auto mr-9 flex'>
          <img className='w-12 h-12 rounded-full' src={user.photoURL} alt='profile image'></img>
        <button onClick={handleSignOut} className='px-3 mt-2 mx-3 h-10  rounded-md border-black bg-gray-300'>(sign Out)</button>
        </div>
        ) : null
      }
    </div>
  )
}


export default Header
