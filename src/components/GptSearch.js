import React from 'react'
import { useRef } from 'react';
import { language } from '../utils/constants';
import { useSelector } from 'react-redux';


export default function GptSearch() {
  const prefLang = useSelector(store => store.user.language)
  const input = useRef();
  const handleGptSearch = async(e)=>{
    e.preventDefault();
    try{

  
    }catch(err){
        console.log("openAI API error,", err)
    }
   
  }
  return (
    <div className="absolute md:mt-[12%] w-1/2 mt-[30%] ml-[25%] ">
      <form className='grid grid-cols-12' onSubmit={handleGptSearch}>
      <input ref={input} type='text' className='rounded-md  col-span-9 p-2 m-1' placeholder={language[prefLang].placeholder}></input>
      <button className = "rounded-md  bg-red-700 col-span-3 py-2 m-1">{language[prefLang].search}</button>
   
      </form>
      </div>
  )
}
