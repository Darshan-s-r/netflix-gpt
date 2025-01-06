import React from 'react'
import { useRef } from 'react';
import { language } from '../utils/constants';
import { useSelector } from 'react-redux';
import client from '../utils/openAi';
import { gptQuery } from '../utils/constants';
import { url_search_movies, Api_options } from '../utils/constants';
import { addNames, addMovies } from '../reduxStore/GptSclice';
import { useDispatch } from 'react-redux';
export default function GptSearch() {
  const dispatch = useDispatch();
  const prefLang = useSelector(store => store.user.language)
  const input = useRef();

  const handleGptSearch = async(e)=>{
    e.preventDefault();
    const inputValue = input?.current?.value;
    try{
      const response = await client.chat.completions.create({
        messages: [
          { role:"system", content: "" },
          { role:"user", content:  `${gptQuery} + ${inputValue}`}
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
      });
      const movieNames = response.choices[0].message.content.split(", ")
      console.log(movieNames)
      const data = movieNames.map(async(name) => {
        const res = await fetch(url_search_movies + name + '&page=1', Api_options)
        if(!res.ok){
          console.log("fetch movie by name error")
        }
        return res.json()
    })
      const result = await Promise.all(data)
      console.log("data",data);
      console.log("result", result)
      dispatch(addNames(movieNames))
      dispatch(addMovies(result));
    }catch(err){
        console.log("openAI API error,", err)
    }
  }
  return (
    <div className="absolute md:mt-[12%] w-1/2 mt-[30%] ml-[25%] ">
      <form className='grid grid-cols-12' onSubmit={handleGptSearch}>
      <input ref={input} type='text' className='rounded-md text-black  col-span-9 p-2 m-1' placeholder={language[prefLang].placeholder}></input>
      <button className = "rounded-md  bg-red-700 col-span-3 py-2 m-1">{language[prefLang].search}</button>
   
      </form>
      </div>
  )
}
