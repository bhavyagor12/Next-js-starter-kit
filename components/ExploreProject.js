import React from 'react'
import Particle from './Particles'
import Link from 'next/link'

export default function ExploreProject() {
  return (
    <div className="min-h-screen flex-grow flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <Particle />
      <div className="flex items-center justify-center  text-2xl text-white">
        <div className="mt-5 font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Project</span>
          <span className="ml-2 mr-2 text-black">Feed</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/exploreProject">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">Find your Dev Partner</div>
                <p class="py-3 text-base text-gray-700">
                  connect developers with other developers
                  <br />
                  finding collaborators would be very easy
                  <br />
                  find features that are unique
                </p>
              </div>
              <div class=" flex-end px-6 pt-10 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  DevMates
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #MERN
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  15hrs
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="m-10 flex p-10">
          <Link href="/addProject">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">
                  Employee Management System
                </div>
                <p class="py-3 text-base text-gray-700">
                  A System built using Java to manage the details of all the
                  employees of a particular firm.
                </p>
              </div>
              <div class="px-6 pt-10 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  DevMates
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #Java
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  8hrs
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="m-10 flex p-10">
          <Link href="/newsPage">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">
                  Travel Application using React.js
                </div>
                <p class="py-3 text-base text-gray-700">
                  We are building a Travel web application to revolutionize the
                  the world of travel and integrate technology into this field.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  DevMates
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #Java
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  12hrs
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-around">
        <Link href="chat">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">CHATBOT USING PYTHON</div>
                <p class="py-3 text-base text-gray-700">
                  We are creaing a Chatbot with the help of Python Programming
                  languages. It is a great chance for beginners to get skiled as
                  we are using in-depth concepts of Python.
                </p>
              </div>
              <div class="px-6 pt-12">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  DevMates
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #Python
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  6hrs
                </span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/profile">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">Netflix-Clone</div>
                <p class="py-3 text-base text-gray-700">
                  Yes, you heard it right, we are developing a Netflix clone
                  using Mern Stack. Who all are in to join us?
                </p>
              </div>
              <div class="relative px-6 pt-4 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  DevMates
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #MERN
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  20hr
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
