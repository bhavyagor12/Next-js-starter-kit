
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Signin from './login'
import { signIn, signOut, useSession } from 'next-auth/react'
import {FcGoogle} from 'react-icons/fc'
import Particle from '../components/Particles'
import Link from 'next/link'

const Home = () => {


  return (
  <main className=" flex flex-col items-center w-full flex-1 text-center justify-center min-h-screen bg-[#032A5D]">
   <Head>
     <title>Dev Mates</title>
     </Head>
     <Particle/>
   <div className="flex flex-col items-center w-full flex-1 px-5 text-center justify-center">
    <div className="text-white text-9xl">
    <span className="text-[#ff443a]">Dev</span>Mates
    <div className="text-white flex flex-start items-center justify-center text-xl mt-2">
     Connecting developers to a community
    </div>
    <button class="bg-[#FF443A] text-white hover:bg-white hover:text-[#ff443a] font-semi text-xl py-2 px-4 rounded-full">
    <Link href="/login">
     Get Started
     </Link>
    </button>
  
    </div>    
    </div>
   </main>
  )
}

export default Home
