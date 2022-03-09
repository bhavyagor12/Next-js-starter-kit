import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Particle from '../components/Particles'
import Logo from '../assets/logo-removebg-preview.png'
import Profile from '../components/Profile'

const profile = () => {
  return (
    <main className=" flex flex-col min-h-screen bg-[#032A5D]">
  <Head>
    <title>Profile page</title>
  </Head>
  <div className="">
  <Particle/>
  </div>
  <div className="profile pt-20">
  <Profile/>
  </div>
  </main>
  )
}

export default profile