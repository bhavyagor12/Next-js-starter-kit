
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Signin from './login'
import { signIn, signOut, useSession } from 'next-auth/react'
import {FcGoogle} from 'react-icons/fc'

const Home = () => {
  
const {data: session, loading } = useSession();

  return (
  <div>
   <Head>
     <title>Next app</title>
     </Head>

     {!session && (
       <>
       <button onClick={signIn} className="border-2 border-gray-200 rounded-full p-3 mx-1">
        <FcGoogle className="text-sm"/>
        </button>
       </>
     )}

     {session &&(
     
     <>
     You are signed in
     </>
     )
     }

   </div>
  )
}

export default Home
