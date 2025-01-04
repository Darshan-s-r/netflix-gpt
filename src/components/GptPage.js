import React from "react";
import GptSearch from "./GptSearch";
import GptSuggestions from "./GptSuggestions";
import {netfilxBackGroungImg} from '../utils/constants'

export default function GptPage() {
  return (
    <div className="bg-red-200">
      <div>
        <img className='absolute top-0 bottom-0 -z-10 object-cover h-screen w-screen ' src={netfilxBackGroungImg} alt='backgroung-image'></img>
      </div>
      <GptSearch />
      {/* <GptSuggestions /> */}
    </div>
  );
}
