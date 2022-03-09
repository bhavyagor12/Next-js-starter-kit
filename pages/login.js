import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {FcGoogle, } from 'react-icons/fc'
import {VscGithub} from 'react-icons/vsc'
import {FaRegEnvelope} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { signIn} from 'next-auth/react'

const login = () => {
return(
    
          <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
          
       <Head>
      <title>Sign in</title>
  </Head>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div className="w-3/5 p-5 ">
         <div className="text-left font-bold "> 
           <span className="text-green-500">Company</span>Name
        </div>
        
      <div className="py-10 ">
      <h2 className="text-3xl font-bold text-green-500 mb-2 ">Sign into your account</h2>
      <div className="border-2 w-10 border-green-500 inline-block mb-2" ></div>
      <div className="flex justify-center my-2">
        <button onclick={signIn}className="border-2 border-gray-200 rounded-full p-3 mx-1">
        <FcGoogle className="text-sm"/>
        </button>
        <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
        <VscGithub className="text-sm"/>
        </button>
        <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
        <AiFillTwitterCircle className="text-sm"/>
        </button>
      
        </div>
        <p className="text-gray-400 my-3">Sign in using Email</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
           <FaRegEnvelope className="text-gray-400 m-2"/>
           <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none  text-sm flex-1"/>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
           <RiLockPasswordFill className="text-gray-400 m-2"/>
           <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none  text-sm flex-1"/>
          </div>
          <div className = "flex justify-between w-64 mb-5 ">
            <label className="flex items-center text-xs">
              <input type="checkbox" name="remember" className="mr-1" />Remember me
            </label>
            <a href="#" className="text-xs">Forgot Password?</a>
          </div>
          <a href="#" className="border-2 border-gray-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Login</a>

        </div>

      </div>
      </div>

      <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2 "> Hello There!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2" ></div>
          <p className="mb-10">  Fill up the form and become a member of our journey</p>
          <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign up</a>
      </div>
      
      </div>
  </div>
  </main>
    
  
  )
}
  

export default login