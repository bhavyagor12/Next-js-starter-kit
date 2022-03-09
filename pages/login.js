import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {FcGoogle, } from 'react-icons/fc'
import {VscGithub} from 'react-icons/vsc'
import {AiFillLinkedin,AiFillGoogleSquare} from 'react-icons/ai'
import {FaRegEnvelope} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri' 
import { signIn} from 'next-auth/react'
import Particle from '../components/Particles'

const login = () => {
return(
    
  <>
  <Particle/>


          <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#032A5D]">
          
       <Head>
      <title>Sign in</title>
  </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-7xl">
      <div className="w-3/5 p-5 ">
         <div className="text-left font-bold  text-2xl"> 
           <span className="text-[#0082EF]">Dev</span>Mates
        </div>
    
      <div className="py-10 ">
      <h2 className="text-3xl font-bold text-[#0082EF] mb-2 ">Sign into your account</h2>
      <div className="border-2 w-10 border-[#0082EF] inline-block mb-2" ></div>
      <div className="flex flex-col justify-center my-2 ">
        <div className="p-5"><button onClick={signIn} className="border-2  border-gray-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#0082EF] hover:text-white">
         <AiFillGoogleSquare size={40}/>
        </button>
        </div>   
        <div className="p-5"><button onClick={signIn} className="border-2  border-gray-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#0082EF] hover:text-white"><VscGithub size={40} /></button></div>   
        <div className="p-5"><button onClick={signIn} className="border-2 border-gray-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#0082EF] hover:text-white"><AiFillLinkedin size={40}/></button></div>   

      
        </div>
      </div>
      </div>

      <div className="w-2/5 bg-[#0082EF] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2 "> Hello There!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2" ></div>
          <p className="mb-10"> You have to login to use our amazing features</p>
          <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#0082EF]">Explore</button>
      </div>
      
      </div>
  </div>
  </main>
    
</>
  )
}
  

export default login