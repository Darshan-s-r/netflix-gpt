import React, {useState, useRef} from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handlepageChange = (e)=>{
    e.preventDefault()
    setIsSignIn(!isSignIn)
  }

  const handleSignUp = (e)=>{
      e.preventDefault()
      console.log(email.current.value)
      console.log(email)
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg' alt='backgroung-image'></img>
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
          <button onClick={handleSignUp} className='bg-red-600 w-full px-3 py-2  mb-4'> {isSignIn ? 'Sign Up' : 'Sign In'}</button>
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

