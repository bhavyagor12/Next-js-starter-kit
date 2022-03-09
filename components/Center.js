import React from 'react'
import { Home_Page } from "../assets/Home_Page.jpeg";

const Center = () => {
  return (
    <div className="flex-grow ">
      <div className="container">
        <div className='flex'>
        <span className="text-[#ff443a]">Smart</span>and<span className="text-[#ff443a]">talented</span>people are our thing.
        <span className="text-gray-400">You are probably aware that the Philippines is the home to the
        friendliest people on earth. Now pair that up with truly
        talented individuals who know their stuff, you have your
        extended dream team.</span>
        </div>
        <Image src={Home_Page} height="200" width="200" className="justify-right"/>
      </div>
    </div>
  )
}

export default Center