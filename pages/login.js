import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getProviders, signIn } from 'next-auth/react'
import Particle from '../components/Particles'

const login = ({ providers }) => {
  return (
    <>
      <Particle />
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#032A5D] py-2">
        <Head>
          <title>Sign in</title>
        </Head>
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
          <div className="flex w-2/3 max-w-7xl rounded-2xl bg-white shadow-2xl">
            <div className="w-3/5 p-5 ">
              <div className="text-left text-2xl  font-bold">
                <span className="text-[#0082EF]">Dev</span>Mates
              </div>

              <div className="py-10 ">
                <h2 className="mb-2 text-3xl font-bold text-[#0082EF] ">
                  Sign into your account
                </h2>
                <div className="mb-2 inline-block w-10 border-2 border-[#0082EF]"></div>
                <div className="my-2 flex flex-col justify-center ">
                  {Object.values(providers).map((provider) => (
                    <div className="p-5">
                      <button
                        onClick={() =>
                          signIn(provider.id, { callbackUrl: '/homePage' })
                        }
                        className="inline-block rounded-full border-2 border-gray-200 px-12 py-2 font-semibold hover:bg-[#0082EF] hover:text-white"
                      >
                        {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-[#0082EF] py-36 px-12 text-white">
              <h2 className="mb-2 text-3xl font-bold "> Hello There!</h2>
              <div className="mb-2 inline-block w-10 border-2 border-white"></div>
              <p className="mb-10">
                {' '}
                You have to login to use our amazing features
              </p>
              <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                <Link href="/homePage">Explore</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
