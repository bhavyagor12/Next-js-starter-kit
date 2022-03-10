import React from 'react'
import Link from 'next/link'
import Particle from '../components/Particles'

export default function AddProject() {
  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <Particle />
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Project Operations</span>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <form class="w-full max-w-lg">
          <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                class="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full px-3 md:w-1/2">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-last-name"
              >
                Owner Name
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="-mx-3 mb-6 flex flex-wrap">
            <div class="w-full px-3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-password"
              >
                Description
              </label>
              <input
                class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="text"
                placeholder=""
              />
              <p class="text-xs italic text-gray-600">
                A DETAILED DESC IS HELPFUL
              </p>
            </div>
          </div>
          <div class="-mx-3 mb-2 flex flex-wrap">
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-city"
              >
                Total Members
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                type="numbers"
                placeholder="Albuquerque"
              />
            </div>
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-state"
              >
                Tech Stack
              </label>
              <div class="relative">
                <select
                  class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option>MERN</option>
                  <option>PERN</option>
                  <option>DJANGO</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                for="grid-zip"
              >
                completion time
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
            <div class="m-6 mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <div className="my-10">
                <div className="flex justify-between">
                  <button className="mr-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">ADD</Link>
                  </button>
                  <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">UPDATE</Link>
                  </button>
                  <button className="ml-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    <Link href="">DELETE</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
