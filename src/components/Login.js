import React, {useState, useRef} from 'react'
import Header from './Header'
import validate from '../utils/ValidateEmailAndPassword'
import UseSignIn from '../hooks/useSignIn';
import UseCreateUser from '../hooks/useCreateUser';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addUser } from "../reduxStore/UserSlice";
import { auth } from '../utils/firebase';
import { netfilxBackGroungImg } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
  if(user){
    navigate("/browse")
  }
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const photoURL = useRef();
  const handlepageChange = (e)=>{
    e.preventDefault()
    setIsSignIn(!isSignIn)
  }

  const handleSignUp =async (e)=>{
      e.preventDefault()
      if(isSignIn){
        const validationError = validate(email.current.value, password.current.value)
        setErrorMsg(validationError);
        if(!validationError){
          const error = await UseSignIn(email.current.value, password.current.value)
          if(!error){
            navigate("/browse")
          }
          setErrorMsg(error)
      }
    }
      else{
        const validationError = validate(email.current.value, password.current.value, name.current.value)
        setErrorMsg(validationError);
        if(!validationError){
          const error = await UseCreateUser(email.current.value, password.current.value, name.current.value, photoURL.current.value)
          if(!error){
            const {uid, email, displayName, photoURL} = auth.currentUser
            dispatch(addUser({uid, email, displayName, photoURL}));
            navigate("/browse")
          }
          setErrorMsg(error)

        }
      }
      
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute top-0 bottom-0 object-cover h-screen w-screen ' src={netfilxBackGroungImg} alt='backgroung-image'></img>
      </div>
      <div className='mt-40 text-white absolute bg-black bg-opacity-80 w-4/12 mx-auto left-0 right-0'>
        <form className='p-10 flex-1'>
          <h1 className='font-bold  mb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          {
            !isSignIn ? (<input className='bg-gray-800 p-1 w-full block  mb-4' ref={name} type='text' placeholder='Name' ></input>
            ) : ''
          }
          <input className='bg-gray-800 p-1 w-full block  mb-4' ref={email} type='text' placeholder='Email' ></input>
          <input className='bg-gray-800 p-1 w-full block  mb-4' ref={password} type='password' placeholder='password' ></input>
          {
            !isSignIn ? (<input className='bg-gray-800 p-1 w-full block  mb-4' ref={photoURL} type='text' placeholder='Photo URL' ></input>
            ) : ''
          }
          <button onClick={handleSignUp} className='bg-red-600 rounded-md w-full px-3 py-2  mb-4'> {isSignIn ? 'Sign In' : 'Sign Up'}</button>
          <p className='text-red-500'>{errorMsg}</p>
          <div className='flex'>
            <p>{isSignIn ? 'New to netflix' : 'Allready a user'}</p>
            <button onClick={handlepageChange} className='cursor-pointer pl-3'>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

