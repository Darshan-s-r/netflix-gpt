import React from 'react'

export default function GptSearch() {
  return (
    <div className="absolute md:mt-[12%] w-1/2 mt-[30%] ml-[25%] ">
      <form className='grid grid-cols-12'>
      <input type='text' className='rounded-md  col-span-9 p-2 m-1' placeholder='whitch movie do u want to see today'></input>
      <button className = "rounded-md  bg-red-700 col-span-3 py-2 m-1">search</button>
   
      </form>
      </div>
  )
}
