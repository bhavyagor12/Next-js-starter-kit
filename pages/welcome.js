import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Particle from '../components/Particles'
import Logo from '../assets/logo-removebg-preview.png'

const welcome = () => {
  return (
    <main className=" flex flex-col min-h-screen bg-[#032A5D]">
  <Head>
    <title>Welcome To DevConn</title>
  </Head>
  <div className="">
  <Particle/>
  </div>
  <div className="flex justify-between items-center">
    <div className="px-5 text-white text-9xl">
    <span className="text-[#ff443a]">Dev</span>Mates
      </div>  
     <div className="flex flex-start items-center w-full flex-1 px-5 text-center  justify-center">
      <div className="w-3/5  ">
         <div className="text-left font-bold text-5xl  text-white"> 
         Find Your Dev Partners
        </div>
      </div>
      
    </div>
    </div>
  </main>
  )
}

export default welcome