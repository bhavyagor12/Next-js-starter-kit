import Head from 'next/head'
import Particle from '../components/Particles'
import Link from 'next/link'

const Home = () => {
  return (
    <main className=" flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-[#032A5D] text-center">
      <Head>
        <title>Dev Mates</title>
      </Head>
      <Particle />
      <div className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center">
        <div className="text-9xl text-white">
          <span className="text-[#ff443a]">Dev</span>Mates
          <div className="flex-start mt-2 flex items-center justify-center text-xl text-white">
            Connecting developers to a community
          </div>
          <button class="font-semi rounded-full bg-[#FF443A] py-2 px-4 text-xl text-white hover:bg-white hover:text-[#ff443a]">
            <Link href="/login">Get Started</Link>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
