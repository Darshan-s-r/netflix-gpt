import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLanguage, setBrowsePage } from '../reduxStore/UserSlice';
import { language_supported } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user.user)
  const browsePage = useSelector(store => store.user.browsePage)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
    });
  }

  const handleLangusgeChange = (e) =>{
    dispatch(setLanguage(e.target.value));
  }

  const handlePageChange = (e)=>{
    e.preventDefault();
    dispatch(setBrowsePage(!browsePage))
  }

  return (
    <div className='flex fixed z-10 top-0 w-screen bg-gradient-to-b from-black text-white'>
      <img className='md:w-44 w-28 md:ml-20 ml-2 mt-4 md:mt-3 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix'></img>
      
      {
        user ? (
          <div className='mt-6 h-8 md:h-12 mx-3 ml-auto mr-9 flex'>
          <select onChange={handleLangusgeChange} className='bg-black border border-amber-200 px-2 rounded-md' id="language">
            {
                language_supported.map(language =>  <option value={language.identifier}>{language.name}</option>)
            }
          </select>
          <button onClick={handlePageChange} className='bg-purple-950 px-2 rounded-md mx-3'>{browsePage ? 'GPT search' : 'Home page'}</button>
          <img className='md:w-12 md:h-12 w-8 h-8 rounded-full' src={user.photoURL} alt='profile'></img>
        <button onClick={handleSignOut} className='px-2 mx-3 text-2xl rounded-md bg-red-500'>X</button>
        </div>
        ) : null
      }
    </div>
  )
}


export default Header
