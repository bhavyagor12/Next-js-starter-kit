import React from 'react';
import { Home_Page } from "../assets/Home_Page.jpeg";
import { stock } from "../assets/stock.png";

export const Profile = () => {
  return (
    <div className='max-w-6xl mx-5 p-10 xl:mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='avatar justify-center'>
                <div className='rounded-full w-36 h-36'>
                <Image src={Home_Page} height="200" width="200"/>

                </div>
            </div>
            <div className='col-span-2'>
            <span className="text-[#ff443a]">Devraj</span> Mishra
            <div className='cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4'>
                Edit Profile
            </div>
            <div><span className='font-semibold'>14</span>projects worked on</div>
                        </div>
                <URL>linkedin</URL>
                <URL>github</URL>
        </div>
        <br></br>
        {/* <div>
            <span className='font-semibold'>PROJECTS</span>
        </div> */}
    <div>
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h3 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h3>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
            <Image src={stock} height="200" width="200"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
    </div></div>
  )
}
